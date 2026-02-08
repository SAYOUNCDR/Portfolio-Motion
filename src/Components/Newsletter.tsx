"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X, Mail, Send } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

export default function Newsletter() {
  const [builderStats, setBuilderStats] = useState({
    streakDays: 0,
    nextDrop: "Nov 21 • 9:00 PM",
    focus: "Shipping an interactive AI copilot demo"
  });

  const [streakArray, setStreakArray] = useState<number[]>(Array(15).fill(0));


  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [holdExpanded, setHoldExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const collapseTimeoutRef = useRef<number | null>(null);
  const { theme } = useTheme();

  const latestNewsletter = {
    title: "Agents That Actually Ship",
    date: "Nov 13, 2025",
    summary: "A peek at the automations powering my side projects."
  };
  const subscriberCount = "2,418";
  const recentSubscriber = {
    name: "Aarav P.",
    minutesAgo: 12
  };
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
  const cardStyles =
    theme === "dark"
      ? "bg-gradient-to-br from-black/60 via-black/40 to-black/20 border border-gray-700 text-white shadow-[inset_6px_6px_18px_rgba(0,0,0,0.75),inset_-6px_-6px_18px_rgba(120,120,120,0.15)]"
      : "bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-slate-200 text-slate-900 shadow-[inset_8px_8px_20px_rgba(160,160,160,0.25),inset_-8px_-8px_20px_rgba(255,255,255,0.9)]";
  const leftCardStyles =
    theme === "dark"
      ? "bg-gradient-to-br from-black/60 via-black/30 to-black/10 border border-gray-700 text-white shadow-[inset_6px_6px_16px_rgba(0,0,0,0.65),inset_-6px_-6px_16px_rgba(120,120,120,0.12)]"
      : "bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-slate-200 text-slate-900 shadow-[inset_8px_8px_18px_rgba(170,170,170,0.22),inset_-8px_-8px_18px_rgba(255,255,255,0.92)]";
  const chipStyles =
    theme === "dark"
      ? "text-white border border-white/10 bg-gradient-to-r from-black via-zinc-950 to-zinc-900 shadow-[inset_4px_4px_12px_rgba(0,0,0,0.7)]"
      : "bg-slate-100 text-slate-700 border border-slate-200";
  const secondaryText = theme === "dark" ? "text-gray-400" : "text-slate-500";
  const accentText = theme === "dark" ? "text-gray-200" : "text-slate-700";

  const toastStyles =
    theme === "dark"
      ? "bg-black/80 border border-gray-700 text-white"
      : "bg-white/90 border border-slate-200 text-slate-800";
  const toastHint = theme === "dark" ? "text-gray-300" : "text-slate-600";

  const handleSubscribe = useCallback((e?: { preventDefault: () => void }) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }

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
  }, [email]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Enter" && document.activeElement === inputRef.current) {
        e.preventDefault();
        handleSubscribe(e);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [email, handleSubscribe]);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const username = "SAYOUNCDR";
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        const data = await res.json();

        if (data && data.contributions) {
          const today = new Date();
          // Calculate streak
          let currentStreak = 0;
          // Sort contributions by date descending to count backward from today
          // The API returns activity sorted by date, so we reverse it
          const reversedContribs = [...data.contributions].reverse();

          for (const day of reversedContribs) {
            const dayDate = new Date(day.date);
            // Ignore future dates if any
            if (dayDate > today) continue;

            if (day.count > 0) {
              currentStreak++;
            } else {
              // break on first 0 count day that is today or before
              // (allow for 0 count *today* if the day isn't over? typical streak logic is strict)
              // Let's be strict: a 0 count breaks the streak
              if (dayDate.toDateString() !== today.toDateString()) {
                break;
              }
              // If today is 0, we don't count it yet but don't break if streak was active yesterday?
              // Simple strict logic: 
              if (day.count === 0 && dayDate < today) break;
            }
          }

          setBuilderStats(prev => ({ ...prev, streakDays: currentStreak }));

          // For the bar visualization: grab last 15 days
          const last15 = data.contributions.slice(-15).map((d: any) => d.level);
          setStreakArray(last15);
        }
      } catch (err) {
        console.error("Failed to fetch GitHub streak", err);
      }
    }
    fetchGitHubData();
  }, []);

  useEffect(() => {
    return () => {
      if (collapseTimeoutRef.current) {
        window.clearTimeout(collapseTimeoutRef.current);
      }
    };
  }, []);



  const stars = Array.from({ length: 20 });

  return (
    <div className={`w-full max-w-5xl mx-auto p-6 mt-20 rounded-lg ${sectionText}`}>
      <div className="flex flex-col md:flex-row md:items-stretch gap-6">
        <div className="flex-1 flex flex-col gap-3">
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

            <div className="relative mt-2 sm:mt-0 flex-shrink-0 w-[120px]">
              <motion.button
                type="submit"
                initial={{ width: 93 }}
                animate={{ width: isSending || holdExpanded ? 120 : 93 }}
                whileHover={{ width: 120 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className={`relative inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold overflow-hidden ${buttonStyles}`}
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
            </div>
          </form>

          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

          <div
            className={`hidden md:flex md:flex-1 md:flex-col md:h-full mt-6 rounded-2xl px-5 py-5 border ${leftCardStyles}`}
          >
            <div className="flex items-center gap-4">
              <div
                className="relative h-12 w-12 rounded-xl"
                style={{
                  background:
                    theme === "dark"
                      ? "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), transparent 70%)"
                      : "radial-gradient(circle at 30% 30%, rgba(0,0,0,0.06), transparent 70%)"
                }}
              >
                <div className="absolute inset-1 rounded-lg border border-white/10 backdrop-blur-sm flex items-center justify-center text-xl">
                  🛠️
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold">Build streak</p>
                <p className={`text-xs ${secondaryText}`}>
                  {builderStats.streakDays} days shipping something new
                </p>

                {/* GitHub streak bar */}
                <div className="flex gap-[3px] mt-2">
                  {streakArray.map((level, i) => (
                    <div
                      key={i}
                      className="h-2 w-2 rounded-[2px]"
                      style={{
                        backgroundColor:
                          theme === "dark"
                            ? `rgba(34,197,94,${0.2 + (level / 4) * 0.8})`
                            : `rgba(16,185,129,${0.2 + (level / 4) * 0.8})`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 text-xs">
              <div className="rounded-lg border border-dashed border-current/15 px-3 py-3">
                <p className={`font-semibold ${accentText}`}>Next drop</p>
                <p className={`mt-1 leading-tight ${secondaryText}`}>
                  {builderStats.nextDrop}
                </p>
              </div>
              <div className="rounded-lg border border-dashed border-current/15 px-3 py-3">
                <p className={`font-semibold ${accentText}`}>Current focus</p>
                <p className={`mt-1 leading-tight ${secondaryText}`}>
                  {builderStats.focus}
                </p>
              </div>
            </div>

            <div
              className={`mt-4 md:mt-auto flex items-center justify-between rounded-xl px-4 py-3 border ${chipStyles}`}
            >
              <span className="text-xs font-medium">Daily commit energy low?</span>
              <span className="text-xs font-semibold">Take a ship-break ☕</span>
            </div>
          </div>

        </div>

        <div className={`hidden md:flex md:self-stretch flex-col relative overflow-hidden rounded-2xl px-5 py-6 md:w-[300px] lg:w-[320px] ${cardStyles}`}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-[0.3rem] opacity-70">Insider Pulse</span>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${chipStyles}`}>
              {subscriberCount} subs
            </span>
          </div>

          <div className="relative mb-5 rounded-xl border border-dashed border-current/15 px-4 py-4">
            <span className={`text-[11px] uppercase tracking-[0.25rem] opacity-60 ${secondaryText}`}>
              Latest Drop
            </span>
            <p className="text-lg font-semibold mt-1 leading-tight">
              {latestNewsletter.title}
            </p>
            <p className={`text-xs mt-2 ${secondaryText}`}>
              {latestNewsletter.summary}
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs opacity-70">
              <span>{latestNewsletter.date}</span>
              <span>•</span>
              <span>4 min read</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">Newest member</p>
              <p className={`text-xs ${secondaryText}`}>
                {recentSubscriber.name} • {recentSubscriber.minutesAgo}m ago
              </p>
            </div>
            <div
              className="relative h-16 w-16 rounded-xl"
              style={{
                background: theme === "dark"
                  ? "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), transparent 70%)"
                  : "radial-gradient(circle at 30% 30%, rgba(0,0,0,0.06), transparent 70%)"
              }}
            >
              <div className="absolute inset-1 rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center text-2xl">
                📬
              </div>
            </div>
          </div>

          <div className={`mt-auto w-full rounded-lg border border-dashed px-3 py-2 text-xs font-medium text-center ${chipStyles}`}>
            Micro-wins, code drops, and the occasional meme.
          </div>
        </div>
      </div>

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
            <CheckCircle2 className="text-slate-300 w-6 h-6 mt-0.5" />
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
