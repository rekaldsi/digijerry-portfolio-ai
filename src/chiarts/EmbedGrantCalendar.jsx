import { grantDeadlines, urgentActions } from "./grants";

const badgeStyles = {
  open: "border-emerald-300/40 bg-emerald-400/15 text-emerald-200",
  "opening-soon": "border-amber-300/40 bg-amber-400/15 text-amber-100",
  closed: "border-neutral-500/30 bg-neutral-500/15 text-neutral-300",
  ongoing: "border-sky-300/40 bg-sky-400/15 text-sky-100",
  relationship: "border-fuchsia-300/40 bg-fuchsia-400/15 text-fuchsia-100",
};

const activeGrants = grantDeadlines.filter((g) => g.status === "open" || g.status === "opening-soon" || g.status === "ongoing");

export default function EmbedGrantCalendar() {
  return (
    <section className="flex h-full flex-col overflow-hidden bg-[#0d0d0d] text-neutral-100">
      <header className="flex min-h-[76px] items-center justify-between border-b border-white/10 bg-[#0d0d0d] px-6 py-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C]">Grant Calendar</p>
          <p className="mt-0.5 text-sm font-semibold text-white">Active funding opportunities</p>
        </div>
        <span className="rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#E8C87A]">
          Live data
        </span>
      </header>

      {urgentActions.length > 0 && (
        <div className="border-b border-white/10 bg-[#111111] px-4 py-4 sm:px-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C]">Immediate Actions</p>
          <div className="space-y-2.5">
            {urgentActions.slice(0, 3).map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 rounded bg-[#C9A84C] px-2 py-0.5 text-[10px] font-black text-[#0d0d0d]">{item.urgency}</span>
                <div>
                  <p className="text-xs font-semibold leading-tight text-white">{item.action}</p>
                  <p className="mt-0.5 text-xs text-neutral-400">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex-1 divide-y divide-white/10 overflow-y-auto bg-[#0f0f0f]">
        {activeGrants.map((grant, i) => (
          <article key={i} className="px-5 py-4 transition-colors hover:bg-white/[0.03]">
            <div className="mb-1.5 flex items-start justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded border px-2 py-0.5 text-xs font-semibold ${badgeStyles[grant.status] || badgeStyles.ongoing}`}>
                  {grant.badge}
                </span>
                <span className="text-xs font-bold text-[#E8C87A]">{grant.amount}</span>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-xs text-neutral-400">{grant.deadline}</p>
                {grant.url && (
                  <a
                    href={grant.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#C9A84C] transition-colors hover:text-[#E8C87A] hover:underline"
                  >
                    Visit →
                  </a>
                )}
              </div>
            </div>

            <h4 className="mb-1 text-sm font-bold leading-snug text-white">{grant.name}</h4>
            <p className="text-xs leading-relaxed text-neutral-400">{grant.notes}</p>
            <div className="mt-2 flex items-start gap-2 border-t border-white/10 pt-2">
              <span className="shrink-0 text-xs text-[#C9A84C]">→</span>
              <p className="text-xs font-semibold leading-relaxed text-neutral-200">{grant.action}</p>
            </div>
          </article>
        ))}
      </div>

      <footer className="border-t border-white/10 bg-[#111111] px-5 py-3">
        <p className="text-xs italic text-neutral-500">Amounts and deadlines are directional. Confirm details with each funder before applying.</p>
      </footer>
    </section>
  );
}
