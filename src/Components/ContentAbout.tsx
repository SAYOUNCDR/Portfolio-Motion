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
      <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
        Focused on{" "}
        <span className="font-bold text-gray-900 dark:text-white hover:text-white transition-colors duration-300">
          high-performance web architecture
        </span>
        , I build full-stack apps with{" "}
        <span className="font-bold text-gray-900 dark:text-white hover:text-white transition-colors duration-300">
          Bun
        </span>
        ,{" "}
        <span className="font-bold text-gray-900 dark:text-white hover:text-white transition-colors duration-300">
          MongoDB
        </span>
        ,{" "}
        <span className="font-bold text-gray-900 dark:text-white hover:text-white transition-colors duration-300">
          PostgreSQL
        </span>
        , and{" "}
        <span className="font-bold text-gray-900 dark:text-white hover:text-white transition-colors duration-300">
          Prisma
        </span>
        . I handle everything from{" "}
        <span className="font-bold text-gray-900 dark:text-white hover:text-white transition-colors duration-300">
          CI/CD
        </span>{" "}
        with{" "}
        <span className="font-bold text-gray-900 dark:text-white hover:text-white transition-colors duration-300">
          GitHub Actions
        </span>{" "}
        to{" "}
        <span className="font-bold text-gray-900 dark:text-white hover:text-white transition-colors duration-300">
          Cloud VPS
        </span>{" "}
        deployment. Passionate about AI, I create smart experiences using{" "}
        <span className="font-bold text-gray-900 dark:text-white hover:text-white transition-colors duration-300">
          RAG
        </span>
        ,{" "}
        <span className="font-bold text-gray-900 dark:text-white hover:text-white transition-colors duration-300">
          embeddings
        </span>
        , and{" "}
        <span className="font-bold text-gray-900 dark:text-white hover:text-white transition-colors duration-300">
          OCR
        </span>
        .
      </p>
    </section>
  );
};

export default AboutContent;
