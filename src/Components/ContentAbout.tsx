import { useTheme } from "../contexts/ThemeContext";

const AboutContent = () => {
  const { theme } = useTheme();

  const baseText = theme === "dark" ? "text-gray-300" : "text-slate-700";
  const headingText = theme === "dark" ? "text-white" : "text-slate-900";

  return (
    <section
      className={`w-full max-w-3xl mx-auto p-6 leading-relaxed ${baseText}`}
    >
      <h2 className={`text-2xl font-bold ${headingText}`}>About Me</h2>
      <p className="mt-4 leading-relaxed text-slate-700 dark:text-gray-400">
        Focused on <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>high-performance web architecture</span>, I build full-stack apps with <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>Bun</span>, <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>MongoDB</span>, <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>PostgreSQL</span>, and <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>Prisma</span>. I handle everything from <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>CI/CD</span> with <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>GitHub Actions</span> to <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>Cloud VPS</span> deployment. Passionate about AI, I create smart experiences using <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>RAG</span>, <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>embeddings</span>, and <span className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black hover:text-slate-800'}`}>OCR</span>.
      </p>
    </section>
  );
};

export default AboutContent;
