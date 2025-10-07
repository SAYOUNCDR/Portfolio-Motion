"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // validate email
  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  // Keyboard shortcut `/` to focus, Enter to submit
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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }
    setError("");
    setEmail("");

    // show toast
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  // generate star positions
  const stars = Array.from({ length: 20 });

  return (
    <div className="text-white flex flex-col items-center gap-3 w-full max-w-3xl mx-auto p-6 mt-20  rounded-lg ">
      {/* Header */}
      <h1 className="text-lg font-semibold">Stay Updated</h1>
      <p className="text-sm text-gray-400">
        Subscribe to my email list. I do not spam, ever.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubscribe}
        className="flex items-center gap-2 mt-2"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => !email && setIsExpanded(false)}
      >
        <motion.div
          animate={{ width: isExpanded ? 260 : 180 }}
          transition={{ type: "spring", stiffness: 250, damping: 22 }}
          className="relative"
        >
          <input
            ref={inputRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            onFocus={() => setIsExpanded(true)}
            onBlur={() => !email && setIsExpanded(false)}
            className="w-full h-[40px] px-3 pr-4 rounded-md text-sm 
                       bg-black/30 border border-gray-600 
                       placeholder-gray-400 text-white 
                       focus:outline-none transition-all"
          />
        </motion.div>
        <button
          type="submit"
          className="px-4 py-[10px] bg-slate-900 hover:bg-gray-800 
                     text-white rounded-md font-semibold text-sm cursor-pointer"
        >
          Subscribe
        </button>
      </form>

      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}

      {/* Toast with Confetti Stars */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-6 right-6 bg-black/80 backdrop-blur-lg text-white 
                         px-5 py-4 rounded-lg shadow-2xl flex items-start gap-3 w-72 border border-gray-700 overflow-hidden"
          >
            <CheckCircle2 className="text-green-400 w-6 h-6 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-semibold">Subscribed! 🎉</h4>
              <p className="text-xs text-gray-300">
                You’ll now get updates directly in your inbox.
              </p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="ml-2 text-gray-400 hover:text-white"
            >
              <X size={14} />
            </button>

            {/* Star Confetti */}
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
