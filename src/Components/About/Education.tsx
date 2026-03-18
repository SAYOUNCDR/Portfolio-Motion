import { useTheme } from "../../contexts/ThemeContext";
import { motion } from "framer-motion";
import { MapPin, CalendarDays, ExternalLink } from "lucide-react";

const Education = () => {
    const { theme } = useTheme();

    const sectionText = theme === "dark" ? "text-white" : "text-slate-800";
    const metaText = theme === "dark" ? "text-neutral-400" : "text-slate-500";
    const descText = theme === "dark" ? "text-neutral-400" : "text-slate-600";
    const cardBorder = theme === "dark" ? "border-zinc-800" : "border-slate-200";

    const cgpaBg =
        theme === "dark"
            ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
            : "bg-slate-100 text-slate-700 border border-slate-200";
    const tagBg =
        theme === "dark"
            ? "bg-zinc-800/60 text-zinc-300"
            : "bg-slate-100 text-slate-600";
    const linkStyle =
        theme === "dark"
            ? "text-neutral-300 hover:text-white"
            : "text-slate-700 hover:text-slate-900";

    return (
        <section className={`${sectionText} px-6 py-10 w-full max-w-3xl mx-auto`}>
            <h2 className="text-xl font-bold mb-6">Education</h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
            >
                {/* Top row: Logo + Info */}
                <div className="flex items-start gap-4">
                    {/* LPU Logo */}
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-white overflow-hidden flex items-center justify-center p-1.5`}>
                        <img
                            src="/images/Edu-Cert/LPU.webp"
                            alt="Lovely Professional University"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="text-base font-semibold leading-tight">
                                Lovely Professional University
                            </h3>
                            <div className="flex items-center gap-2.5">
                                <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md ${cgpaBg}`}>
                                    CGPA 7.63
                                </span>
                                <a
                                    href="https://www.lpu.in"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`inline-flex items-center gap-1 text-xs font-medium transition-colors ${linkStyle}`}
                                    title="Visit LPU Website"
                                >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>

                        {/* Degree */}
                        <p className={`text-sm font-medium mt-1 ${theme === "dark" ? "text-neutral-200" : "text-slate-700"}`}>
                            B.Tech — Computer Science & Engineering
                        </p>

                        {/* Meta info */}
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                            <span className={`inline-flex items-center gap-1.5 text-xs ${metaText}`}>
                                <CalendarDays className="w-3.5 h-3.5" />
                                August 2023 — 2027
                            </span>
                            <span className={`inline-flex items-center gap-1.5 text-xs ${metaText}`}>
                                <MapPin className="w-3.5 h-3.5" />
                                Jalandhar, Punjab
                            </span>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className={`border-t border-dashed ${cardBorder} my-4`} />

                {/* Description */}
                <p className={`text-sm leading-relaxed ${descText}`}>
                    One of India's largest private universities, recognized by UGC and
                    NAAC A++ accredited, offering a vibrant campus with
                    industry-integrated programs across 150+ disciplines.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {["Full-Time", "On-Campus", "Undergraduate"].map((tag) => (
                        <span
                            key={tag}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-medium ${tagBg}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
