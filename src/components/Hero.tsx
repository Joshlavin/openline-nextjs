"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="pt-36 pb-24 px-6 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="max-w-[var(--max)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left */}
        <div>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 h-8 px-3.5 rounded-full bg-accent-soft text-accent text-xs font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-[pulse-ring_2s_infinite]" />
            AI-Powered Call Answering
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.08] font-normal tracking-[-0.03em] text-text mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Never miss another<br />call again.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg leading-relaxed text-text-2 mb-10 max-w-md"
          >
            Your AI receptionist answers every call, qualifies leads, books appointments, and
            sends you a summary. 24/7.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={onOpenModal}
              className="h-13 px-8 rounded-full bg-accent text-white text-[15px] font-medium border-none cursor-pointer hover:bg-accent-hover transition-colors"
              style={{ height: "52px" }}
            >
              Get Your Custom Quote
            </button>
            <a
              href="#demo"
              className="flex items-center justify-center rounded-full border border-border bg-transparent text-text text-[15px] font-medium hover:border-text-3 transition-colors no-underline px-8"
              style={{ height: "52px" }}
            >
              See How It Works
            </a>
          </motion.div>
        </div>

        {/* Right — Phone Mockup */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <PhoneMockup />
            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute top-[20%] -right-5 lg:-right-12 bg-surface rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] px-4 py-3 flex items-center gap-3 text-xs font-medium"
            >
              <span className="w-7 h-7 rounded-full bg-green-soft text-green flex items-center justify-center text-[10px]">✓</span>
              Appointment Booked
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="absolute bottom-[25%] -left-8 lg:-left-14 bg-surface rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] px-4 py-3 flex items-center gap-3 text-xs font-medium"
            >
              <span className="w-7 h-7 rounded-full bg-accent-soft text-accent flex items-center justify-center text-[10px]">✉</span>
              Summary Sent
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div
      className="w-[280px] rounded-[36px] bg-dark p-3 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
      style={{ animation: "float 6s ease-in-out infinite" }}
    >
      <div className="bg-dark-2 rounded-[28px] overflow-hidden" style={{ aspectRatio: "9/19" }}>
        {/* Notch */}
        <div className="flex justify-center pt-2.5 pb-4">
          <div className="w-[90px] h-[26px] bg-dark rounded-full" />
        </div>

        {/* Call UI */}
        <div className="flex flex-col items-center px-5">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center text-white text-lg font-semibold mb-3">
            M
          </div>
          <div className="text-white text-base font-medium mb-0.5">Mike Reynolds</div>
          <div className="text-[#888] text-xs mb-1.5">(805) 555-0147</div>
          <div className="inline-flex items-center gap-1.5 h-5 px-2.5 rounded-full bg-[rgba(0,168,112,0.15)] text-green text-[10px] font-medium mb-5">
            <span className="w-1 h-1 rounded-full bg-green" />
            OpenLine Active
          </div>

          {/* Waveform */}
          <div className="flex items-center justify-center gap-[3px] h-10 mb-5">
            {[0, 0.15, 0.3, 0.45, 0.6, 0.45, 0.3].map((delay, i) => (
              <div
                key={i}
                className="w-[3px] rounded-full bg-accent"
                style={{
                  height: `${14 + Math.random() * 16}px`,
                  animation: `wave 1.2s ease-in-out infinite`,
                  animationDelay: `${delay}s`,
                }}
              />
            ))}
          </div>

          {/* Transcript Messages */}
          <div className="w-full flex flex-col gap-2">
            <div className="self-start max-w-[85%] bg-[rgba(0,85,255,0.12)] text-[rgba(255,255,255,0.9)] text-[11px] leading-[1.5] px-3 py-2 rounded-xl rounded-bl-sm animate-[msgAppear_0.4s_ease_forwards]">
              Hi! Thanks for calling. How can I help?
            </div>
            <div className="self-end max-w-[85%] bg-dark-3 text-[rgba(255,255,255,0.7)] text-[11px] leading-[1.5] px-3 py-2 rounded-xl rounded-br-sm animate-[msgAppear_0.4s_ease_0.3s_forwards] opacity-0">
              I need to schedule a pool cleaning.
            </div>
            <div className="self-start max-w-[85%] bg-[rgba(0,85,255,0.12)] text-[rgba(255,255,255,0.9)] text-[11px] leading-[1.5] px-3 py-2 rounded-xl rounded-bl-sm animate-[msgAppear_0.4s_ease_0.6s_forwards] opacity-0">
              Of course! Let me find available times for you.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
