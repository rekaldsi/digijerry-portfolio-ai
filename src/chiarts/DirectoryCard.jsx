import { targetCallouts } from "./templates";

export default function DirectoryCard({ entry, templateType, onGenerate, isGov }) {
  const hasPersonalized = Boolean(targetCallouts[entry.name.toLowerCase()]);
  const isFoundationPartner = Boolean(entry.foundationPartner);

  return (
    <div className={`bg-white border p-6 flex flex-col gap-4 transition-colors duration-200 rounded-sm ${isFoundationPartner ? "border-emerald-300 hover:border-emerald-500" : "border-gray-200 hover:border-[#d4a017]"}`}>
      {/* Name + badges */}
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-bold text-[#0f1b2d] text-base leading-tight">{entry.name}</h4>
        <div className="flex flex-col gap-1 items-end shrink-0">
          {isFoundationPartner && (
            <span className="font-sans text-[10px] font-bold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded tracking-wide uppercase whitespace-nowrap">
              ✓ Foundation Partner
            </span>
          )}
          {hasPersonalized && (
            <span className="font-sans text-[10px] font-semibold bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded tracking-wide uppercase">
              Personalized
            </span>
          )}
        </div>
      </div>

      {/* Foundation tier note */}
      {isFoundationPartner && entry.foundationTier && (
        <p className="text-xs text-emerald-700 font-sans font-semibold -mt-2">
          Already giving {entry.foundationTier} to ChiArts Foundation
        </p>
      )}

      {/* Conservatory tag */}
      {entry.conservatories && (
        <p className="text-xs text-indigo-700 font-sans font-semibold -mt-2">
          🎭 {entry.conservatories}
        </p>
      )}

      {/* Relevance */}
      <p className="text-sm text-gray-600 italic leading-snug flex-1">{entry.relevance}</p>

      {/* Meta details */}
      <div className="flex flex-col gap-2 text-xs font-sans text-gray-500">
        {entry.address && (
          <div className="flex gap-1.5">
            <span className="shrink-0" aria-hidden="true">📍</span>
            <span>{entry.address}</span>
          </div>
        )}
        {entry.website && (
          <div className="flex gap-1.5">
            <span className="shrink-0" aria-hidden="true">🌐</span>
            <a
              href={entry.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f1b2d] underline underline-offset-2 hover:text-[#d4a017] transition-colors"
            >
              {entry.websiteDisplay}
            </a>
          </div>
        )}
        {entry.contact && (
          <div className="flex gap-1.5">
            <span className="shrink-0" aria-hidden="true">✉️</span>
            {entry.contact.includes("@") ? (
              <a
                href={`mailto:${entry.contact}`}
                className="text-[#0f1b2d] underline underline-offset-2 hover:text-[#d4a017] transition-colors"
              >
                {entry.contact}
              </a>
            ) : (
              <span>{entry.contact}</span>
            )}
          </div>
        )}
      </div>

      {/* CTA */}
      {!isGov && templateType && (
        <div className="pt-1">
          <button
            onClick={() => onGenerate(templateType, entry.name)}
            className="font-sans text-xs font-bold px-4 py-2.5 bg-[#d4a017] hover:bg-[#f59e0b] text-[#0f1b2d] transition-colors duration-200 rounded-sm tracking-wide uppercase w-full"
          >
            Generate Letter →
          </button>
        </div>
      )}
      {isGov && (
        <div className="pt-1">
          <span className="font-sans text-xs text-gray-400 italic">
            Grant program — visit website for application process
          </span>
        </div>
      )}
    </div>
  );
}
