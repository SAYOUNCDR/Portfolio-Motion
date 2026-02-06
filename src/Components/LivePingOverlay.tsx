import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { supabase } from "../lib/supabaseClient";
import { useTheme } from "../contexts/ThemeContext";
import {
    CHANNEL_SUFFIX,
    MESSAGE_TTL_MS,
    MAX_VISIBLE,
    derivePingAlias,
    type PingPayload,
} from "../lib/pingConstants";
import { subscribeToPingBus } from "../lib/pingBus";

interface LivePingOverlayProps {
    channelTopic?: string;
    className?: string;
}

type OverlayMessage = PingPayload & {
    self: boolean;
};

const OVERLAY_MAX_VISIBLE = Math.min(MAX_VISIBLE, 5);

export default function LivePingOverlay({ channelTopic = "portfolio-presence", className = "" }: LivePingOverlayProps) {
    const { theme } = useTheme();
    const [messages, setMessages] = useState<OverlayMessage[]>([]);
    const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null);
    const timeoutsRef = useRef<Map<string, number>>(new Map());
    const pendingRef = useRef<OverlayMessage[]>([]);
    const clientId = useMemo(() => crypto.randomUUID(), []);

    const bubbleStyles = theme === "dark"
        ? "bg-zinc-900/90 text-zinc-100 border border-zinc-700"
        : "bg-white/95 text-slate-700 border border-slate-200";

    const scheduleRemoval = useCallback((entry: OverlayMessage) => {
        const timeoutId = window.setTimeout(() => {
            setMessages((current) => {
                const remaining = current.filter((item) => item.id !== entry.id);
                if (pendingRef.current.length > 0) {
                    const [next, ...rest] = pendingRef.current;
                    pendingRef.current = rest;
                    scheduleRemoval(next);
                    return [...remaining, next];
                }
                return remaining;
            });
            timeoutsRef.current.delete(entry.id);
        }, MESSAGE_TTL_MS);

        timeoutsRef.current.set(entry.id, timeoutId);
    }, []);

    const pushMessage = useCallback((payload: PingPayload) => {
        const entry: OverlayMessage = {
            ...payload,
            alias: derivePingAlias(payload.alias || payload.clientId),
            self: payload.clientId === clientId,
        };

        setMessages((current) => {
            if (current.some((item) => item.id === entry.id)) {
                return current;
            }
            if (current.length < OVERLAY_MAX_VISIBLE) {
                scheduleRemoval(entry);
                return [...current, entry];
            }
            if (!pendingRef.current.some((item) => item.id === entry.id)) {
                pendingRef.current = [...pendingRef.current, entry];
            }
            return current;
        });
    }, [clientId, scheduleRemoval]);

    useEffect(() => {
        const timeouts = timeoutsRef.current;
        const channelName = `${channelTopic}${CHANNEL_SUFFIX}`;
        const channel = supabase.channel(channelName, {
            config: {
                broadcast: { self: true },
            },
        });

        const handler = (event: { payload: PingPayload }) => {
            const payload = event.payload;
            if (!payload?.id || !payload.text) {
                return;
            }
            const now = Date.now();
            if (now - payload.createdAt > MESSAGE_TTL_MS) {
                return;
            }
            pushMessage(payload);
        };

        channel.on("broadcast", { event: "ping" }, handler);
        channel.subscribe();
        channelRef.current = channel;

        return () => {
            timeouts.forEach((id) => window.clearTimeout(id));
            timeouts.clear();
            pendingRef.current = [];
            channel.unsubscribe();
            channelRef.current = null;
        };
    }, [channelTopic, clientId, pushMessage]);

    useEffect(() => {
        const unsubscribe = subscribeToPingBus(pushMessage);
        return unsubscribe;
    }, [pushMessage]);

    useEffect(() => {
        const timeouts = timeoutsRef.current;
        return () => {
            timeouts.forEach((id) => window.clearTimeout(id));
            timeouts.clear();
        };
    }, []);

    if (messages.length === 0) {
        return null;
    }

    return (
        <div className={`pointer-events-none fixed left-6 top-[50px] sm:left-8 z-[60] flex flex-col gap-2 ${className}`}>
            <AnimatePresence>
                {messages.map((message) => (
                    <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ type: "spring", stiffness: 240, damping: 22 }}
                        className={`flex max-w-[200px] items-center justify-between rounded-md px-3 py-1.5 text-[11px] font-medium shadow-lg backdrop-blur-sm ${bubbleStyles}`}
                    >
                        <span className="mr-2 flex-shrink-0 text-[10px] font-semibold uppercase tracking-wide opacity-70">
                            #{message.alias}
                        </span>
                        <span className="flex-1 break-words whitespace-normal text-left">
                            {message.text}
                        </span>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
