"use client";

import { motion } from "framer-motion";

const industries = [
  "Plumbing", "HVAC", "Electrical", "Landscaping", "Roofing",
  "Pest Control", "Pool Service", "Cleaning", "Auto Repair",
  "Salons", "Painting", "Flooring", "Handyman", "Appliance Repair",
  "Tree Service",
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-32 px-6 bg-surface">
      <div className="max-w-[var(--max)] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2
            className="text-[clamp(1.8rem,3vw,2.6rem)] leading-tight text-text font-normal tracking-[-0.02em] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Built for service businesses
          </h2>
          <p className="text-text-2 text-lg max-w-lg mx-auto">
            If your customers call to book, we handle it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {industries.map((name) => (
            <span
              key={name}
              className="h-10 px-6 rounded-full bg-bg border border-border text-sm text-text-2 flex items-center hover:border-accent hover:text-accent hover:bg-accent-soft transition-all cursor-default"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
