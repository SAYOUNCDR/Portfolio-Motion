import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import { Mail, Eye } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/Button";

const AboutContent = () => {
  const { theme } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);

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
      <h2 className={`text-2xl font-bold ${headingText}`}>About Me</h2>
      <p className="mt-4 leading-relaxed text-slate-700 dark:text-gray-400">
        Focused on <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>high-performance web architecture</span>, I build full-stack apps with <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>Bun</span>, <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>MongoDB</span>, <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>PostgreSQL</span>, and <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>Prisma</span>. I handle everything from <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>CI/CD</span> with <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>GitHub Actions</span> to <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>Cloud VPS</span> deployment. Passionate about AI, I create smart experiences using <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>RAG</span>, <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>embeddings</span>, and <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>OCR</span>.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-6">
        <Button
          text="Resume"
          icon={<Eye className="w-4 h-4" />}
          href="https://drive.google.com/file/d/1qyoIjzLTPgbd67_Q-UOu6JuN3gBMGThp/view?usp=sharing"
        />

        <div className="relative">
          <Button
            text="Email Me"
            icon={<Mail className="w-4 h-4" />}
            href="mailto:0xsyn.dev@gmail.com"
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
              0xsyn.dev@gmail.com
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
