import { useState, useRef, useCallback } from "react";
import { templates, staffTemplates, templateTypes, targetCallouts } from "./templates";

function formatDate() {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function LetterBody({ text }) {
  const blocks = text.split("\n\n");
  return (
    <div
      className="font-[Georgia,serif] text-base leading-[1.7] text-gray-100"
      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
    >
      {blocks.map((block, i) => {
        const isAddressBlock = i < 3;
        const isClosing = i >= blocks.length - 2 && !block.startsWith("⚠️");
        const isFootnote = block.startsWith("⚠️");
        const lines = block.split("\n");

        if (isFootnote) {
          return (
            <div key={i} className="mt-8 pt-6 border-t border-[#2a3f55]">
              <p className="font-sans text-xs text-amber-400 leading-relaxed">
                {lines.map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          );
        }

        return (
          <p
            key={i}
            className={[
              i > 0 ? "mt-5" : "",
              isAddressBlock ? "font-sans text-sm text-gray-400" : "",
              isClosing ? "font-sans text-sm" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {lines.map((line, j) => (
              <span key={j}>
                {line}
                {j < lines.length - 1 && <br />}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default function LetterGenerator({ preselect }) {
  const [templateType, setTemplateType] = useState(
    preselect?.type || templateTypes[0]
  );
  const [voice, setVoice] = useState("parent");
  const [company, setCompany] = useState(preselect?.company || "");
  const [contact, setContact] = useState("");
  const [letter, setLetter] = useState("");
  const [copied, setCopied] = useState(false);
  const [generatedFor, setGeneratedFor] = useState("");
  const letterRef = useRef(null);

  const prevPreselect = useRef(preselect);
  if (
    preselect &&
    (preselect.type !== prevPreselect.current?.type ||
      preselect.company !== prevPreselect.current?.company)
  ) {
    prevPreselect.current = preselect;
    if (preselect.type) setTemplateType(preselect.type);
    if (preselect.company) setCompany(preselect.company);
    setLetter("");
    setGeneratedFor("");
  }

  const handleGenerate = useCallback(() => {
    const templateSet = voice === "staff" ? staffTemplates : templates;
    const fn = templateSet[templateType];
    if (!fn) return;
    const companyName = company.trim() || "[COMPANY NAME]";
    const contactName = contact.trim() || null;
    const calloutData = targetCallouts[companyName.toLowerCase()] || null;
    const generated = fn(companyName, contactName, formatDate(), calloutData);
    setLetter(generated);
    setGeneratedFor(company.trim() || "");
    setCopied(false);
    setTimeout(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      letterRef.current?.scrollIntoView({
        behavior: prefersReduced ? "auto" : "smooth",
        block: "start",
      });
    }, 100);
  }, [templateType, voice, company, contact]);

  const handleReset = useCallback(() => {
    setLetter("");
    setGeneratedFor("");
    setCopied(false);
    setCompany("");
    setContact("");
  }, []);

  const handleCopy = useCallback(() => {
    if (!letter) return;
    navigator.clipboard.writeText(letter).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }, [letter]);

  const handleDownload = useCallback(() => {
    if (!letter) return;
    const blob = new Blob([letter], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const slug = company.trim().replace(/\s+/g, "-").toLowerCase() || "chiarts-letter";
    a.download = `chiarts-letter-${slug}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }, [letter, company]);

  return (
    <section id="generator" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-10">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase mb-2 text-[#0f1b2d] opacity-60">
            Main Tool
          </p>
          <h2 className="text-3xl font-bold text-[#0f1b2d] mb-3">
            Letter Generator
          </h2>
          <p className="text-gray-600 font-sans max-w-xl">
            Select a partner type, enter the organization name, and optionally a contact name.
            Named partners from the directory get a personalized callout paragraph.
          </p>
        </div>

        {/* Form */}
        <div className="bg-[#faf8f3] border border-gray-200 p-6 md:p-8 rounded-sm mb-8">
          {/* Voice toggle */}
          <div className="mb-6">
            <p className="font-sans text-xs font-semibold text-[#0f1b2d] tracking-wide uppercase block mb-2">
              I am a…
            </p>
            <div className="flex gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => { setVoice("parent"); setLetter(""); setGeneratedFor(""); }}
                aria-pressed={voice === "parent"}
                className={`font-sans text-sm font-semibold px-5 py-2.5 rounded-sm border-2 transition-colors duration-200 ${
                  voice === "parent"
                    ? "bg-[#0f1b2d] border-[#0f1b2d] text-white"
                    : "border-gray-300 text-gray-600 hover:border-[#0f1b2d] bg-white"
                }`}
              >
                <span aria-hidden="true">👨‍👩‍👧 </span>Parent / Supporter
              </button>
              <button
                type="button"
                onClick={() => { setVoice("staff"); setLetter(""); setGeneratedFor(""); }}
                aria-pressed={voice === "staff"}
                className={`font-sans text-sm font-semibold px-5 py-2.5 rounded-sm border-2 transition-colors duration-200 ${
                  voice === "staff"
                    ? "bg-[#0f1b2d] border-[#0f1b2d] text-white"
                    : "border-gray-300 text-gray-600 hover:border-[#0f1b2d] bg-white"
                }`}
              >
                <span aria-hidden="true">🎓 </span>Faculty / Staff
              </button>
            </div>
            <p className="font-sans text-xs text-gray-500 mt-2">
              {voice === "staff"
                ? "Letters are written from the perspective of a ChiArts faculty or staff member."
                : "Letters are written from the perspective of a parent, supporter, or community advocate."}
            </p>
          </div>

          <div className="h-px bg-gray-200 mb-6" />

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Template type */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="partnerType" className="font-sans text-xs font-semibold text-[#0f1b2d] tracking-wide uppercase">
                Partner Type
              </label>
              <select
                id="partnerType"
                value={templateType}
                onChange={(e) => setTemplateType(e.target.value)}
                className="font-sans border border-gray-300 bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017] rounded-sm"
              >
                {templateTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Company name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="companyName" className="font-sans text-xs font-semibold text-[#0f1b2d] tracking-wide uppercase">
                Company / Org Name
              </label>
              <input
                id="companyName"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Leo Burnett"
                className="font-sans border border-gray-300 bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017] rounded-sm"
              />
            </div>

            {/* Contact name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contactName" className="font-sans text-xs font-semibold text-[#0f1b2d] tracking-wide uppercase">
                Contact Name{" "}
                <span className="text-gray-400 font-normal normal-case">(optional)</span>
              </label>
              <input
                id="contactName"
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="e.g. Jane Smith"
                className="font-sans border border-gray-300 bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017] rounded-sm"
              />
            </div>
          </div>

          <button
            onClick={handleGenerate}
            className="font-sans bg-[#d4a017] hover:bg-[#f59e0b] text-[#0f1b2d] font-bold px-8 py-3.5 text-sm tracking-wide uppercase transition-colors duration-200 rounded-sm min-h-[44px]"
          >
            Generate Letter →
          </button>
        </div>

        {/* Generated letter */}
        {letter && (
          <div ref={letterRef} aria-live="polite">
            {/* Label + action buttons */}
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              <div>
                <h3 className="font-sans text-xs font-semibold text-[#0f1b2d] tracking-widest uppercase">
                  Your Letter
                </h3>
                {generatedFor && (
                  <p className="font-sans text-xs text-[#0f1b2d] opacity-70 mt-0.5">
                    Generated for:{" "}
                    <span className="font-semibold">{generatedFor}</span>
                    {targetCallouts[generatedFor.toLowerCase()] && (
                      <span className="ml-2 text-emerald-600">✓ Personalized</span>
                    )}
                  </p>
                )}
              </div>
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={handleCopy}
                  className={`font-sans text-sm font-bold px-5 py-2.5 transition-colors duration-200 rounded-sm flex items-center gap-2 min-h-[44px] ${
                    copied
                      ? "bg-green-600 text-white"
                      : "bg-[#d4a017] hover:bg-[#f59e0b] text-[#0f1b2d]"
                  }`}
                >
                  <span aria-hidden="true">{copied ? "✓" : "📋"}</span>
                  {copied ? "Copied!" : "Copy"}
                </button>
                <button
                  onClick={handleDownload}
                  className="font-sans text-sm font-bold px-5 py-2.5 border-2 border-[#0f1b2d] text-[#0f1b2d] hover:bg-[#0f1b2d] hover:text-white transition-colors duration-200 rounded-sm flex items-center gap-2 min-h-[44px]"
                >
                  <span aria-hidden="true">⬇️</span>
                  Download
                </button>
                <button
                  onClick={handleReset}
                  className="font-sans text-sm font-semibold px-5 py-2.5 border-2 border-gray-300 text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors duration-200 rounded-sm min-h-[44px]"
                >
                  Start Over
                </button>
              </div>
            </div>

            {/* Letter box */}
            <div className="bg-[#0f1b2d] p-8 md:p-10 rounded-sm">
              <LetterBody text={letter} />
            </div>

            {/* Now What? */}
            <div className="mt-6 bg-[#faf8f3] border border-gray-200 px-6 py-5 rounded-sm">
              <h4 className="font-sans text-sm font-bold text-[#0f1b2d] tracking-wide uppercase mb-3">
                Now What?
              </h4>
              <ol className="font-sans text-sm text-gray-700 space-y-2 list-decimal list-inside leading-relaxed">
                <li>Copy the letter above and paste it into a new email.</li>
                <li>Add one personal sentence — why you care about ChiArts, or a specific moment that made you a believer.</li>
                <li>Send it, then follow up after 2 weeks if you don't hear back.</li>
                <li>Log who you contacted so the community doesn't send duplicate outreach.</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
