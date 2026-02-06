import { type FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { SendHorizonal } from "lucide-react";
import { supabase } from "../lib/supabaseClient";
import { useTheme } from "../contexts/ThemeContext";
import { emitPing } from "../lib/pingBus";

import {
    RATE_LIMIT_MS,
    CHANNEL_SUFFIX,
    derivePingAlias,
    type PingPayload,
} from "../lib/pingConstants";

type LivePingChatProps = {
    className?: string;
    channelTopic?: string;
    maxWidthClass?: string;
    inputWidthClass?: string;
    orientation?: "vertical" | "horizontal";
};

export default function LivePingChat({
    className = "",
    channelTopic = "portfolio-presence",
    maxWidthClass = "max-w-xs",
    inputWidthClass,
    orientation = "vertical",
}: LivePingChatProps) {
    const { theme } = useTheme();
    const [inputValue, setInputValue] = useState("");
    const [cooldownMs, setCooldownMs] = useState(0);
    const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null);
    const clientId = useMemo(() => crypto.randomUUID(), []);
    const alias = useMemo(() => derivePingAlias(clientId), [clientId]);

    const shellStyles = theme === "dark"
        ? "bg-zinc-900/75 border border-zinc-700 text-zinc-100 shadow-[inset_4px_4px_12px_rgba(0,0,0,0.6),inset_-4px_-4px_12px_rgba(160,160,170,0.18)]"
        : "bg-white/85 border border-slate-200 text-slate-700 shadow-[inset_6px_6px_16px_rgba(148,163,184,0.25),inset_-6px_-6px_16px_rgba(255,255,255,0.85)]";

    const inputStyles = theme === "dark"
        ? "placeholder:text-zinc-500 text-zinc-100"
        : "placeholder:text-slate-400 text-slate-700";

    const buttonStyles = theme === "dark"
        ? "text-zinc-200 hover:text-emerald-400"
        : "text-slate-600 hover:text-emerald-500";

    useEffect(() => {
        if (cooldownMs <= 0) {
            return;
        }
        const tick = window.setInterval(() => {
            setCooldownMs((prev) => (prev <= 250 ? 0 : prev - 250));
        }, 250);
        return () => window.clearInterval(tick);
    }, [cooldownMs]);

    useEffect(() => {
        const channelName = `${channelTopic}${CHANNEL_SUFFIX}`;
        const channel = supabase.channel(channelName, {
            config: {
                broadcast: { self: true },
            },
        });

        channel.subscribe();

        channelRef.current = channel;

        return () => {
            channel.unsubscribe();
            channelRef.current = null;
        };
    }, [channelTopic, clientId]);

    const sendMessage = async () => {
        if (cooldownMs > 0) {
            return;
        }
        const trimmed = inputValue.trim();
        if (!trimmed) {
            return;
        }
        const clipped = trimmed.slice(0, 120);
        const payload: PingPayload = {
            id: crypto.randomUUID(),
            text: clipped,
            createdAt: Date.now(),
            clientId,
            alias,
        };
        emitPing(payload);
        setInputValue("");
        setCooldownMs(RATE_LIMIT_MS);

        if (!channelRef.current) {
            return;
        }

        const status = await channelRef.current.send({
            type: "broadcast",
            event: "ping",
            payload,
        });

        if (status !== "ok") {
            // optionally handle retry logic later
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        void sendMessage();
    };

    const isDisabled = cooldownMs > 0;
    const cooldownSeconds = cooldownMs > 0 ? Math.ceil(cooldownMs / 1000) : 0;
    const placeholderText = cooldownSeconds > 0 ? `wait ${cooldownSeconds}s` : "ping live users";

    const computedInputWidth = inputWidthClass ?? (orientation === "horizontal" ? "w-[170px]" : "w-full");
    const rootAlignment = orientation === "horizontal" ? "items-start" : "items-end";

    const formElement = (
        <form
            onSubmit={handleSubmit}
            className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs backdrop-blur-md ${shellStyles} ${computedInputWidth} flex-shrink-0`}
        >
            <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder={placeholderText}
                maxLength={120}
                className={`w-full bg-transparent outline-none ${inputStyles}`}
                disabled={isDisabled}
                aria-label="Ping the live viewers"
            />
            <button
                type="submit"
                className={`flex h-7 w-7 items-center justify-center transition ${buttonStyles}`}
                disabled={isDisabled}
                aria-disabled={isDisabled}
                aria-label="Send ping"
            >
                <SendHorizonal className="h-3.5 w-3.5 -rotate-40 transition-transform" />
            </button>
        </form>
    );

    return (
        <div className={`flex w-full ${maxWidthClass} ${className} ${rootAlignment}`}>
            {formElement}
        </div>
    );
}
