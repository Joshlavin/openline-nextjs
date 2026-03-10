"use client";

import { motion } from "framer-motion";

const included = [
  "AI voice agent, fully customized to your business",
  "24/7 call answering",
  "Lead qualification & capture",
  "Appointment booking integration",
  "Instant text + email summaries",
  "Monthly performance report",
  "Dedicated setup & onboarding",
];

export default function Pricing({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="pricing" className="py-24 lg:py-32 px-6">
      <div className="max-w-[var(--max)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-[clamp(1.8rem,3vw,2.6rem)] leading-tight text-text font-normal tracking-[-0.02em] mb-5"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Simple pricing.<br />No surprises.
            </h2>
            <p className="text-text-2 text-lg leading-relaxed mb-10 max-w-md">
              Every business is different. We build a custom plan based on your call volume, hours, and needs.
            </p>
            <button
              onClick={onOpenModal}
              className="h-[52px] px-9 rounded-full bg-accent text-white text-[15px] font-medium border-none cursor-pointer hover:bg-accent-hover transition-colors"
            >
              Get Your Custom Quote
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-surface rounded-2xl border border-border p-9"
          >
            <h3 className="text-base font-semibold text-text mb-6">What&apos;s Included</h3>
            <div className="flex flex-col gap-4">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3.5">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-green-soft text-green flex items-center justify-center text-[11px] shrink-0">
                    ✓
                  </span>
                  <span className="text-sm text-text-2 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
