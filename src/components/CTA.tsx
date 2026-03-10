"use client";

export default function CTA({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="py-28 lg:py-36 px-6 bg-dark relative overflow-hidden">
      {/* Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,85,255,0.12)_0%,transparent_60%)]" />

      <div className="max-w-[var(--max)] mx-auto relative z-10 text-center">
        <h2
          className="text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight text-white font-normal tracking-[-0.02em] mb-5"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Ready to stop missing calls?
        </h2>
        <p className="text-[#aaa] text-lg mb-10 max-w-md mx-auto">
          Get a custom demo and see how OpenLine handles your calls.
        </p>
        <button
          onClick={onOpenModal}
          className="h-[52px] px-9 rounded-full bg-white text-dark text-[15px] font-medium border-none cursor-pointer hover:bg-[#f0f0f0] transition-colors"
        >
          Get Your Custom Quote
        </button>
      </div>
    </section>
  );
}
