import { useTheme } from "../../contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Eye } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";

const AboutContent = () => {
  const { theme } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);
  const [showResumeTooltip, setShowResumeTooltip] = useState(false);

  const baseText = theme === "dark" ? "text-gray-300" : "text-slate-700";
  const headingText = theme === "dark" ? "text-white" : "text-slate-900";

  // Styling constants
  const tooltipStyles = theme === "dark"
    ? "bg-white text-black"
    : "bg-slate-900 text-white";

  return (
    <section
      className={`w-full max-w-3xl mx-auto p-6 leading-relaxed ${baseText}`}
    >
      <h2 className={`text-xl font-bold ${headingText}`}>I'm Sayoun Parui</h2>
      <p className="mt-4 leading-relaxed text-slate-700 dark:text-gray-400">
        Focused on <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>high-performance web architecture</span>, I build full-stack apps with <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>Node</span>, <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>MongoDB</span>, <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>PostgreSQL</span>, and <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>Prisma</span>. I handle everything from <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>CI/CD</span> with <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>GitHub Actions</span> to <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>Cloud VPS</span> deployment. Passionate about AI, I create smart experiences using <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>RAG</span>, <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>embeddings</span>, and <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>OCR</span>.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-6">
        <div
          className="relative"
          onMouseEnter={() => setShowResumeTooltip(true)}
          onMouseLeave={() => setShowResumeTooltip(false)}
        >
          <Button
            text="Resume"
            icon={<Eye className="w-4 h-4" />}
            href="https://drive.google.com/file/d/1STyotpYA8hKFaZh21LX-GruplwNo_odU/view?usp=sharing"
          />
          <AnimatePresence>
            {showResumeTooltip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`absolute bottom-full left-0 sm:left-1/2 sm:-translate-x-1/2 mb-4 w-[300px] h-[400px] sm:w-[450px] sm:h-[550px] rounded-xl shadow-2xl overflow-hidden z-50 ring-1 ring-black/5 ${theme === "dark" ? "bg-zinc-900 ring-white/10" : "bg-white"
                  }`}
              >
                <iframe
                  src="https://drive.google.com/file/d/1STyotpYA8hKFaZh21LX-GruplwNo_odU/preview"
                  className="w-full h-full border-0 bg-white"
                  title="Resume Preview"
                  loading="lazy"
                />

                {/* Pointer arrow */}
                <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 ${theme === "dark" ? "bg-zinc-900" : "bg-white"
                  }`} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative">
          <Button
            text="Email Me"
            icon={<Mail className="w-4 h-4" />}
            href="mailto:sayounparui45@gmail.com"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          />
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-xs rounded whitespace-nowrap z-10 ${tooltipStyles}`}
            >
              sayounparui45@gmail.com
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
