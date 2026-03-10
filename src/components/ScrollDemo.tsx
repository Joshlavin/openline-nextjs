"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Customer calls your business",
    desc: "OpenLine picks up instantly. No hold music. No voicemail. Just a natural, friendly voice ready to help.",
  },
  {
    num: "02",
    title: "AI has a real conversation",
    desc: "Understands what the caller needs, answers common questions, and qualifies the lead — just like your best receptionist.",
  },
  {
    num: "03",
    title: "Books the appointment",
    desc: "Checks availability, schedules the service call, and confirms with the customer. All in real time.",
  },
  {
    num: "04",
    title: "You get the summary",
    desc: "Instant text and email with caller info, what they need, and the booked time. Ready to go.",
  },
];

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function ScrollDemo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionH = sectionRef.current.offsetHeight;
    const viewH = window.innerHeight;
    const scrolled = -rect.top;
    const scrollable = sectionH - viewH;
    if (scrollable <= 0) return;
    const raw = Math.max(0, Math.min(1, scrolled / scrollable));
    const eased = easeOutCubic(raw);
    setProgress(eased);
    setActiveStep(Math.min(3, Math.floor(eased * 4)));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section
      ref={sectionRef}
      id="demo"
      className="relative"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen bg-dark overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,85,255,0.06)_0%,transparent_60%)]" />

        <div className="max-w-[var(--max)] mx-auto h-full flex items-center px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full items-center">
            {/* Left — Steps */}
            <div className="relative min-h-[240px]">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${
                    i === activeStep
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  } ${i === 0 || i === activeStep ? "" : "absolute inset-0"}`}
                  style={i !== activeStep ? { position: "absolute", top: 0, left: 0 } : {}}
                >
                  <div className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-4">
                    Step {step.num}
                  </div>
                  <h2
                    className="text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.15] text-white mb-5 font-normal tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {step.title}
                  </h2>
                  <p className="text-[#aaa] text-base leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Right — Phone */}
            <div className="flex justify-center lg:justify-end">
              <DemoPhone activeStep={activeStep} />
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2.5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeStep ? "w-6 bg-accent" : "w-2 bg-[#333]"
              }`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-100" style={{ width: `${progress * 100}%` }} />
      </div>
    </section>
  );
}

function DemoPhone({ activeStep }: { activeStep: number }) {
  return (
    <div className="w-[300px] rounded-[40px] bg-dark-2 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-[#222]">
      <div className="bg-[#111] rounded-[32px] overflow-hidden relative" style={{ aspectRatio: "9/19" }}>
        {/* Notch */}
        <div className="flex justify-center pt-2.5">
          <div className="w-[90px] h-[26px] bg-dark rounded-full" />
        </div>

        {/* Screen 0 — Incoming Call */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center px-6 transition-opacity duration-400 ${
            activeStep === 0 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{
            background: "linear-gradient(180deg, #0a1628 0%, #0f0f0f 100%)",
          }}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center text-white text-xl font-semibold mb-4">
            M
          </div>
          <div className="text-white text-lg font-medium mb-1">Mike Reynolds</div>
          <div className="text-[#888] text-sm mb-8">(805) 555-0147</div>
          <div className="flex gap-12">
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-[#ff3b30] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4L16 16M16 4L4 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[#888] text-[10px]">Decline</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-green flex items-center justify-center animate-[pulse-ring_2s_infinite]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 8.5C3 8.5 4 4 8 4C10.5 4 11 5.5 11 5.5L12.5 7.5L10.5 9.5C10.5 9.5 12 12 14 14L16 12L17.5 13.5C17.5 13.5 18 14 18 16C18 18 14 19 10 15C6 11 3 8.5 3 8.5Z" fill="white" />
                </svg>
              </div>
              <span className="text-[#888] text-[10px]">Accept</span>
            </div>
          </div>
        </div>

        {/* Screen 1 — Conversation */}
        <div
          className={`absolute inset-0 flex flex-col transition-opacity duration-400 ${
            activeStep === 1 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center justify-between px-5 pt-10 pb-3">
            <div className="text-white text-sm font-medium">OpenLine</div>
            <div className="flex items-center gap-1.5 text-green text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-green" />
              Connected
            </div>
          </div>
          <div className="flex-1 px-4 py-2 flex flex-col gap-2 overflow-hidden">
            {[
              { from: "ai", text: "Hi! Thanks for calling. How can I help you today?" },
              { from: "caller", text: "I need to schedule a pool cleaning for next week." },
              { from: "ai", text: "I'd be happy to help with that! Can I get your name?" },
              { from: "caller", text: "Sure, it's Mike Reynolds." },
              { from: "ai", text: "Thanks Mike! Let me check available times for you." },
            ].map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={activeStep === 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{ delay: i * 0.25, duration: 0.35, ease: "easeOut" }}
                className={`max-w-[85%] px-3 py-2 text-[11px] leading-[1.5] rounded-xl ${
                  msg.from === "ai"
                    ? "self-start bg-[rgba(0,85,255,0.12)] text-[rgba(255,255,255,0.9)] rounded-bl-sm"
                    : "self-end bg-dark-3 text-[rgba(255,255,255,0.7)] rounded-br-sm"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Screen 2 — Booking */}
        <div
          className={`absolute inset-0 flex flex-col items-center transition-opacity duration-400 ${
            activeStep === 2 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="pt-12 mb-4 text-3xl">📅</div>
          <div className="text-white text-sm font-medium mb-1">Scheduling Appointment</div>
          <div className="text-[#888] text-xs mb-5">March 2026</div>
          <div className="grid grid-cols-7 gap-1 px-5 text-center mb-5">
            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
              <div key={d} className="text-[#555] text-[9px] font-medium py-1">{d}</div>
            ))}
            {Array.from({ length: 31 }, (_, i) => (
              <div
                key={i}
                className={`text-[10px] py-1.5 rounded-md ${
                  i + 1 === 12
                    ? "bg-accent text-white font-medium"
                    : "text-[rgba(255,255,255,0.5)]"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5 px-5 justify-center">
            {["8:00 AM", "10:00 AM", "1:00 PM", "3:00 PM"].map((t, i) => (
              <div
                key={t}
                className={`px-3 py-1.5 rounded-md text-[10px] border ${
                  i === 0
                    ? "bg-accent text-white border-accent font-medium"
                    : "bg-transparent text-[rgba(255,255,255,0.5)] border-[#333]"
                }`}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Screen 3 — Summary */}
        <div
          className={`absolute inset-0 flex flex-col items-center transition-opacity duration-400 ${
            activeStep === 3 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="pt-10 mb-3">
            <div className="w-12 h-12 rounded-full bg-green flex items-center justify-center text-white text-lg">
              ✓
            </div>
          </div>
          <div className="text-white text-sm font-medium mb-1">Call Complete</div>
          <div className="text-[#888] text-xs mb-5">Summary ready</div>
          <div className="mx-5 bg-[rgba(255,255,255,0.04)] rounded-xl p-4 w-[calc(100%-40px)] text-left">
            {[
              { label: "Caller", value: "Mike Reynolds" },
              { label: "Issue", value: "Pool cleaning service" },
              { label: "Address", value: "142 Oak Street" },
              { label: "Appointment", value: "Mar 12, 8:00 AM" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between py-1.5 border-b border-[rgba(255,255,255,0.06)] last:border-b-0">
                <span className="text-[#888] text-[10px]">{item.label}</span>
                <span className="text-white text-[10px] font-medium">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="mx-5 mt-3 bg-[rgba(0,168,112,0.08)] rounded-lg p-3 w-[calc(100%-40px)]">
            <div className="text-[#888] text-[9px] mb-1">SMS to you:</div>
            <div className="text-[rgba(255,255,255,0.8)] text-[10px] leading-[1.4]">
              New lead: Mike Reynolds needs pool cleaning. Booked Mar 12 at 8 AM. 📋
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
