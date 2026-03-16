import { useState } from "react";
import { directory } from "./directory";
import DirectoryCard from "./DirectoryCard";

const categoryAccent = {
  Foundations: "border-[#E8C87A]",
  "Corporate Partners": "border-[#C9A84C]",
  "Arts-Specific Funders": "border-[#B89434]",
  "Government Grants": "border-[#8E7429]",
};

const EMBED_CATEGORIES = ["Foundations", "Corporate Partners", "Arts-Specific Funders", "Government Grants"];

const PILLS = [
  { key: "all", label: "All" },
  { key: "foundation", label: "Foundation Partners" },
  ...EMBED_CATEGORIES.map((cat) => ({ key: cat, label: cat })),
];

export default function EmbedDirectory({ onGenerateLetter }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const totalFoundation = directory.flatMap((g) => g.entries).filter((e) => e.foundationPartner).length;

  const filteredDirectory = directory
    .map((group) => ({
      ...group,
      entries:
        activeFilter === "foundation"
          ? group.entries.filter((e) => e.foundationPartner)
          : activeFilter === "all"
            ? group.entries
            : activeFilter === group.category
              ? group.entries
              : [],
    }))
    .filter((group) => group.entries.length > 0)
    .filter((group) => activeFilter !== "all" || EMBED_CATEGORIES.includes(group.category));

  return (
    <section className="flex h-full flex-col overflow-hidden bg-[#0d0d0d] text-neutral-100">
      <header className="flex min-h-[76px] items-center justify-between border-b border-white/10 bg-[#0d0d0d] px-6 py-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C]">Partner Directory</p>
          <p className="mt-0.5 text-sm font-semibold text-white">97 vetted organizations across 12 categories</p>
        </div>
        <span className="rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#E8C87A]">
          Live data
        </span>
      </header>

      <div className="border-b border-white/10 bg-[#111111] px-4 py-3 sm:px-6">
        <div className="flex flex-wrap gap-2 overflow-x-auto">
          {PILLS.map(({ key, label }) => {
            const isActive = activeFilter === key;
            const isFoundation = key === "foundation";

            return (
              <button
                key={key}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(key)}
                className={`rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C87A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] ${
                  isActive
                    ? "border-[#C9A84C] bg-[#C9A84C] text-[#0d0d0d]"
                    : "border-white/20 bg-[#171717] text-neutral-300 hover:border-[#C9A84C]/60 hover:text-white"
                }`}
              >
                {label}
                {isFoundation && (
                  <span
                    className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-black ${
                      isActive ? "bg-[#0d0d0d] text-[#E8C87A]" : "bg-[#C9A84C]/15 text-[#E8C87A]"
                    }`}
                  >
                    {totalFoundation}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex-1 space-y-8 overflow-y-auto bg-[#0f0f0f] px-4 py-5 sm:px-6 sm:py-6">
        {filteredDirectory.map((group) => (
          <div key={group.category} className={`border-l-2 pl-4 ${categoryAccent[group.category] || "border-[#C9A84C]"}`}>
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#E8C87A]">
                {group.category}
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {group.entries.slice(0, 6).map((entry) => (
                <DirectoryCard
                  key={entry.name}
                  entry={entry}
                  templateType={group.templateType}
                  isGov={entry.isGov}
                  onGenerate={onGenerateLetter || (() => {})}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
