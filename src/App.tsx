import Nav from './components/Nav'
import Hero from './components/Hero'
import AgentSystem from './components/AgentSystem'
import Projects from './components/Projects'
import HowIWork from './components/HowIWork'
import Background from './components/Background'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AgentSystem />
        <Projects />
        <HowIWork />
        <Background />
      </main>
      <Footer />
    </>
  )
}

export default App
