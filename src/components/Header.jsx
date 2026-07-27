import React from 'react'
const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Capabilities' },
  { id: 'projects', label: 'Projects' },
  { id: 'certs', label: 'Credentials' }
]

export default function Header() {
  const [active, setActive] = React.useState('about')
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id)
      }),
      { rootMargin: '-35% 0px -55%' }
    )
    links.forEach(({ id }) => {
      const node = document.getElementById(id)
      if (node) observer.observe(node)
    })
    return () => observer.disconnect()
  }, [])

  const go = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="sticky top-4 z-40 mx-auto w-[calc(100%-2rem)] max-w-6xl rounded-2xl border border-white/10 bg-surface/75 shadow-nav backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-3 sm:px-5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-heading text-lg font-bold tracking-tight text-white"
        >
          SR<span className="text-accent">/</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                active === link.id
                  ? 'bg-white/10 text-white'
                  : 'text-muted hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="/resume.pdf"
            className="rounded-lg bg-accent px-3 py-2 text-xs font-bold text-page transition hover:bg-accent2"
          >
            Resume ↗
          </a>
        </div>

        <button
          className="font-mono text-[10px] text-accent md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-4 pb-3 md:hidden">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="block w-full py-3 text-left text-sm text-text-secondary"
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
