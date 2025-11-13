import { useTheme } from "../contexts/ThemeContext";

export default function BottomBlur() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const layerMask = isDark
        ? "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0) 100%)"
        : "linear-gradient(to top, rgba(148,163,184,0.7) 0%, rgba(148,163,184,0.35) 55%, rgba(148,163,184,0) 100%)";
    const layerTint = isDark
        ? "bg-gradient-to-t from-black/35 via-black/15 to-transparent"
        : "bg-gradient-to-t from-slate-200/70 via-slate-200/30 to-transparent";

    return (
        <div aria-hidden className="pointer-events-none fixed inset-x-0 bottom-0 h-8 sm:h-10">
            <div
                className="absolute inset-0 backdrop-blur-lg sm:backdrop-blur-xl"
                style={{
                    WebkitMaskImage: layerMask,
                    maskImage: layerMask,
                }}
            />
            <div className={`absolute inset-0 ${layerTint}`} />
        </div>
    );
}
