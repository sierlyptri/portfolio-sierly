import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Statistics from './components/Statistics'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Academy from './components/Academy'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {/* <Statistics /> */}
      <About />
      <TechStack />
      <Projects />
      <Academy />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
