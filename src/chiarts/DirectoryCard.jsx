import { targetCallouts } from "./templates";

export default function DirectoryCard({ entry, templateType, onGenerate, isGov }) {
  const hasPersonalized = Boolean(targetCallouts[entry.name.toLowerCase()]);
  const isFoundationPartner = Boolean(entry.foundationPartner);

  return (
    <article
      className={`h-full rounded-xl border p-5 transition-colors duration-200 ${
        isFoundationPartner
          ? "border-[#C9A84C]/60 bg-[#151515] hover:border-[#C9A84C]"
          : "border-white/10 bg-[#151515] hover:border-[#C9A84C]/70"
      }`}
    >
      <div className="flex h-full flex-col gap-4">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-base font-bold leading-tight text-white">{entry.name}</h4>
          <div className="flex shrink-0 flex-col items-end gap-1">
            {isFoundationPartner && (
              <span className="whitespace-nowrap rounded-full border border-[#C9A84C]/60 bg-[#C9A84C]/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#E8C87A]">
                Foundation Partner
              </span>
            )}
            {hasPersonalized && (
              <span className="rounded-full border border-[#E8C87A]/40 bg-[#E8C87A]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#E8C87A]">
                Personalized
              </span>
            )}
          </div>
        </div>

        {isFoundationPartner && entry.foundationTier && (
          <p className="-mt-2 text-xs font-semibold text-[#E8C87A]">
            Already giving {entry.foundationTier} to ChiArts Foundation
          </p>
        )}

        {entry.conservatories && <p className="-mt-2 text-xs font-semibold text-[#C9A84C]">{entry.conservatories}</p>}

        <p className="flex-1 text-sm italic leading-snug text-neutral-300">{entry.relevance}</p>

        <div className="flex flex-col gap-2 text-xs text-neutral-400">
          {entry.address && (
            <div className="flex gap-1.5">
              <span className="shrink-0" aria-hidden="true">
                📍
              </span>
              <span>{entry.address}</span>
            </div>
          )}
          {entry.website && (
            <div className="flex gap-1.5">
              <span className="shrink-0" aria-hidden="true">
                🌐
              </span>
              <a
                href={entry.website}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-[#E8C87A]"
                style={{ color: "#C9A84C" }}
              >
                {entry.websiteDisplay}
              </a>
            </div>
          )}
          {entry.contact && (
            <div className="flex gap-1.5">
              <span className="shrink-0" aria-hidden="true">
                ✉️
              </span>
              {entry.contact.includes("@") ? (
                <a
                  href={`mailto:${entry.contact}`}
                  className="underline underline-offset-2 transition-colors hover:text-[#E8C87A]"
                  style={{ color: "#C9A84C" }}
                >
                  {entry.contact}
                </a>
              ) : (
                <span>{entry.contact}</span>
              )}
            </div>
          )}
        </div>

        {!isGov && templateType && (
          <div className="pt-1">
            <button
              type="button"
              onClick={() => onGenerate(templateType, entry.name)}
              className="w-full rounded-lg bg-[#C9A84C] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-[#0d0d0d] transition-colors hover:bg-[#E8C87A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C87A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151515]"
            >
              Generate Letter →
            </button>
          </div>
        )}

        {isGov && (
          <div className="pt-1">
            <span className="text-xs italic text-neutral-500">Grant program: visit source site for application process</span>
          </div>
        )}
      </div>
    </article>
  );
}
