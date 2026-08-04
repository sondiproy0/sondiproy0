import React from 'react'
import PageHero from '../components/PageHero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Certifications from '../components/Certifications'
import PageTransition from '../components/PageTransition'

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="About"
        title={<>Security that<br />makes a difference.</>}
        description="Cybersecurity Engineer focused on practical defense: discovering risk, creating meaningful visibility, and helping teams act on the findings that matter."
      />
      <About />
      <Experience />
      <Skills />
      <Certifications />
    </PageTransition>
  )
}
