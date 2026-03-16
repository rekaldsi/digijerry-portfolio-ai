import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import CaseChiArts from './pages/CaseChiArts'
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
    if (location.hash) {
      const id = location.hash.replace('#', '')
      // For pull-to-refresh (key === 'default') with no intentional hash nav, skip
      // But if navigated here from a case study CTA, key will not be 'default'
      // Use a flag in sessionStorage to distinguish intentional hash nav
      const intentional = sessionStorage.getItem('hashNav') === location.hash
      sessionStorage.removeItem('hashNav')
      if (intentional || location.key !== 'default') {
        const scroll = () => {
          const el = document.getElementById(id)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }
        // Give the page time to render before scrolling
        setTimeout(scroll, 200)
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
        <Route path="/case/chiarts" element={<CaseChiArts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
