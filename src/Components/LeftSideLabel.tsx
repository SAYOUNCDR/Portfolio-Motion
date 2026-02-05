import { useTheme } from "../contexts/ThemeContext";

export default function LeftSideLabel() {
    const { theme } = useTheme();

    const textColor = theme === 'dark' ? 'text-white' : 'text-slate-900';
    const lineColor = theme === 'dark' ? 'bg-white' : 'bg-slate-900';

    return (
        <div className="fixed left-6 top-20 hidden md:flex flex-col items-center gap-6 z-40 select-none pointer-events-none">
            {/* Vertical Line */}
            <div className={`w-[1px] h-24 ${lineColor}`}></div>

            {/* Rotated Text: reading top-to-bottom on left side */}
            <div
                className={`text-xs font-bold tracking-[0.2em] uppercase ${textColor}`}
                style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    // Default vertical-rl is good for left side (top to bottom reading)
                }}
            >
                Start a Project
            </div>
        </div>
    );
}
