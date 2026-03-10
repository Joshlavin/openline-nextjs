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
      className="py-10 px-6"
    >
      <div className="max-w-[var(--max)] mx-auto flex flex-wrap items-center justify-center gap-10 md:gap-14">
        {logos.map((name) => (
          <span
            key={name}
            className="text-sm font-medium tracking-wide text-text-3 opacity-40 select-none"
          >
            {name}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
