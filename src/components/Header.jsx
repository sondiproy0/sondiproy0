import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' }
]

export default function Header() {
  const location = useLocation()
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const navRef = React.useRef(null)
  const reduced = useReducedMotion()

  const active = links.find(l => l.path === location.pathname)?.path || '/'

  React.useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
      initial={reduced ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 rounded-2xl border backdrop-blur-2xl transition-[border-color,box-shadow] duration-200 ${
        scrolled
          ? 'border-white/[.12] bg-surface/80 shadow-nav'
          : 'border-white/[.06] bg-surface/60 shadow-none'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        {/* ── logo ──────────────────────────────────── */}
        <Link
          to="/"
          className="relative z-10 -ml-2 rounded-lg px-2 py-1 font-heading text-lg font-bold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          aria-label="Go to homepage"
        >
          SR<span className="text-accent">/</span>
        </Link>

        {/* ── desktop nav ───────────────────────────── */}
        <nav
          ref={navRef}
          aria-label="Main navigation"
          className="relative hidden items-center gap-0.5 md:flex"
        >
          {links.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              data-nav={link.path}
              onKeyDown={e => handleNavKey(e, i)}
              aria-current={active === link.path ? 'page' : undefined}
              className={`relative z-10 rounded-lg px-3.5 py-2 text-[13px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                active === link.path
                  ? 'text-white'
                  : 'text-muted hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}

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
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-lg text-accent transition-colors duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface md:hidden"
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
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/[.08] md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="space-y-0.5 px-3 pb-3 pt-2">
              {links.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={reduced ? false : { x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={reduced ? { duration: 0 } : { delay: i * 0.04, duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={link.path}
                    aria-current={active === link.path ? 'page' : undefined}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                      active === link.path
                        ? 'bg-white/10 text-white'
                        : 'text-muted hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span
                      className={`h-1 w-1 rounded-full bg-accent transition-opacity duration-200 ${
                        active === link.path ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

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
