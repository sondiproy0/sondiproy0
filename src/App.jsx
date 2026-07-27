import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Stats from './components/Stats'
import BackgroundMesh from './components/BackgroundMesh'

export default function App() {
  return (
    <div className="min-h-screen bg-page text-ink font-body">
      <BackgroundMesh />
      <Header />
      <main id="main-content" className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8" tabIndex={-1}>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
