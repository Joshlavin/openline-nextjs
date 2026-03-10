"use client";

import { motion } from "framer-motion";

const row1 = [
  "ServiceTitan", "Jobber", "Housecall Pro", "GoHighLevel", "Google Calendar",
  "Calendly", "Square", "QuickBooks", "Zapier", "HubSpot",
  "Salesforce", "Slack",
];

const row2 = [
  "Outlook", "Gmail", "Twilio", "RingCentral", "Freshdesk",
  "Zendesk", "Notion", "Airtable", "Stripe", "Acuity",
  "FieldEdge", "ServiceM8",
];

function MarqueeRow({ items, duration, reverse }: { items: string[]; duration: number; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="flex gap-3 overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex gap-3 shrink-0"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="h-9 px-4 rounded-full border border-border bg-surface text-sm text-text-3 flex items-center whitespace-nowrap shrink-0"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Integrations() {
  return (
    <section className="py-20 px-6 bg-surface overflow-hidden">
      <div className="max-w-[var(--max)] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2
            className="text-[clamp(1.8rem,3vw,2.6rem)] leading-tight text-text font-normal tracking-[-0.02em] mb-3"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Works with your tools
          </h2>
          <p className="text-text-2 text-lg">
            Connects to the software you already use.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          <MarqueeRow items={row1} duration={35} />
          <MarqueeRow items={row2} duration={40} reverse />
        </div>
      </div>
    </section>
  );
}
