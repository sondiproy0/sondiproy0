import React from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]
const CX = 400
const CY = 300
const R = 200
const NODE_R = 38
const CENTER_R = 48

const nodes = [
  {
    id: 'web',
    label: 'Web Security',
    angle: -90,
    description: 'Securing web applications and APIs against exploitation.',
    skills: ['Web Application Pentesting', 'API Security', 'OWASP Top 10', 'XSS / CSRF / SSRF', 'Authentication Testing'],
    tools: ['Burp Suite', 'OWASP ZAP', 'SQLMap', 'ffuf', 'Gobuster'],
    projects: ['SSO & infrastructure assessment', 'Application assurance pipeline'],
    certification: 'eJPT • PT1',
    experience: '2+ years'
  },
  {
    id: 'cloud',
    label: 'Cloud',
    angle: -30,
    description: 'Hardening cloud posture and identity across hybrid environments.',
    skills: ['Azure Identity', 'CSPM', 'CTEM', 'Cloud IAM', 'M365 Security'],
    tools: ['Azure AD', 'AppAcuity', 'Microsoft 365', 'Group Policy'],
    projects: ['Cloud posture POC', 'SSO & infrastructure assessment'],
    certification: 'Identity-first',
    experience: '2+ years'
  },
  {
    id: 'soc',
    label: 'SOC',
    angle: 30,
    description: 'Turning telemetry into decisive detection and response.',
    skills: ['Threat Hunting', 'Incident Response', 'IOC Analysis', 'MITRE ATT&CK', 'Detection Engineering'],
    tools: ['Wazuh', 'Kaspersky EDR', 'SentinelOne', 'Microsoft Defender', 'Sysmon'],
    projects: ['Kaspersky EDR Expert rollout', 'WordPress incident response'],
    certification: 'SOC-ready',
    experience: '2+ years'
  },
  {
    id: 'infra',
    label: 'Infrastructure',
    angle: 90,
    description: 'Securing the systems and networks your teams rely on.',
    skills: ['Windows Server', 'Linux', 'Networking', 'Docker', 'VMware'],
    tools: ['Windows Server', 'Linux', 'Docker', 'VMware', 'Nessus'],
    projects: ['SSO & infrastructure assessment', 'Kaspersky EDR Expert rollout'],
    certification: 'Resilience focused',
    experience: '2+ years'
  },
  {
    id: 'appsec',
    label: 'AppSec',
    angle: 150,
    description: 'Moving security closer to the code while shaping secure design.',
    skills: ['Secure Code Review', 'SAST', 'DAST', 'Threat Modeling', 'Auth Security'],
    tools: ['SonarQube', 'Semgrep', 'OWASP ASVS', 'OWASP Top 10'],
    projects: ['Application assurance pipeline', 'SSO & infrastructure assessment'],
    certification: 'OWASP aligned',
    experience: '2+ years'
  },
  {
    id: 'identity',
    label: 'Identity',
    angle: 210,
    description: 'Hardening identity, access, and the human attack surface.',
    skills: ['IAM', 'Active Directory', 'Group Policy', 'Azure Identity', 'M365 Security'],
    tools: ['Azure AD', 'Microsoft 365', 'Group Policy', 'BloodHound'],
    projects: ['Cloud posture POC', 'SSO & infrastructure assessment'],
    certification: 'Identity-first',
    experience: '2+ years'
  }
]

function xy(angle, radius) {
  const rad = (angle * Math.PI) / 180
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) }
}

export default function SecurityExpertise() {
  const [selected, setSelected] = React.useState(null)
  const reduced = useReducedMotion()
  const active = nodes.find(n => n.id === selected)

  const toggle = id => setSelected(prev => (prev === id ? null : id))

  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="expertise" className="relative py-16 lg:py-20">
      {/* ── header ─────────────────────────────────────────── */}
      <div>
        <p className="eyebrow">Security Expertise</p>
        <h2 className="section-title mt-4 text-white">Attack surface, mapped.</h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
          A live topology of my security domains. Hover to highlight, click to explore.
        </p>
      </div>

      {/* ── topology + detail (side by side on desktop) ────── */}
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_420px]">
        {/* SVG topology */}
        <div>
          <svg
            viewBox="0 0 800 600"
            className="w-full min-h-[280px] sm:min-h-0"
            aria-label="Network topology of security expertise"
          >
            <defs>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* connecting lines with animated particles */}
            {nodes.map((n, ni) => {
              const p = xy(n.angle, R)
              const on = selected === n.id
              return (
                <g key={`line-${n.id}`}>
                  <line
                    x1={CX} y1={CY} x2={p.x} y2={p.y}
                    className="t-line"
                    stroke="#38BDF8"
                    strokeWidth={on ? 1.5 : 1}
                    opacity={on ? 0.7 : 0.2}
                    style={{ transition: 'opacity .25s,stroke-width .25s' }}
                  />
                  {/* traveling particle */}
                  {!reduced && (
                    <circle r={2} fill="#38BDF8" opacity={on ? 0.8 : 0.35}>
                      <animateMotion
                        dur={`${3 + ni * 0.3}s`}
                        repeatCount="indefinite"
                        path={`M${CX},${CY} L${p.x},${p.y}`}
                      />
                    </circle>
                  )}
                </g>
              )
            })}

            {/* center glow */}
            <circle cx={CX} cy={CY} r={CENTER_R + 22} fill="url(#centerGlow)" className="t-pulse" />

            {/* center ring */}
            <circle cx={CX} cy={CY} r={CENTER_R + 4} fill="none" stroke="#38BDF8" strokeWidth={0.5} opacity={0.3} />

            {/* center node */}
            <circle cx={CX} cy={CY} r={CENTER_R} fill="#0d1420" stroke="#38BDF8" strokeWidth={1.5} />
            <text x={CX} y={CY - 6} textAnchor="middle" fill="#f1f5fa" fontSize={13} fontWeight={600} fontFamily="Space Grotesk,sans-serif">
              Cyber
            </text>
            <text x={CX} y={CY + 12} textAnchor="middle" fill="#f1f5fa" fontSize={13} fontWeight={600} fontFamily="Space Grotesk,sans-serif">
              security
            </text>

            {/* satellite nodes */}
            {nodes.map(n => {
              const p = xy(n.angle, R)
              const on = selected === n.id
              const above = n.angle < 0 || n.angle > 180
              const ly = above ? p.y - NODE_R - 14 : p.y + NODE_R + 20

              return (
                <g
                  key={n.id}
                  className="t-node"
                  onClick={() => toggle(n.id)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggle(n.id)
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${n.label} — click to explore`}
                  aria-pressed={on}
                  style={{ outline: 'none' }}
                >
                  {/* outer glow */}
                  <circle
                    className="t-glow t-pulse"
                    cx={p.x} cy={p.y} r={NODE_R + 14}
                    fill="rgba(56,189,248,.06)"
                    style={{ opacity: on ? 0.85 : 0.25, transition: 'opacity .25s' }}
                  />
                  {/* ring */}
                  <circle
                    className="t-ring"
                    cx={p.x} cy={p.y} r={NODE_R}
                    fill={on ? '#10243a' : '#0d1420'}
                    stroke={on ? '#38BDF8' : '#202a39'}
                    strokeWidth={on ? 1.5 : 1}
                    style={{ transition: 'fill .25s,stroke .25s,stroke-width .25s' }}
                  />
                  {/* inner dot */}
                  <circle
                    cx={p.x} cy={p.y} r={3}
                    fill={on ? '#38BDF8' : '#9aa7b7'}
                    opacity={on ? 0.9 : 0.4}
                    style={{ transition: 'fill .25s,opacity .25s' }}
                  />
                  {/* label */}
                  <text
                    className="t-label"
                    x={p.x} y={ly}
                    textAnchor="middle"
                    fill={on ? '#f1f5fa' : '#9aa7b7'}
                    fontSize={11}
                    fontWeight={500}
                    fontFamily="Inter,sans-serif"
                    style={{ transition: 'fill .25s' }}
                  >
                    {n.label}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        {/* ── detail panel (right column) ──────────────────── */}
        <div className="flex h-full items-stretch">
          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.id}
                initial={reduced ? {} : { opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduced ? {} : { opacity: 0, x: -8 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="flex w-full flex-col rounded-card-lg border border-white/10 bg-surface/80 p-6 backdrop-blur-xl"
              >
                {/* title row */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg font-semibold text-white">{active.label}</h3>
                  <span className="shrink-0 rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 font-mono text-[9px] font-semibold text-accent">
                    {active.certification}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-muted">{active.description}</p>

                <div className="mt-1 font-mono text-[9px] text-muted/60">{active.experience}</div>

                {/* skills */}
                <div className="mt-5">
                  <p className="font-mono text-[10px] uppercase tracking-badge-lg text-muted">Skills</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {active.skills.map(s => (
                      <span key={s} className="rounded-full border border-white/[.08] bg-white/[.04] px-2.5 py-1 text-[11px] leading-3 text-text-secondary">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* tools */}
                <div className="mt-5">
                  <p className="font-mono text-[10px] uppercase tracking-badge-lg text-muted">Tools</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {active.tools.map(t => (
                      <span key={t} className="rounded-full border border-accent/[.12] bg-accent/[.06] px-2.5 py-1 font-mono text-[11px] leading-3 text-accent/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* projects */}
                <div className="mt-5">
                  <p className="font-mono text-[10px] uppercase tracking-badge-lg text-muted">Related projects</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {active.projects.map(p => (
                      <span key={p} className="flex items-center gap-1.5 rounded-md border border-white/[.08] bg-white/[.04] px-2.5 py-1 text-[11px] leading-3 text-text-secondary">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.p
                key="hint"
                initial={reduced ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduced ? {} : { opacity: 0 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="hidden text-sm text-muted/40 lg:block"
              >
                Click a node to explore.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
