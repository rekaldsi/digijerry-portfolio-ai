import { useState, useEffect } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Work', href: '#projects' },
    { label: 'AI System', href: '#ai-system' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: 'https://www.instagram.com/sig.seeker/reels/', external: true },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur border-b transition-colors duration-300 ${scrolled ? 'bg-white/90 border-neutral-100' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-bold text-sm tracking-wide transition-colors duration-300"
          style={{ color: scrolled ? '#171717' : '#ffffff' }}
        >
          Jerry Cieslik
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm transition-colors ${scrolled ? 'text-neutral-500 hover:text-neutral-900' : 'text-neutral-400 hover:text-white'}`}
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm transition-colors ${scrolled ? 'text-neutral-500 hover:text-neutral-900' : 'text-neutral-400 hover:text-white'}`}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-1`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 transition-all ${scrolled ? 'bg-neutral-900' : 'bg-neutral-300'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 transition-all ${scrolled ? 'bg-neutral-900' : 'bg-neutral-300'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 transition-all ${scrolled ? 'bg-neutral-900' : 'bg-neutral-300'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 text-sm text-neutral-600 hover:text-neutral-900 border-b border-neutral-50"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="block px-6 py-3 text-sm text-neutral-600 hover:text-neutral-900 border-b border-neutral-50"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  )
}
