export const MESSAGE_TTL_MS = 3600;
export const RATE_LIMIT_MS = 5000;
export const MAX_VISIBLE = 6;
export const CHANNEL_SUFFIX = "-chat";

export const derivePingAlias = (id: string) => {
    const compact = id.replace(/-/g, "");
    const slice = compact.slice(0, 4).toUpperCase();
    return slice || "PING";
};

export type PingPayload = {
    id: string;
    text: string;
    createdAt: number;
    clientId: string;
    alias: string;
};
