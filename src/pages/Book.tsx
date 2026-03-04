import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import chaptersRaw from '../data/agi-book-chapters.json'

type Source = {
  text: string
  url: string
}

type Chapter = {
  index: number
  display_index?: number
  filename: string
  title: string
  text: string
  sources?: Source[]
  length: number
}

const chapters = chaptersRaw as Chapter[]

// Sort: index 21 first (intro), then 1-20 in order
const sortedChapters = [
  ...chapters.filter((c) => c.index === 21),
  ...chapters.filter((c) => c.index !== 21).sort((a, b) => a.index - b.index),
]

const pullQuotes = [
  {
    text: 'If machines can think and solve problems more efficiently than humans, what remains of our cognitive uniqueness?',
    chapter: 'Ch. 14',
  },
  {
    text: 'Conscious machines would potentially possess desires, preferences, and the ability to suffer — raising questions about their moral status.',
    chapter: 'Ch. 9',
  },
  {
    text: 'The singularity is no longer the realm of science fiction. It is a scenario society must actively prepare for.',
    chapter: 'Ch. 12',
  },
]

function formatWordCount(text: string): string {
  const count = text.split(' ').length
  return `~${count.toLocaleString()} words`
}

function ChapterText({ text, sources }: { text: string; sources?: Source[] }) {
  // Split on double newlines for paragraphs, skip the first line (title repeat) and "Reasoning:" lines
  const paragraphs = text
    .split('\n\n')
    .map((p) => p.trim())
    .filter((p) => p.length > 0)
    .filter((p) => !p.startsWith('Reasoning:'))

  return (
    <div className="pt-6 pb-2">
      {paragraphs.map((para, i) => {
        // Detect headings: short lines without punctuation at end (no period/question mark)
        const isHeading =
          para.length < 80 &&
          !para.endsWith('.') &&
          !para.endsWith('?') &&
          !para.endsWith(':') &&
          !para.startsWith('Note:') &&
          !para.startsWith('References') &&
          i > 0

        if (isHeading) {
          return (
            <h4
              key={i}
              className="text-sm font-bold uppercase tracking-wider text-neutral-500 mt-8 mb-3"
            >
              {para}
            </h4>
          )
        }

        return (
          <p key={i} className="text-neutral-700 leading-relaxed text-base mb-4">
            {para}
          </p>
        )
      })}

      {sources && sources.length > 0 && (
        <div className="mt-10 pt-6 border-t border-neutral-200">
          <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-3">Sources</p>
          <ul className="space-y-1.5">
            {sources.map((s, i) => (
              <li key={i} className="text-xs text-neutral-400 flex gap-2">
                <span className="text-neutral-300 shrink-0">{i + 1}.</span>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E85D04] transition-colors break-all"
                >
                  {s.text} <span className="text-neutral-300">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function ChapterAccordion({
  chapter,
  displayNum,
  isOpen,
  onToggle,
}: {
  chapter: Chapter
  displayNum: number
  isOpen: boolean
  onToggle: () => void
}) {
  const num = String(displayNum).padStart(2, '0')
  const wordCount = formatWordCount(chapter.text)

  return (
    <div className="border-b border-neutral-100">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-6 py-5 px-0 text-left group focus:outline-none"
      >
        {/* Chapter number */}
        <span
          className="text-2xl font-black tabular-nums flex-shrink-0 transition-colors"
          style={{ color: isOpen ? '#E85D04' : '#d4d4d4' }}
        >
          {num}
        </span>

        {/* Title */}
        <span className="flex-1 text-base md:text-lg font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors leading-snug">
          {chapter.title}
        </span>

        {/* Word count — hidden on small mobile */}
        <span className="hidden sm:block text-xs text-neutral-400 font-medium flex-shrink-0">
          {wordCount}
        </span>

        {/* Chevron */}
        <motion.span
          className="flex-shrink-0 text-neutral-400"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 6l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="pb-8 max-w-3xl">
              <ChapterText text={chapter.text} sources={chapter.sources} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Book() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const navigate = useNavigate()
  const location = useLocation()
  const fromProjects = (location.state as { from?: string })?.from === '/#projects'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function handleBack() {
    if (fromProjects) {
      navigate('/')
      // After navigation, scroll to #projects
      setTimeout(() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      navigate(-1)
    }
  }

  const handleToggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Nav back link */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-500 hover:text-neutral-300 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M9 2L4 7l5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {fromProjects ? '← Back to Work' : '← Back to Site'}
        </button>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Eyebrow */}
          <p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-6"
            style={{ color: '#E85D04' }}
          >
            The AGI Podcast Series
          </p>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-4">
            After Intelligence
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-neutral-400 font-light mb-6">
            AGI and Its Implications on Humanity
          </p>

          {/* Author line */}
          <p className="text-sm text-neutral-600 tracking-wide">
            Jerry Cieslik &nbsp;·&nbsp; 21 Chapters &nbsp;·&nbsp; Podcast in Progress
          </p>
        </motion.div>

        {/* Pull quotes */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          {pullQuotes.map((q, i) => (
            <blockquote
              key={i}
              className="border-l-2 pl-5 py-1"
              style={{ borderColor: '#E85D04' }}
            >
              <p className="text-lg md:text-xl italic text-neutral-300 leading-relaxed mb-3">
                &ldquo;{q.text}&rdquo;
              </p>
              <cite className="text-xs text-neutral-600 not-italic font-semibold tracking-widest uppercase">
                — {q.chapter}
              </cite>
            </blockquote>
          ))}
        </motion.div>
      </section>

      {/* Chapter list section — white bg */}
      <section className="bg-white rounded-t-3xl">
        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* Section header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
              style={{ color: '#E85D04' }}
            >
              21 Chapters
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Read the chapters.
            </h2>
            <p className="text-neutral-400 mt-2 text-base">
              Each chapter was written as a standalone podcast episode. Tap any to read the full text.
            </p>
          </motion.div>

          {/* Accordion */}
          <div>
            {sortedChapters.map((chapter, i) => (
              <ChapterAccordion
                key={chapter.index}
                chapter={chapter}
                displayNum={i + 1}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div
          className="py-20 px-6 text-center"
          style={{ backgroundColor: '#0a0a0a' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-xl mx-auto"
          >
            <p className="text-lg md:text-xl text-neutral-300 mb-3 leading-relaxed">
              These chapters were built for a podcast series on AGI — before everyone else started talking about it.
            </p>
            <p className="text-neutral-500 mb-10">
              The podcast is still in the works. The content is here now.
            </p>
            <a
              href="https://www.instagram.com/sig.seeker/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-colors"
              style={{
                backgroundColor: 'transparent',
                color: '#E85D04',
                border: '1px solid #E85D04',
              }}
            >
              Follow on Instagram ↗
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
