import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import { Mail, Eye } from "lucide-react";
import { useState } from "react";

const AboutContent = () => {
  const { theme } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);

  const baseText = theme === "dark" ? "text-gray-300" : "text-slate-700";
  const headingText = theme === "dark" ? "text-white" : "text-slate-900";

  // Styling constants
  const resumeButton = theme === "dark"
    ? "bg-[#18181b] border-[#c2c2c2] text-white hover:border-gray-500"
    : "bg-white border-slate-300 text-slate-800 hover:border-slate-500";
  const mailButton = theme === "dark"
    ? "text-white border-[#c2c2c2] hover:border-gray-500 bg-[#18181b]"
    : "text-slate-800 border-slate-300 hover:border-slate-500 bg-white";
  const tooltipStyles = theme === "dark"
    ? "bg-white text-black"
    : "bg-slate-900 text-white";
  const iconAccent = theme === "dark" ? "text-gray-400" : "text-slate-500";

  return (
    <section
      className={`w-full max-w-3xl mx-auto p-6 leading-relaxed ${baseText}`}
    >
      <h2 className={`text-2xl font-bold ${headingText}`}>About Me</h2>
      <p className="mt-4 leading-relaxed text-slate-700 dark:text-gray-400">
        Focused on <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>high-performance web architecture</span>, I build full-stack apps with <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>Bun</span>, <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>MongoDB</span>, <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>PostgreSQL</span>, and <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>Prisma</span>. I handle everything from <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>CI/CD</span> with <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>GitHub Actions</span> to <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>Cloud VPS</span> deployment. Passionate about AI, I create smart experiences using <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>RAG</span>, <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>embeddings</span>, and <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>OCR</span>.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-6">
        <a
          href="https://drive.google.com/file/d/1zrMACd70KzK-4lpzZAQw4eLbM4f2ovZG/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center border border-dashed rounded-lg px-4 py-2 font-medium text-xs gap-2 shadow transition focus:outline-none whitespace-nowrap ${resumeButton}`}
        >
          <Eye className={`w-4 h-4 ${iconAccent}`} aria-hidden="true" />
          Resume
        </a>

        <div className="relative">
          <a
            href="mailto:0xsyn.dev@gmail.com"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border border-dashed shadow transition focus:outline-none ${mailButton}`}
          >
            <Mail className={`w-4 h-4 ${iconAccent}`} />
            Email Me
          </a>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-xs rounded whitespace-nowrap z-10 ${tooltipStyles}`}
            >
              0xsyn.dev@gmail.com
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
