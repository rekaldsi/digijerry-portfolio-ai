import { grantDeadlines, urgentActions } from "./grants";

const badgeStyles = {
  "open": "bg-green-100 text-green-800 border border-green-200",
  "opening-soon": "bg-amber-100 text-amber-800 border border-amber-200",
  "closed": "bg-gray-100 text-gray-600 border border-gray-200",
  "ongoing": "bg-blue-100 text-blue-800 border border-blue-200",
  "relationship": "bg-purple-100 text-purple-800 border border-purple-200",
};

export default function GrantCalendar() {
  return (
    <section id="grants" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[#0f1b2d] opacity-60 text-xs font-sans font-semibold tracking-widest uppercase mb-2">
            Time-Sensitive
          </p>
          <h2 className="text-3xl font-bold text-[#0f1b2d] mb-3">
            Grant Deadline Calendar
          </h2>
          <p className="text-gray-600 font-sans max-w-xl">
            Key funding opportunities sorted by urgency. Share this page with anyone at ChiArts who owns development or grant writing.
          </p>
        </div>

        {/* Urgent action strip */}
        <div className="bg-[#0f1b2d] text-white px-6 py-5 rounded-sm mb-10">
          <h3 className="font-sans text-xs font-bold tracking-widest uppercase text-[#d4a017] mb-4">
            ⚡ Immediate Action Items
          </h3>
          <ul className="space-y-3">
            {urgentActions.map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="font-sans text-xs font-bold bg-[#d4a017] text-[#0f1b2d] px-2 py-0.5 rounded-sm shrink-0 mt-0.5">
                  {item.urgency}
                </span>
                <div>
                  <p className="font-sans text-sm font-semibold text-white leading-tight">{item.action}</p>
                  <p className="font-sans text-xs text-gray-400 mt-0.5">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Grant list */}
        <div className="space-y-4">
          {grantDeadlines.map((grant, i) => (
            <div
              key={i}
              className={`border rounded-sm overflow-hidden ${
                grant.status === "open" || grant.status === "opening-soon"
                  ? "border-gray-200"
                  : "border-gray-100"
              }`}
            >
              <div className="px-5 py-4">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span
                        className={`font-sans text-xs font-semibold px-2 py-0.5 rounded-sm ${
                          badgeStyles[grant.status] || badgeStyles["ongoing"]
                        }`}
                      >
                        {grant.badge}
                      </span>
                      <span className="font-sans text-xs font-bold text-[#d4a017]">
                        {grant.amount}
                      </span>
                    </div>
                    <h3 className="font-sans text-base font-bold text-[#0f1b2d] leading-snug">
                      {grant.name}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-sans text-xs text-gray-500">{grant.deadline}</p>
                    {grant.url && (
                      <a
                        href={grant.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-xs text-[#d4a017] hover:underline"
                      >
                        Visit →
                      </a>
                    )}
                  </div>
                </div>
                <p className="font-sans text-sm text-gray-600 leading-relaxed mb-2">
                  {grant.notes}
                </p>
                {grant.contact && (
                  <p className="font-sans text-xs text-gray-500 mb-2">
                    Contact:{" "}
                    <a
                      href={`mailto:${grant.contact}`}
                      className="text-[#d4a017] hover:underline"
                    >
                      {grant.contact}
                    </a>
                  </p>
                )}
                <div className="flex items-start gap-2 mt-3 pt-3 border-t border-gray-100">
                  <span className="text-[#d4a017] text-sm shrink-0">→</span>
                  <p className="font-sans text-xs font-semibold text-[#0f1b2d] leading-relaxed">
                    {grant.action}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="font-sans text-xs text-gray-400 mt-8 leading-relaxed">
          Grant amounts and deadlines are approximate and subject to change. Always verify current cycle information directly with the funder.
        </p>
      </div>
    </section>
  );
}
