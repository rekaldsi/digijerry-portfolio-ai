import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AgentSystem from './components/AgentSystem'
import Projects from './components/Projects'
import BrandLogos from './components/BrandLogos'
import HowIWork from './components/HowIWork'
import Background from './components/Background'
import Footer from './components/Footer'
import Book from './pages/Book'

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
