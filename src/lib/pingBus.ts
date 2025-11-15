import type { PingPayload } from "../Components/LivePingChat";

type Listener = (payload: PingPayload) => void;

const listeners = new Set<Listener>();

export function emitPing(payload: PingPayload) {
    listeners.forEach((listener) => {
        try {
            listener(payload);
        } catch (err) {
            // ignore listener errors to keep bus alive
        }
    });
}

export function subscribeToPingBus(listener: Listener) {
    listeners.add(listener);
    return () => {
        listeners.delete(listener);
    };
}
