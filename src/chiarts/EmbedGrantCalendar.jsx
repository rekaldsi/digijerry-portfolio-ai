import { grantDeadlines, urgentActions } from "./grants";

const badgeStyles = {
  "open": "bg-green-100 text-green-800 border border-green-200",
  "opening-soon": "bg-amber-100 text-amber-800 border border-amber-200",
  "closed": "bg-gray-100 text-gray-600 border border-gray-200",
  "ongoing": "bg-blue-100 text-blue-800 border border-blue-200",
  "relationship": "bg-purple-100 text-purple-800 border border-purple-200",
};

// Only show open / opening-soon grants in the embed — most relevant
const activeGrants = grantDeadlines.filter((g) => g.status === "open" || g.status === "opening-soon" || g.status === "ongoing");

export default function EmbedGrantCalendar() {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-[#0f1b2d] px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-[#d4a017] text-xs font-bold tracking-widest uppercase">Grant Calendar</p>
          <p className="text-white text-sm font-semibold mt-0.5">Active funding opportunities</p>
        </div>
        <span className="text-xs text-gray-400">Live data</span>
      </div>

      {/* Urgent strip */}
      {urgentActions.length > 0 && (
        <div className="bg-[#0f1b2d] border-t border-[#1e2f42] px-6 py-4">
          <p className="text-[#d4a017] text-xs font-bold tracking-widest uppercase mb-3">⚡ Immediate Actions</p>
          <div className="space-y-2">
            {urgentActions.slice(0, 3).map((item, i) => (
              <div key={i} className="flex gap-2 items-start">
                <span className="text-xs font-black bg-[#d4a017] text-[#0f1b2d] px-2 py-0.5 rounded shrink-0 mt-0.5">{item.urgency}</span>
                <div>
                  <p className="text-white text-xs font-semibold leading-tight">{item.action}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Grant list */}
      <div className="max-h-[380px] overflow-y-auto divide-y divide-gray-100 bg-white">
        {activeGrants.map((grant, i) => (
          <div key={i} className="px-5 py-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between gap-3 mb-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded ${badgeStyles[grant.status] || badgeStyles["ongoing"]}`}>
                  {grant.badge}
                </span>
                <span className="text-xs font-bold text-[#d4a017]">{grant.amount}</span>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs text-gray-400">{grant.deadline}</p>
                {grant.url && (
                  <a href={grant.url} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-[#d4a017] hover:underline">Visit →</a>
                )}
              </div>
            </div>
            <h4 className="text-sm font-bold text-[#0f1b2d] leading-snug mb-1">{grant.name}</h4>
            <p className="text-xs text-gray-600 leading-relaxed">{grant.notes}</p>
            <div className="flex gap-2 mt-2 pt-2 border-t border-gray-100 items-start">
              <span className="text-[#d4a017] text-xs shrink-0">→</span>
              <p className="text-xs font-semibold text-[#0f1b2d] leading-relaxed">{grant.action}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
        <p className="text-xs text-gray-400 italic">Amounts and deadlines approximate. Verify with funder before applying.</p>
      </div>
    </div>
  );
}
