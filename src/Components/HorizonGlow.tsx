import { useTheme } from "../contexts/ThemeContext";

export default function HorizonGlow() {
    const { theme } = useTheme();

    // Glow color: Whiteish for dark mode, darker/shadowy for light mode? 
    // "Sun ray" implies light. 
    // "Dark horizon glow" might mean a glow that fits a dark horizon.
    // Let's try a subtle white glow for dark mode, and a subtle warm/dark glow for light mode.

    const glowColor = theme === 'dark'
        ? "rgba(255, 255, 255, 0.15)" // "Darker" (less bright) and subtle
        : "rgba(0, 0, 0, 0.15)";

    return (
        <div className="absolute top-0 left-0 w-full h-[120vh] z-[20] pointer-events-none select-none overflow-hidden">
            <div
                className="absolute top-0 left-0 w-[120vw] h-[90vh]" // Removed opacity-60 for direct color control
                style={{
                    background: `radial-gradient(ellipse at 0% 0%, ${glowColor}, transparent 70%)`, // Centered strictly at corner
                    filter: 'blur(120px)',
                }}
            />
        </div>
    );
}
