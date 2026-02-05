import { ArrowLeft } from "lucide-react";
import Contributions from "../Components/Contributions";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "../Components/ui/Button";

const ContributionsPage = () => {
    const { theme } = useTheme();

    const mainStyles = theme === "dark"
        ? "bg-black text-white"
        : "bg-white text-slate-800";

    return (
        <main className={`min-h-screen ${mainStyles} max-w-3xl mx-auto`}>
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10">
                <div className="ml-4 self-start">
                    <Button
                        text="Back to home"
                        icon={<ArrowLeft className="h-4 w-4" />}
                        to="/"
                        variant="outline"
                        className="rounded-lg px-3 py-2 text-xs font-semibold"
                    />
                </div>

                <Contributions showViewAll={false} />
            </div>
        </main>
    );
};

export default ContributionsPage;
