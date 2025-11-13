import { useTheme } from "../contexts/ThemeContext";

const AboutContent = () => {
    const { theme } = useTheme();

    const baseText = theme === "dark" ? "text-gray-300" : "text-slate-700";
    const accentText = theme === "dark" ? "text-gray-400" : "text-slate-500";
    const headingText = theme === "dark" ? "text-white" : "text-slate-900";

    return (
        <section className={`w-full max-w-3xl mx-auto p-6 leading-relaxed ${baseText}`}>
            <h2 className={`text-2xl font-bold ${headingText}`}>About</h2>
            <p className="mb-4">
                <span className={`font-mono ${accentText}`}>tldr;</span> learnt by questioning my AI buddy and staying curious.
            </p>
            <p className="mb-4">
                I pick things up from people on the internet, keep experimenting, and build stuff that looks
                <span className={`italic ${accentText}`}> shitty at first </span>
                but gets cooler after enough iterations. Always breaking, fixing, and learning.
            </p>
            <p>
                When I’m not coding, I’m probably sleeping, doing hostel chores ( mostly wash cloths ) 🧺, or on the hunt for good food and hangouts with friends.
            </p>
        </section>
    );
};

export default AboutContent;
