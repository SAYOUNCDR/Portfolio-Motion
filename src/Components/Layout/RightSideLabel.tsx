import { useTheme } from "../../contexts/ThemeContext";

export default function RightSideLabel() {
    const { theme } = useTheme();

    const textColor = theme === 'dark' ? 'text-white' : 'text-slate-900';
    const lineColor = theme === 'dark' ? 'bg-white' : 'bg-slate-900';

    return (
        <div className="fixed right-6 bottom-20 hidden md:flex flex-col items-center gap-6 z-40 select-none pointer-events-none">
            {/* Rotated Text: sliding up */}
            <div
                className={`text-xs font-bold tracking-[0.2em] uppercase ${textColor}`}
                style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)' // To align facing the slider if needed, or simply standard vertical
                }}
            >
                Sayoun Parui
            </div>

            {/* Vertical Line */}
            <div className={`w-[1px] h-24 ${lineColor}`}></div>
        </div>
    );
}