import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Contributions from "./Components/Contributions";

const ContributionsPage = () => {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 self-start rounded-lg border border-[#c2c2c2] border-dashed px-3 py-2 text-xs font-semibold text-white transition hover:border-gray-500"
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
