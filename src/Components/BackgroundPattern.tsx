import { useTheme } from "../contexts/ThemeContext";

export default function BackgroundPattern() {
    const { theme } = useTheme();

    // Subtle colors for the dots - increased opacity for visibility
    const dotColor = theme === 'dark'
        ? "rgba(255, 255, 255, 0.15)"
        : "rgba(0, 0, 0, 0.15)";

    return (
        <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden select-none">
            {/* Dot Pattern */}
            <div
                className="absolute inset-0 h-full w-full"
                style={{
                    backgroundImage: `radial-gradient(${dotColor} 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse at center, transparent 30%, black 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 30%, black 100%)'
                }}
            />
        </div>
    );
}
