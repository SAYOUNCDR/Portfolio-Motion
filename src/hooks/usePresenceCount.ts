import { useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabaseClient"

export function usePresenceCount(channelTopic = "portfolio-presence") {
    const [count, setCount] = useState<number>(1);

    // stable uuid per connection attempt
    const presenceKey = useMemo(() => crypto.randomUUID(), []);

    useEffect(() => {
        const channel = supabase.channel(channelTopic, {
            config: { presence: { key: presenceKey } },
        });

        channel
            .on("presence", { event: "sync" }, () => {
                try {
                    const state = channel.presenceState();
                    setCount(Object.keys(state).length);
                } catch {
                    // ignore
                }
            })
            .subscribe(async (status) => {
                if (status === "SUBSCRIBED") {
                    // announce presence with optional metadata
                    await channel.track({ online_at: new Date().toISOString() });
                }
            });

        return () => {
            // unsubscribe will auto-untrack on disconnect
            channel.unsubscribe();
        };
    }, [channelTopic, presenceKey]);

    return count;
}
