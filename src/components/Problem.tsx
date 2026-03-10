"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        <line x1="12" y1="2" x2="12" y2="4" />
      </svg>
    ),
    bg: "bg-red-soft",
    color: "text-[#d44]",
    title: "Your team is on the job",
    desc: "Technicians can't answer calls when they're knee-deep in a repair. Missed calls mean missed revenue.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2v6l3 3" />
        <circle cx="12" cy="14" r="8" />
      </svg>
    ),
    bg: "bg-amber-soft",
    color: "text-[#b87]",
    title: "No after-hours coverage",
    desc: "62% of calls to home service businesses come outside business hours. Voicemail isn't cutting it.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="8" cy="8" r="6" />
        <circle cx="16" cy="16" r="6" />
        <path d="M12.5 4.5L19.5 11.5" />
      </svg>
    ),
    bg: "bg-[#f0f0f0]",
    color: "text-text-3",
    title: "Voicemail rarely converts",
    desc: "80% of callers won't leave a message. They'll call your competitor instead.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Problem() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[var(--max)] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-[clamp(1.8rem,3vw,2.6rem)] leading-tight text-text font-normal tracking-[-0.02em] mb-3"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The calls you&apos;re missing cost more than you think
          </h2>
          <p className="text-text-2 text-lg max-w-lg mx-auto">
            Every unanswered call is a customer choosing someone else.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              className="bg-surface rounded-2xl border border-border p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow"
            >
              <div className={`w-11 h-11 rounded-xl ${card.bg} ${card.color} flex items-center justify-center mb-5`}>
                {card.icon}
              </div>
              <h3 className="text-base font-semibold text-text mb-2">{card.title}</h3>
              <p className="text-sm text-text-2 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
