import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AgentSystem from './components/AgentSystem'
import Projects from './components/Projects'
import BrandLogos from './components/BrandLogos'
import GenerativeWork from './components/GenerativeWork'
import HowIWork from './components/HowIWork'
import Background from './components/Background'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Book from './pages/Book'
import TDA from './pages/TDA'
import CaseKodex from './pages/CaseKodex'
import CaseOverwatch from './pages/CaseOverwatch'
import CaseTradePost from './pages/CaseTradePost'
import CaseBotique from './pages/CaseBotique'

function Home() {
  const location = useLocation()

  useEffect(() => {
    // Only act on explicit navigation (location.key changes), not on pull-to-refresh re-renders
    if (location.hash) {
      // Hash present = user clicked a nav link to a section
      // Only scroll if this is a real navigation (key !== 'default')
      if (location.key !== 'default') {
        const id = location.hash.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
        }
      }
    } else if (!(location.state as { from?: string })?.from) {
      window.scrollTo(0, 0)
    }
  }, [location.key, location.hash, location.state])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AgentSystem />
        <Projects />
        <GenerativeWork />
        <BrandLogos />
        <HowIWork />
        <Background />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/tda" element={<TDA />} />
        <Route path="/case/kodex" element={<CaseKodex />} />
        <Route path="/case/overwatch" element={<CaseOverwatch />} />
        <Route path="/case/tradepost" element={<CaseTradePost />} />
        <Route path="/case/botique" element={<CaseBotique />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
