import React from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const capabilities = [
  {
    symbol: 'OS',
    title: 'Offensive Security',
    description: 'Finding vulnerabilities before attackers do.',
    skills: [
      'Web Application Pentesting',
      'Internal Network Pentesting',
      'Active Directory',
      'API Security',
      'OWASP Top 10',
      'PTES Methodology',
      'CVSS',
      'Vulnerability Assessment',
      'Exploit Validation'
    ],
    tools: ['Burp Suite', 'Nmap', 'Metasploit', 'Nessus', 'OWASP ZAP', 'Gobuster', 'ffuf', 'SQLMap', 'Impacket', 'BloodHound'],
    badge: 'eJPT • PT1',
    methodologies: ['PTES Framework', 'OWASP Testing Guide', 'CVSS Scoring'],
    projects: ['SSO & infrastructure assessment']
  },
  {
    symbol: 'SO',
    title: 'Security Operations',
    description: 'Turning telemetry into decisive detection and response.',
    skills: [
      'Threat Hunting',
      'Incident Response',
      'IOC Analysis',
      'MITRE ATT&CK',
      'Log Analysis',
      'Detection Engineering',
      'SIEM Monitoring'
    ],
    tools: ['Wazuh', 'Kaspersky EDR', 'SentinelOne', 'Microsoft Defender', 'Sysmon'],
    badge: 'SOC-ready',
    methodologies: ['MITRE ATT&CK', 'Diamond Model', 'NIST IR'],
    projects: ['Kaspersky EDR Expert rollout', 'WordPress incident response']
  },
  {
    symbol: 'AS',
    title: 'Application Security',
    description: 'Moving security closer to the code while shaping secure design.',
    skills: [
      'Secure Code Review',
      'SAST',
      'DAST',
      'Threat Modeling',
      'Authentication Security',
      'Authorization Testing'
    ],
    tools: ['SonarQube', 'Semgrep', 'OWASP ASVS', 'OWASP Top 10'],
    badge: 'OWASP aligned',
    methodologies: ['OWASP ASVS', 'STRIDE', 'SAST/DAST Pipelines'],
    projects: ['Application assurance pipeline', 'SSO & infrastructure assessment']
  },
  {
    symbol: 'CI',
    title: 'Cloud & Identity',
    description: 'Hardening identity, access, and cloud attack surface.',
    skills: [
      'IAM',
      'Microsoft 365 Security',
      'Azure Identity',
      'Active Directory',
      'Group Policy',
      'Windows Security',
      'Linux Hardening'
    ],
    tools: ['Azure AD', 'Microsoft 365', 'Group Policy', 'Linux'],
    badge: 'Identity-first',
    methodologies: ['Zero Trust', 'Least Privilege', 'Identity Governance'],
    projects: ['Cloud posture POC', 'SSO & infrastructure assessment']
  },
  {
    symbol: 'IF',
    title: 'Infrastructure',
    description: 'Securing the systems and networks your teams rely on.',
    skills: [
      'Windows Server',
      'Linux',
      'Networking',
      'DNS',
      'TCP/IP',
      'VPN',
      'Firewalls',
      'Virtualization',
      'Docker',
      'VMware'
    ],
    tools: ['Windows Server', 'Linux', 'Docker', 'VMware'],
    badge: 'Resilience focused',
    methodologies: ['CIS Benchmarks', 'STIG', 'Defense in Depth'],
    projects: ['SSO & infrastructure assessment', 'Kaspersky EDR Expert rollout']
  },
  {
    symbol: 'RC',
    title: 'Reporting & Collaboration',
    description: 'Turning technical findings into clear remediation and risk guidance.',
    skills: [
      'Technical Reporting',
      'Executive Reporting',
      'Remediation Guidance',
      'Risk Assessment',
      'Documentation'
    ],
    tools: ['Jira', 'GitLab', 'GitHub', 'Microsoft Teams', 'Markdown', 'Notion'],
    badge: 'Delivery focused',
    methodologies: ['CVSS Communication', 'Risk Quantification', 'Stakeholder Reporting'],
    projects: ['SSO & infrastructure assessment', 'Application assurance pipeline']
  }
]

export default function Skills() {
  const [expandedId, setExpandedId] = React.useState(null)
  const reduced = useReducedMotion()

  const toggle = id => setExpandedId(prev => (prev === id ? null : id))

  return (
    <section id="skills" className="relative overflow-hidden py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(56,189,248,.16),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-14 top-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-14 top-32 h-28 w-28 rounded-full bg-accent2/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">04 / Capabilities</p>
            <h2 className="section-title mt-4 text-white">Security capabilities with context.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted">
            Six capability groups describing what I do, how I do it, and the tools I use. Click to expand.
          </p>
        </div>

        <div
          className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4"
          role="list"
          aria-label="Security capabilities"
        >
          {capabilities.map((card, index) => (
            <CapCard
              key={card.symbol}
              card={card}
              index={index}
              expanded={expandedId === card.symbol}
              onToggle={() => toggle(card.symbol)}
              reduced={reduced}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function CapCard({ card, index, expanded, onToggle, reduced }) {
  const contentId = `cap-content-${card.symbol}`
  const previewSkills = card.skills.slice(0, 3)
  const previewTools = card.tools.slice(0, 3)

  return (
    <motion.article
      role="listitem"
      initial={reduced ? {} : { opacity: 0, y: 20 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: EASE }}
      className={`group relative flex flex-col overflow-hidden rounded-card-lg border transition-colors duration-300 ${
        expanded
          ? 'border-accent/40 bg-slate-950/40 shadow-card-sm'
          : 'border-white/10 bg-white/[.035] hover:border-white/20'
      }`}
    >
      {/* top accent bar */}
      <div
        className={`absolute inset-x-0 top-0 h-px transition-opacity duration-300 ${
          expanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
        } bg-gradient-to-r from-accent via-accent2 to-transparent`}
      />

      {/* ── collapsed header (always visible) ──────── */}
      <button
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={contentId}
        className="flex w-full items-start gap-3.5 p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent sm:p-5"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950/80 text-xs font-semibold uppercase tracking-badge-lg text-accent shadow-glow">
          {card.symbol}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-semibold leading-snug tracking-tight text-white">
              {card.title}
            </h3>
            <motion.span
              aria-hidden="true"
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="mt-0.5 shrink-0 text-[10px] text-muted"
            >
              ▾
            </motion.span>
          </div>

          <p className="mt-1 text-xs leading-5 text-muted line-clamp-2">
            {card.description}
          </p>
        </div>
      </button>

      {/* ── preview chips (collapsed only) ──────────── */}
      {!expanded && (
        <div className="flex flex-wrap gap-1 px-4 pb-4 sm:px-5">
          {previewSkills.map(s => (
            <span
              key={s}
              className="rounded-full border border-white/[.08] bg-white/[.04] px-2 py-0.5 text-[10px] leading-4 text-text-secondary"
            >
              {s}
            </span>
          ))}
          {previewTools.map(t => (
            <span
              key={t}
              className="rounded-full border border-accent/[.12] bg-accent/[.06] px-2 py-0.5 font-mono text-[9px] leading-4 text-accent/80"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* ── expanded detail panel ───────────────────── */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={contentId}
            role="region"
            aria-label={`${card.title} details`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-white/[.06] px-4 pt-4 pb-5 sm:px-5">
              {/* badge */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-badge-sm text-muted">
                  Certification
                </span>
                <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-accent">
                  {card.badge}
                </span>
              </div>

              {/* methodologies */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-badge-lg text-muted">
                  Methodologies
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {card.methodologies.map(m => (
                    <span
                      key={m}
                      className="rounded-md border border-white/[.08] bg-white/[.04] px-2 py-1 text-[11px] leading-4 text-text-secondary"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* tools */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-badge-lg text-muted">
                  Tools
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {card.tools.map(t => (
                    <span
                      key={t}
                      className="rounded-full border border-accent/[.12] bg-accent/[.06] px-2.5 py-0.5 font-mono text-[10px] leading-4 text-accent/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* skills */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-badge-lg text-muted">
                  Skills
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {card.skills.map(s => (
                    <span
                      key={s}
                      className="rounded-full border border-white/[.08] bg-white/[.04] px-2.5 py-0.5 text-[11px] leading-4 text-text-secondary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* related projects */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-badge-lg text-muted">
                  Related projects
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {card.projects.map(p => (
                    <span
                      key={p}
                      className="flex items-center gap-1.5 rounded-md border border-white/[.08] bg-white/[.04] px-2.5 py-1 text-[11px] leading-4 text-text-secondary"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
