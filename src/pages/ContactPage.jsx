import React from 'react'
import PageHero from '../components/PageHero'
import Contact from '../components/Contact'
import PageTransition from '../components/PageTransition'

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Contact"
        title={<>Let's make<br />systems safer.</>}
        description="For opportunities, consulting, or a security conversation — reach out."
      />
      <Contact />
    </PageTransition>
  )
}
