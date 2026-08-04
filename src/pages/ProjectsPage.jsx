import React from 'react'
import PageHero from '../components/PageHero'
import Projects from '../components/Projects'
import PageTransition from '../components/PageTransition'

export default function ProjectsPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Projects"
        title={<>Security outcomes,<br />not just activity.</>}
        description="Featured work spanning endpoint security, infrastructure assessment, application security, and incident response."
      />
      <Projects />
    </PageTransition>
  )
}
