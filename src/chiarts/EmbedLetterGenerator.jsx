import { useState, useRef, useCallback } from "react";
import { templates, staffTemplates, templateTypes, targetCallouts } from "./templates";

function formatDate() {
  return new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function LetterBody({ text }) {
  const blocks = text.split("\n\n");

  return (
    <div className="text-sm leading-relaxed text-neutral-200" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
      {blocks.map((block, i) => {
        const isFootnote = block.startsWith("⚠️");
        const lines = block.split("\n");

        if (isFootnote) {
          return (
            <div key={i} className="mt-6 border-t border-white/15 pt-4">
              <p className="text-xs leading-relaxed text-[#E8C87A]">
                {lines.map((l, j) => (
                  <span key={j}>
                    {l}
                    {j < lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          );
        }

        return (
          <p key={i} className={[i > 0 ? "mt-4" : "", i < 3 ? "font-sans text-xs text-neutral-400" : ""].filter(Boolean).join(" ")}>
            {lines.map((l, j) => (
              <span key={j}>
                {l}
                {j < lines.length - 1 && <br />}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default function EmbedLetterGenerator() {
  const [templateType, setTemplateType] = useState(templateTypes[0]);
  const [voice, setVoice] = useState("parent");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [letter, setLetter] = useState("");
  const [copied, setCopied] = useState(false);
  const letterRef = useRef(null);

  const handleGenerate = useCallback(() => {
    const fn = (voice === "staff" ? staffTemplates : templates)[templateType];
    if (!fn) return;

    const companyName = company.trim() || "[COMPANY NAME]";
    const contactName = contact.trim() || null;
    const callout = targetCallouts[companyName.toLowerCase()] || null;

    setLetter(fn(companyName, contactName, formatDate(), callout));
    setCopied(false);
    setTimeout(() => letterRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  }, [templateType, voice, company, contact]);

  const handleCopy = useCallback(() => {
    if (!letter) return;

    navigator.clipboard.writeText(letter).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }, [letter]);

  return (
    <section className="flex h-full flex-col overflow-hidden bg-[#0d0d0d] text-neutral-100">
      <header className="flex min-h-[76px] items-center justify-between border-b border-white/10 bg-[#0d0d0d] px-6 py-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C]">Letter Generator</p>
          <p className="mt-0.5 text-sm font-semibold text-white">Personalized outreach in 90 seconds</p>
        </div>
        <span className="rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#E8C87A]">
          Live tool
        </span>
      </header>

      <div className="border-b border-white/10 bg-[#111111] px-4 py-5 sm:px-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {["parent", "staff"].map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => {
                setVoice(v);
                setLetter("");
              }}
              className={`rounded-lg border px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C87A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] ${
                voice === v
                  ? "border-[#C9A84C] bg-[#C9A84C] text-[#0d0d0d]"
                  : "border-white/20 bg-[#171717] text-neutral-300 hover:border-[#C9A84C]/60 hover:text-white"
              }`}
            >
              {v === "parent" ? "Parent / Supporter" : "Faculty / Staff"}
            </button>
          ))}
        </div>

        <div className="mb-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
          <div>
            <label htmlFor="template-type" className="mb-1 block text-xs font-bold uppercase tracking-wide text-[#E8C87A]">
              Partner Type
            </label>
            <select
              id="template-type"
              value={templateType}
              onChange={(e) => setTemplateType(e.target.value)}
              className="w-full rounded-lg border border-white/20 bg-[#171717] px-3 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C87A]"
            >
              {templateTypes.map((t) => (
                <option key={t} value={t} className="bg-[#171717] text-white">
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="company" className="mb-1 block text-xs font-bold uppercase tracking-wide text-[#E8C87A]">
              Company / Org
            </label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g. Harris Theater"
              className="w-full rounded-lg border border-white/20 bg-[#171717] px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C87A]"
            />
          </div>

          <div>
            <label htmlFor="contact" className="mb-1 block text-xs font-bold uppercase tracking-wide text-[#E8C87A]">
              Contact <span className="font-normal normal-case text-neutral-500">(optional)</span>
            </label>
            <input
              id="contact"
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="e.g. Jane Smith"
              className="w-full rounded-lg border border-white/20 bg-[#171717] px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C87A]"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleGenerate}
          className="rounded-lg bg-[#C9A84C] px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-[#0d0d0d] transition-colors hover:bg-[#E8C87A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C87A]"
        >
          Generate Letter →
        </button>
      </div>

      <div ref={letterRef} className="flex-1 bg-[#0f0f0f] px-4 py-5 sm:px-6">
        {letter ? (
          <>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">Your Letter</p>
              <button
                type="button"
                onClick={handleCopy}
                className={`rounded-lg px-4 py-1.5 text-xs font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C87A] ${
                  copied ? "bg-emerald-600 text-white" : "bg-[#C9A84C] text-[#0d0d0d] hover:bg-[#E8C87A]"
                }`}
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="max-h-[360px] overflow-y-auto rounded-lg border border-white/10 bg-[#151515] p-4 sm:p-5">
              <LetterBody text={letter} />
            </div>
          </>
        ) : (
          <div className="flex h-full min-h-[180px] items-center justify-center rounded-lg border border-dashed border-white/20 bg-[#151515] p-5">
            <p className="text-center text-sm text-neutral-400">Select a partner type, add context, and generate your outreach letter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
