import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import SecurityExpertise from '../components/SecurityExpertise'
import Contact from '../components/Contact'
import PageTransition from '../components/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <SecurityExpertise />
      <Contact />
    </PageTransition>
  )
}
