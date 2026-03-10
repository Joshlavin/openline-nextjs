"use client";

import { motion } from "framer-motion";

const logos = ["ServiceTitan", "Jobber", "Housecall Pro", "GoHighLevel", "Google Calendar"];

export default function LogoBar() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6 }}
      className="py-14 lg:py-16 px-6 border-y border-border"
    >
      <div className="max-w-[var(--max)] mx-auto">
        <p className="text-xs font-medium text-text-3 uppercase tracking-[0.15em] text-center mb-6">
          Integrates with your stack
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {logos.map((name) => (
            <span
              key={name}
              className="text-sm font-medium tracking-wide text-text-3 opacity-40 select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
