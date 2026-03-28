"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav({ onOpenModal }: { onOpenModal: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(250,250,250,0.85)] backdrop-blur-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[var(--max)] mx-auto flex items-center justify-between px-6 lg:px-8 h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <div className="w-[32px] h-[32px] bg-accent rounded-[10px] flex items-center justify-center">
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path
                d="M4.5 2.5C4.5 2.5 3.5 3 3.5 5.5C3.5 8 5.5 10.5 8 13C10.5 10.5 12.5 8 12.5 5.5C12.5 3 11.5 2.5 11.5 2.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M6 6.5C6 6.5 6.5 6 8 6C9.5 6 10 6.5 10 6.5"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle cx="8" cy="4" r="1" fill="white" />
              <path d="M8 8.5V11" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-[17px] font-semibold tracking-[-0.02em] text-text">
            OpenLine
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#features" className="text-[14px] text-text-2 hover:text-text transition-colors no-underline">
            Features
          </a>
          <a href="#pricing" className="text-[14px] text-text-2 hover:text-text transition-colors no-underline">
            Pricing
          </a>
          <a href="#industries" className="text-[14px] text-text-2 hover:text-text transition-colors no-underline">
            Industries
          </a>
          <a
            href="/blog-how-ai-answering-works.html"
            className="text-[14px] text-text-2 hover:text-text transition-colors no-underline"
          >
            Blog
          </a>
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenModal}
            className="hidden md:inline-flex h-10 px-6 items-center justify-center rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors cursor-pointer border-none"
          >
            Get a Demo
          </button>
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-[18px] h-[1.5px] bg-text transition-all ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-[18px] h-[1.5px] bg-text transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-[18px] h-[1.5px] bg-text transition-all ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[rgba(250,250,250,0.97)] backdrop-blur-2xl border-t border-border overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              <a href="#features" onClick={() => setMobileOpen(false)} className="py-3 text-[15px] text-text-2 hover:text-text no-underline">Features</a>
              <a href="#pricing" onClick={() => setMobileOpen(false)} className="py-3 text-[15px] text-text-2 hover:text-text no-underline">Pricing</a>
              <a href="#industries" onClick={() => setMobileOpen(false)} className="py-3 text-[15px] text-text-2 hover:text-text no-underline">Industries</a>
              <a href="/blog-how-ai-answering-works.html" onClick={() => setMobileOpen(false)} className="py-3 text-[15px] text-text-2 hover:text-text no-underline">Blog</a>
              <button
                onClick={() => { setMobileOpen(false); onOpenModal(); }}
                className="mt-3 h-11 rounded-full bg-accent text-white text-sm font-medium border-none cursor-pointer"
              >
                Get a Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
