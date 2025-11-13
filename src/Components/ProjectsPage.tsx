import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import { useTheme } from "../contexts/ThemeContext";

const ProjectsPage = () => {
    const { theme } = useTheme();

    const mainStyles = theme === "dark"
        ? "bg-black text-white"
        : "bg-white text-slate-800";
    const linkStyles = theme === "dark"
        ? "border-[#c2c2c2] text-white hover:border-gray-500"
        : "border-slate-400 text-slate-800 hover:border-slate-600";

    return (
        <main className={`min-h-screen mx-auto max-w-3xl ${mainStyles}`}>
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10">
                <Link
                    to="/"
                    className={`inline-flex items-center gap-2 self-start rounded-lg border border-dashed px-3 py-2 text-xs font-semibold transition ml-4 ${linkStyles}`}
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to home
                </Link>

                <Projects showViewAll={false} />
            </div>
        </main>
    );
};

export default ProjectsPage;
