import { useState } from "react";
import { directory } from "./directory";
import DirectoryCard from "./DirectoryCard";

const categoryAccent = {
  "Ad Agencies": "border-[#d4a017]",
  "Foundations": "border-blue-500",
  "Corporate / Entertainment": "border-emerald-500",
  "Government Grants": "border-purple-500",
  "Arts-Specific Funders": "border-pink-500",
  "Corporate Partners": "border-orange-500",
  "Music Industry": "border-rose-500",
  "Theatre & Performing Arts": "border-violet-500",
  "Dance Industry": "border-fuchsia-500",
  "Visual Arts & Design": "border-cyan-500",
  "National Arts Funders": "border-sky-500",
  "Sports & Community Foundations": "border-green-500",
};

const categoryBadge = {
  "Ad Agencies": "bg-[#d4a017] text-[#0f1b2d]",
  "Foundations": "bg-blue-700 text-white",
  "Corporate / Entertainment": "bg-emerald-700 text-white",
  "Government Grants": "bg-purple-700 text-white",
  "Arts-Specific Funders": "bg-pink-700 text-white",
  "Corporate Partners": "bg-orange-700 text-white",
  "Music Industry": "bg-rose-700 text-white",
  "Theatre & Performing Arts": "bg-violet-700 text-white",
  "Dance Industry": "bg-fuchsia-700 text-white",
  "Visual Arts & Design": "bg-cyan-700 text-white",
  "National Arts Funders": "bg-sky-700 text-white",
  "Sports & Community Foundations": "bg-green-700 text-white",
};

// Only show a curated subset of categories in the embed
const EMBED_CATEGORIES = [
  "Foundations",
  "Corporate Partners",
  "Arts-Specific Funders",
  "Government Grants",
];

const PILLS = [
  { key: "all", label: "All" },
  { key: "foundation", label: "✓ Foundation Partners" },
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
    // In "all" mode, only show the curated embed categories
    .filter((group) => activeFilter !== "all" || EMBED_CATEGORIES.includes(group.category));

  return (
    <div className="bg-[#faf8f3] rounded-xl overflow-hidden">
      {/* Header bar */}
      <div className="bg-[#0f1b2d] px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-[#d4a017] text-xs font-bold tracking-widest uppercase">Partner Directory</p>
          <p className="text-white text-sm font-semibold mt-0.5">97 vetted organizations across 12 categories</p>
        </div>
        <span className="text-xs text-gray-400 font-sans">Live data</span>
      </div>

      {/* Filter pills */}
      <div className="px-6 py-4 border-b border-gray-200 bg-white flex flex-wrap gap-2 overflow-x-auto">
        {PILLS.map(({ key, label }) => {
          const isActive = activeFilter === key;
          const isFoundation = key === "foundation";
          let activeStyle = "bg-[#0f1b2d] text-white";
          let inactiveStyle = "border border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800";
          if (isFoundation) {
            activeStyle = "bg-emerald-700 text-white";
            inactiveStyle = "border border-emerald-300 text-emerald-700 hover:bg-emerald-50";
          } else if (key !== "all" && categoryBadge[key]) {
            activeStyle = `${categoryBadge[key]}`;
          }
          return (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${isActive ? activeStyle : inactiveStyle}`}
            >
              {label}
              {isFoundation && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${isActive ? "bg-white text-emerald-700" : "bg-emerald-100 text-emerald-700"}`}>
                  {totalFoundation}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <div className="px-6 py-6 max-h-[520px] overflow-y-auto space-y-10 bg-[#faf8f3]">
        {filteredDirectory.map((group) => (
          <div key={group.category} className={`border-l-4 pl-5 ${categoryAccent[group.category] || "border-[#d4a017]"}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`${categoryBadge[group.category] || "bg-[#0f1b2d] text-white"} text-xs font-bold px-3 py-1 tracking-widest uppercase rounded`}>
                {group.category}
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 items-stretch">
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
    </div>
  );
}
