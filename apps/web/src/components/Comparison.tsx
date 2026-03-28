"use client";

const rows = [
  { feature: "24/7 availability", openline: true, ivr: true, human: false },
  { feature: "Natural conversation", openline: true, ivr: false, human: true },
  { feature: "Books appointments", openline: true, ivr: false, human: true },
  { feature: "Captures & qualifies leads", openline: true, ivr: false, human: true },
  { feature: "Instant text summaries", openline: true, ivr: false, human: false },
  { feature: "Never calls in sick", openline: true, ivr: true, human: false },
  { feature: "Affordable", openline: true, ivr: true, human: false },
];

export default function Comparison() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-[var(--max)] mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-[clamp(1.8rem,3vw,2.6rem)] leading-tight text-text font-normal tracking-[-0.02em] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            How OpenLine compares
          </h2>
          <p className="text-text-2 text-lg max-w-lg mx-auto">
            The best of both worlds. AI intelligence with human warmth.
          </p>
        </div>

        <div className="bg-surface rounded-2xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[520px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-7 py-5 text-sm font-medium text-text-3">Feature</th>
                  <th className="px-7 py-5 text-sm font-semibold text-accent text-center">OpenLine</th>
                  <th className="px-7 py-5 text-sm font-medium text-text-3 text-center">IVR / Phone Tree</th>
                  <th className="px-7 py-5 text-sm font-medium text-text-3 text-center">Human Receptionist</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-b-0">
                    <td className="px-7 py-4 text-sm text-text">{row.feature}</td>
                    <td className="px-7 py-4 text-center">
                      <Check yes={row.openline} accent />
                    </td>
                    <td className="px-7 py-4 text-center">
                      <Check yes={row.ivr} />
                    </td>
                    <td className="px-7 py-4 text-center">
                      <Check yes={row.human} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function Check({ yes, accent }: { yes: boolean; accent?: boolean }) {
  if (yes) {
    return (
      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs ${accent ? "bg-accent-soft text-accent" : "bg-green-soft text-green"}`}>
        ✓
      </span>
    );
  }
  return <span className="text-text-3 text-xs">—</span>;
}
