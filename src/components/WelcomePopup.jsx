import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Code2, Star } from "lucide-react";

export const WelcomePopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay so page loads first, then popup appears
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            onClick={() => setVisible(false)}
          />

          {/* Card */}
          <motion.div
            className="relative z-10 w-full max-w-lg bg-[#0d1425] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 30 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
            style={{ boxShadow: "0 0 100px rgba(139,92,246,0.3), 0 40px 80px rgba(0,0,0,0.7)" }}
          >
            {/* Gradient top bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-violet-500 via-pink-500 to-rose-500" />

            {/* Animated background glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, #a855f7, transparent 70%)" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, #ec4899, transparent 70%)" }}
              />
            </div>

            {/* Close button */}
            <button
              onClick={() => setVisible(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all hover:scale-110"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="relative z-10 p-8 space-y-5">

              {/* Icon + greeting */}
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 15, -10, 15, 0] }}
                  transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatDelay: 4 }}
                  className="text-xl"
                >
                  👋
                </motion.div>
                <div>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl font-black uppercase tracking-[0.3em] text-violet-400"
                  >
                    Welcome
                  </motion.p>
                  <motion.h2
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl font-black text-white leading-tight"
                  >
                    Hello there! ✨
                  </motion.h2>
                </div>
              </div>

              {/* Main message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl space-y-3 text-slate-300 leading-relaxed"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                <p>
                  Thank you for visiting my portfolio. I'm{" "}
                  <span className="font text-white">Mehjabin Hossain</span> a CSE graduate from the University of Asia Pacific, passionate about technology and building meaningful digital experiences.
                </p>
                <p className="text-xl text-slate-400">
                  Everything you see here every section, animation, and interaction was{" "}
                  <span className="text-pink-400 font-semibold">entirely hand-coded by me</span>, built from the ground up using{" "}
                  <span className="text-violet-400 font-semibold">React, Tailwind CSS, and Vite</span>. No templates. No shortcuts.
                </p>
              </motion.div>

              {/* Feature pills */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="flex flex-wrap gap-2"
              >
                {[
                  
                ].map(({ icon: Icon, label }) => (
                  <span key={label}
                    className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-violet-500/15 border border-violet-500/25 text-violet-300">
                    <Icon size={11} /> {label}
                  </span>
                ))}
              </motion.div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              {/* Footer row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex items-center justify-between"
              >
                <p className="text-lg text-slate-500 italic" style={{ fontFamily: "'Georgia', serif" }}>
                  Scroll to explore my full journey →
                </p>
                <button
                  onClick={() => setVisible(false)}
                  className="px-5 py-2.5 rounded-xl text-xl font-bold text-white transition-all hover:scale-120 active:scale-95 shadow-lg"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #ec4899)" }}
                >
                  Explore Portfolio
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};