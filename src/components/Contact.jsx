import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="relative mb-16 overflow-hidden rounded-section-lg border border-line bg-contact px-6 py-12 text-white sm:mb-24 sm:px-12 sm:py-16">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
      <p className="relative eyebrow text-accent2">06 / Contact</p>
      <div className="relative mt-6 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <h2 className="font-heading text-5xl font-bold leading-none tracking-tight sm:text-7xl">
            Let's make<br />
            <span className="text-accent">systems safer.</span>
          </h2>
          <p className="mt-6 max-w-lg leading-prose text-text-secondary">
            For opportunities, consulting, or a security conversation, send me a note.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href="mailto:sondiproy4321@gmail.com"
            className="rounded-full bg-accent px-6 py-3 text-center text-sm font-bold text-page transition hover:-translate-y-1 hover:bg-accent2"
          >
            sondiproy4321@gmail.com
          </a>
          <a
            href="/resume.pdf"
            className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold transition hover:-translate-y-1 hover:bg-white hover:text-page"
          >
            Download résumé
          </a>
        </div>
      </div>
    </section>
  )
}
