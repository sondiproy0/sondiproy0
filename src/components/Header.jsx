import React from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

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
  const [scrolled, setScrolled] = React.useState(false)
  const navRef = React.useRef(null)
  const reduced = useReducedMotion()

  /* ── scroll spy ──────────────────────────────────────────── */
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -70%', threshold: [0, 0.15, 0.3, 0.6, 1] }
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  /* ── scroll-aware glass intensity ───────────────────────── */
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  /* ── keyboard navigation ────────────────────────────────── */
  const handleNavKey = (e, index) => {
    const btns = navRef.current?.querySelectorAll('[data-nav]')
    if (!btns?.length) return
    let next
    switch (e.key) {
      case 'ArrowRight': next = (index + 1) % btns.length; break
      case 'ArrowLeft':  next = (index - 1 + btns.length) % btns.length; break
      case 'Home':       next = 0; break
      case 'End':        next = btns.length - 1; break
      default: return
    }
    e.preventDefault()
    btns[next].focus()
    btns[next].click()
  }

  return (
    <motion.header
      initial={reduced ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 rounded-2xl border backdrop-blur-2xl transition-[border-color,box-shadow] duration-300 ${
        scrolled
          ? 'border-white/[.12] bg-surface/80 shadow-nav'
          : 'border-white/[.06] bg-surface/60 shadow-none'
      }`}
      role="banner"
    >
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        {/* ── logo ──────────────────────────────────── */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="relative z-10 -ml-2 rounded-lg px-2 py-1 font-heading text-lg font-bold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          aria-label="Scroll to top"
        >
          SR<span className="text-accent">/</span>
        </button>

        {/* ── desktop nav ───────────────────────────── */}
        <nav
          ref={navRef}
          role="navigation"
          aria-label="Main navigation"
          className="relative hidden items-center gap-0.5 md:flex"
        >
          {links.map((link, i) => (
            <button
              key={link.id}
              data-nav={link.id}
              onClick={() => go(link.id)}
              onKeyDown={e => handleNavKey(e, i)}
              aria-current={active === link.id ? 'true' : undefined}
              className={`relative z-10 rounded-lg px-3.5 py-2 text-[13px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                active === link.id
                  ? 'text-white'
                  : 'text-muted hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* sliding active indicator */}
          <ActiveIndicator navRef={navRef} active={active} reduced={reduced} />
        </nav>

        {/* ── desktop CTA ───────────────────────────── */}
        <div className="hidden items-center md:flex">
          <a
            href="/resume.pdf"
            className="rounded-lg bg-accent px-3.5 py-2 text-[13px] font-bold text-page transition-colors duration-200 hover:bg-accent2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            Resume ↗
          </a>
        </div>

        {/* ── hamburger ──────────────────────────────── */}
        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-accent transition-colors duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface md:hidden"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <div className="flex h-4 w-4 flex-col items-center justify-center gap-1.5">
            <motion.span
              className="block h-px w-4 bg-current"
              animate={open ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="block h-px w-4 bg-current"
              animate={open ? { opacity: 0, x: -3 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block h-px w-4 bg-current"
              animate={open ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </button>
      </div>

      {/* ── mobile menu ────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/[.08] md:hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="space-y-0.5 px-3 pb-3 pt-2">
              {links.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={reduced ? false : { x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={reduced ? { duration: 0 } : { delay: i * 0.04, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => go(link.id)}
                  aria-current={active === link.id ? 'true' : undefined}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                    active === link.id
                      ? 'bg-white/10 text-white'
                      : 'text-muted hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span
                    className={`h-1 w-1 rounded-full bg-accent transition-opacity duration-200 ${
                      active === link.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

/* ── sliding pill indicator ──────────────────────────────────── */
function ActiveIndicator({ navRef, active, reduced }) {
  const [style, setStyle] = React.useState({ left: 0, width: 0, opacity: 0 })

  React.useEffect(() => {
    if (reduced || !navRef.current) return
    const btn = navRef.current.querySelector(`[data-nav="${active}"]`)
    const nav = navRef.current
    if (!btn) return
    const navRect = nav.getBoundingClientRect()
    const btnRect = btn.getBoundingClientRect()
    setStyle({
      left: btnRect.left - navRect.left,
      width: btnRect.width,
      opacity: 1
    })
  }, [active, reduced, navRef])

  if (reduced) return null

  return (
    <motion.span
      aria-hidden="true"
      className="absolute inset-y-1 rounded-lg bg-white/[.08]"
      initial={false}
      animate={{ left: style.left, width: style.width, opacity: style.opacity }}
      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
    />
  )
}
