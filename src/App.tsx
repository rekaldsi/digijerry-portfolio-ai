import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AgentSystem from './components/AgentSystem'
import Projects from './components/Projects'
import BrandLogos from './components/BrandLogos'
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
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AgentSystem />
        <Projects />
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
