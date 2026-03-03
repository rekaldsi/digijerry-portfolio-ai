export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-12 text-center">
      <p className="text-white font-bold text-lg">JERRY CIESLIK</p>
      <p className="text-neutral-400 text-sm mt-1">Creative Generalist · AI Architect · Product Builder</p>
      <a
        href="https://www.instagram.com/sig.seeker/reels/"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-sm font-medium transition-colors hover:opacity-80"
        style={{ color: '#E85D04' }}
      >
        @sig.seeker
      </a>
      <p className="text-neutral-600 text-xs mt-6">© 2026 Jerry Cieslik</p>
    </footer>
  )
}
