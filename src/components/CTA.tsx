"use client";

import { motion } from "framer-motion";

export default function CTA({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="py-24 px-6 bg-dark relative overflow-hidden">
      {/* Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,85,255,0.12)_0%,transparent_60%)]" />

      <div className="max-w-[var(--max)] mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight text-white font-normal tracking-[-0.02em] mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Ready to stop missing calls?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#aaa] text-lg mb-8 max-w-md mx-auto"
        >
          Get a custom demo and see how OpenLine handles your calls.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={onOpenModal}
          className="h-12 px-8 rounded-full bg-white text-dark text-[15px] font-medium border-none cursor-pointer hover:bg-[#f0f0f0] transition-colors"
        >
          Get Your Custom Quote
        </motion.button>
      </div>
    </section>
  );
}
