import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Contributions from "../Components/Contributions";
import { useTheme } from "../contexts/ThemeContext";

const ContributionsPage = () => {
    const { theme } = useTheme();

    const mainStyles = theme === "dark"
        ? "bg-black text-white"
        : "bg-white text-slate-800";
    const linkStyles = theme === "dark"
        ? "border-[#c2c2c2] text-white hover:border-gray-500"
        : "border-slate-400 text-slate-800 hover:border-slate-600";

    return (
        <main className={`min-h-screen ${mainStyles} max-w-3xl mx-auto`}>
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10">
                <Link
                    to="/"
                    className={`ml-4 inline-flex items-center gap-2 self-start rounded-lg border border-dashed px-3 py-2 text-xs font-semibold transition ${linkStyles}`}
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to home
                </Link>

                <Contributions showViewAll={false} />
            </div>
        </main>
    );
};

export default ContributionsPage;
