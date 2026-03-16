import { useState, useRef, useCallback } from "react";
import { templates, staffTemplates, templateTypes, targetCallouts } from "./templates";

function formatDate() {
  return new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function LetterBody({ text }) {
  const blocks = text.split("\n\n");
  return (
    <div className="font-serif text-sm leading-relaxed text-gray-200" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
      {blocks.map((block, i) => {
        const isFootnote = block.startsWith("⚠️");
        const lines = block.split("\n");
        if (isFootnote) return (
          <div key={i} className="mt-6 pt-4 border-t border-[#2a3f55]">
            <p className="text-xs text-amber-400 leading-relaxed">{lines.map((l, j) => <span key={j}>{l}{j < lines.length - 1 && <br />}</span>)}</p>
          </div>
        );
        return (
          <p key={i} className={[i > 0 ? "mt-4" : "", i < 3 ? "text-xs text-gray-400 font-sans" : ""].filter(Boolean).join(" ")}>
            {lines.map((l, j) => <span key={j}>{l}{j < lines.length - 1 && <br />}</span>)}
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
    navigator.clipboard.writeText(letter).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2500); });
  }, [letter]);

  return (
    <div className="bg-white rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-[#0f1b2d] px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-[#d4a017] text-xs font-bold tracking-widest uppercase">Letter Generator</p>
          <p className="text-white text-sm font-semibold mt-0.5">Personalized outreach in 90 seconds</p>
        </div>
        <span className="text-xs text-gray-400">Live tool</span>
      </div>

      {/* Form */}
      <div className="px-6 py-5 bg-[#faf8f3] border-b border-gray-200">
        {/* Voice toggle */}
        <div className="flex gap-2 mb-4">
          {["parent", "staff"].map((v) => (
            <button key={v} onClick={() => { setVoice(v); setLetter(""); }}
              className={`text-xs font-bold px-4 py-2 rounded transition-colors border-2 ${voice === v ? "bg-[#0f1b2d] border-[#0f1b2d] text-white" : "border-gray-300 text-gray-600 bg-white hover:border-[#0f1b2d]"}`}>
              {v === "parent" ? "👨‍👩‍👧 Parent / Supporter" : "🎓 Faculty / Staff"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-wide text-[#0f1b2d] block mb-1">Partner Type</label>
            <select value={templateType} onChange={(e) => setTemplateType(e.target.value)}
              className="w-full border border-gray-300 bg-white px-3 py-2 text-sm rounded focus:outline-none focus:border-[#d4a017]">
              {templateTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wide text-[#0f1b2d] block mb-1">Company / Org</label>
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g. Harris Theater"
              className="w-full border border-gray-300 bg-white px-3 py-2 text-sm rounded focus:outline-none focus:border-[#d4a017]" />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wide text-[#0f1b2d] block mb-1">Contact <span className="text-gray-400 font-normal normal-case">(optional)</span></label>
            <input type="text" value={contact} onChange={(e) => setContact(e.target.value)}
              placeholder="e.g. Jane Smith"
              className="w-full border border-gray-300 bg-white px-3 py-2 text-sm rounded focus:outline-none focus:border-[#d4a017]" />
          </div>
        </div>

        <button onClick={handleGenerate}
          className="bg-[#d4a017] hover:bg-[#f59e0b] text-[#0f1b2d] font-bold px-6 py-2.5 text-xs tracking-widest uppercase rounded transition-colors">
          Generate Letter →
        </button>
      </div>

      {/* Output */}
      <div className="px-6 py-5 bg-[#0f1b2d] min-h-[120px]">
        {letter ? (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-bold text-[#d4a017] tracking-widest uppercase">Your Letter</p>
              <button onClick={handleCopy}
                className={`text-xs font-bold px-4 py-1.5 rounded transition-colors ${copied ? "bg-green-600 text-white" : "bg-[#d4a017] text-[#0f1b2d] hover:bg-[#f59e0b]"}`}>
                {copied ? "✓ Copied" : "📋 Copy"}
              </button>
            </div>
            <div className="max-h-[320px] overflow-y-auto pr-1">
              <LetterBody text={letter} />
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-[120px]">
            <p className="text-gray-500 text-sm text-center">Select a partner type, enter a name,<br />and generate a letter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
