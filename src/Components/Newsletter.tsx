"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X, Mail, Send } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [holdExpanded, setHoldExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const collapseTimeoutRef = useRef<number | null>(null);
  const { theme } = useTheme();

  const sectionText = theme === "dark" ? "text-white" : "text-slate-800";
  const hintText = theme === "dark" ? "text-gray-400" : "text-slate-600";
  const inputStyles =
    theme === "dark"
      ? "bg-black/30 border border-gray-600 placeholder-gray-400 text-white"
      : "bg-white border border-slate-300 placeholder-slate-400 text-slate-900";
  const buttonStyles =
    theme === "dark"
      ? "bg-black text-white border border-gray-600 hover:border-gray-400 shadow-[inset_4px_4px_12px_rgba(0,0,0,0.7),inset_-4px_-4px_12px_rgba(161,161,170,0.25)] hover:shadow-[inset_3px_3px_9px_rgba(0,0,0,0.75),inset_-3px_-3px_9px_rgba(200,200,210,0.22)]"
      : "bg-white text-slate-800 border border-slate-300 hover:border-slate-500 shadow-[inset_6px_6px_16px_rgba(148,163,184,0.3),inset_-6px_-6px_16px_rgba(255,255,255,0.95)] hover:shadow-[inset_4px_4px_12px_rgba(148,163,184,0.35),inset_-4px_-4px_12px_rgba(255,255,255,0.9)]";
  const toastStyles =
    theme === "dark"
      ? "bg-black/80 border border-gray-700 text-white"
      : "bg-white/90 border border-slate-200 text-slate-800";
  const toastHint = theme === "dark" ? "text-gray-300" : "text-slate-600";

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Enter" && document.activeElement === inputRef.current) {
        e.preventDefault();
        handleSubscribe(e as any);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [email]);

  useEffect(() => {
    return () => {
      if (collapseTimeoutRef.current) {
        window.clearTimeout(collapseTimeoutRef.current);
      }
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }
    setError("");

    if (collapseTimeoutRef.current) {
      window.clearTimeout(collapseTimeoutRef.current);
      collapseTimeoutRef.current = null;
    }

    setIsSending(true);
    setHoldExpanded(true);
    setTimeout(() => {
      setIsSending(false);
      setShowToast(true);
      setEmail("");
      setTimeout(() => setShowToast(false), 4000);
      collapseTimeoutRef.current = window.setTimeout(() => {
        setHoldExpanded(false);
        collapseTimeoutRef.current = null;
      }, 1500);
    }, 700);
  };

  const stars = Array.from({ length: 20 });

  return (
    <div className={`flex flex-col gap-3 w-full max-w-3xl mx-auto p-6 mt-20 rounded-lg ${sectionText}`}>
      <h2 className="text-2xl font-bold">Stay Updated</h2>
      <p className={`text-sm ${hintText}`}>
        Join my mail list get free bugs and their solutions.
      </p>

      <form
        onSubmit={handleSubscribe}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2"
      >
        <div className="relative w-full sm:w-auto">
          <input
            ref={inputRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`w-full sm:w-[280px] h-[40px] px-3 pr-4 rounded-md text-sm focus:outline-none ${inputStyles}`}
          />
        </div>

        <motion.button
          type="submit"
          initial={{ width: 93 }}
          animate={{ width: isSending || holdExpanded ? 120 : 93 }}
          whileHover={{ width: 120 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className={`relative inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold overflow-hidden mt-2 sm:mt-0 ${buttonStyles}`}
        >
          <div className="flex items-center gap-2 p-0.5">
            <span className="whitespace-nowrap pr-1">Subscribe</span>
            <motion.span
              className="flex items-center"
              animate={
                isSending
                  ? { x: 28, y: -10, rotate: 20, opacity: 0 }
                  : { x: 0, y: 0, rotate: 0, opacity: 1 }
              }
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              {isSending ? (
                <Send className="w-4 h-4" />
              ) : (
                <Mail className="w-4 h-4 opacity-90" />
              )}
            </motion.span>
          </div>
        </motion.button>
      </form>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

      {/* Toast with Confetti Stars */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className={`fixed bottom-6 right-6 backdrop-blur-lg px-5 py-4 rounded-lg shadow-2xl flex items-start gap-3 w-72 overflow-hidden ${toastStyles}`}
          >
            <CheckCircle2 className="text-green-400 w-6 h-6 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-semibold">Subscribed! 🎉</h4>
              <p className={`text-xs ${toastHint}`}>
                You’ll now get updates directly in your inbox.
              </p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="ml-2 text-gray-400 hover:text-white"
            >
              <X size={14} />
            </button>

            <div className="absolute inset-0 pointer-events-none">
              {stars.map((_, i) => {
                const angle = Math.random() * 2 * Math.PI;
                const distance = 60 + Math.random() * 80;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
                    animate={{
                      opacity: 0,
                      scale: 0.5,
                      x,
                      y,
                      rotate: Math.random() * 360,
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      delay: i * 0.02,
                    }}
                    className="absolute left-1/2 top-1/2 w-2 h-2 bg-yellow-400 rounded-sm rotate-45"
                  />
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
