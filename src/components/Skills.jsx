import React from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

const capabilities = [
  {
    symbol: 'OS',
    title: 'Offensive Security',
    description: 'Finding vulnerabilities before attackers do.',
    experience: '2+ years',
    focus: 'Red team engagements for web, network, and Active Directory.',
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
    progress: 95
  },
  {
    symbol: 'SO',
    title: 'Security Operations',
    description: 'Turning telemetry into decisive detection and response.',
    experience: '2+ years',
    focus: 'SOC workflows, threat hunting, and incident response.',
    skills: ['Threat Hunting', 'Incident Response', 'IOC Analysis', 'MITRE ATT&CK', 'Log Analysis', 'Detection Engineering', 'SIEM Monitoring'],
    tools: ['Wazuh', 'Kaspersky EDR', 'SentinelOne', 'Microsoft Defender', 'Sysmon'],
    badge: 'SOC-ready',
    progress: 90
  },
  {
    symbol: 'AS',
    title: 'Application Security',
    description: 'Moving security closer to the code while shaping secure design.',
    experience: '2+ years',
    focus: 'Code-first assurance, threat modeling, and auth security.',
    skills: ['Secure Code Review', 'SAST', 'DAST', 'Threat Modeling', 'Authentication Security', 'Authorization Testing'],
    tools: ['SonarQube', 'Semgrep', 'OWASP ASVS', 'OWASP Top 10'],
    badge: 'OWASP aligned',
    progress: 92
  },
  {
    symbol: 'CI',
    title: 'Cloud & Identity',
    description: 'Hardening identity, access, and cloud attack surface.',
    experience: '2+ years',
    focus: 'Azure identity and Microsoft 365 security for hybrid environments.',
    skills: ['IAM', 'Microsoft 365 Security', 'Azure Identity', 'Active Directory', 'Group Policy', 'Windows Security', 'Linux Hardening'],
    tools: ['Azure AD', 'Microsoft 365', 'Group Policy', 'Linux'],
    badge: 'Identity-first',
    progress: 88
  },
  {
    symbol: 'IF',
    title: 'Infrastructure',
    description: 'Securing the systems and networks your teams rely on.',
    experience: '2+ years',
    focus: 'Server, network, and virtualization hardening.',
    skills: ['Windows Server', 'Linux', 'Networking', 'DNS', 'TCP/IP', 'VPN', 'Firewalls', 'Virtualization', 'Docker', 'VMware'],
    tools: ['Windows Server', 'Linux', 'Docker', 'VMware'],
    badge: 'Resilience focused',
    progress: 86
  },
  {
    symbol: 'RC',
    title: 'Reporting & Collaboration',
    description: 'Turning technical findings into clear remediation and risk guidance.',
    experience: '2+ years',
    focus: 'Stakeholder-ready reports, evidence-based remediation, and collaboration.',
    skills: ['Technical Reporting', 'Executive Reporting', 'Remediation Guidance', 'Risk Assessment', 'Documentation'],
    tools: ['Jira', 'GitLab', 'GitHub', 'Microsoft Teams', 'Markdown', 'Notion'],
    badge: 'Delivery focused',
    progress: 82
  }
]

function SkillCard({ card, index }) {
  const reduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 180,
    damping: 18
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 180,
    damping: 18
  })

  return (
    <motion.article
      onMouseMove={event => {
        if (reduced) return
        const rect = event.currentTarget.getBoundingClientRect()
        x.set((event.clientX - rect.left) / rect.width - 0.5)
        y.set((event.clientY - rect.top) / rect.height - 0.5)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={
        reduced
          ? {}
          : { rotateX, rotateY, transformPerspective: 900 }
      }
      initial={reduced ? {} : { opacity: 0, y: 24 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduced ? {} : { y: -8 }}
      className="group relative h-full overflow-hidden rounded-card-lg border border-white/10 bg-slate-950/30 p-6 shadow-card-lg transition duration-slow hover:-translate-y-1 hover:border-accent/70 hover:bg-slate-950/45"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent2 to-white/50 opacity-80" />
      <div className="relative z-10 flex h-full flex-col justify-between gap-5">
        <div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-950/85 text-sm font-semibold uppercase tracking-badge-lg text-accent shadow-glow">
              {card.symbol}
            </div>
            <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-badge-sm text-accent">
              {card.experience}
            </span>
          </div>

          <div className="mt-5">
            <h3 className="text-xl font-semibold tracking-tight text-white">{card.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{card.description}</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {card.skills.slice(0, 4).map(skill => (
              <span key={skill} className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-text-secondary">
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-card border border-white/10 bg-white/5 p-4">
              <p className="text-[10px] uppercase tracking-badge-lg text-muted">How I do it</p>
              <div className="mt-3 space-y-2">
                {card.skills.slice(0, 3).map(skill => (
                  <p key={skill} className="text-sm leading-6 text-text-secondary">{skill}</p>
                ))}
              </div>
            </div>
            <div className="rounded-card border border-white/10 bg-white/5 p-4">
              <p className="text-[10px] uppercase tracking-badge-lg text-muted">Tools I use</p>
              <div className="mt-3 space-y-2">
                {card.tools.slice(0, 3).map(tool => (
                  <p key={tool} className="text-sm leading-6 text-text-secondary">{tool}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-badge-sm text-muted">
            <span>Capability badge</span>
            <span className="text-accent font-semibold">{card.badge}</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
              initial={{ width: 0 }}
              animate={{ width: `${card.progress}%` }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(56,189,248,.16),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-14 top-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-14 top-32 h-28 w-28 rounded-full bg-accent2/10 blur-3xl" />
        <div className="absolute inset-0 opacity-20 [background:repeating-linear-gradient(0deg,transparent,transparent_24px,rgba(56,189,248,0.04)_25px)]" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">04 / Capabilities</p>
            <h2 className="section-title mt-4 text-white">Security capabilities with context.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted">
            Six premium capability groups that describe what I do, how I do it, and the tools I use in real cybersecurity engagements.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:auto-rows-fr">
          {capabilities.map((card, index) => (
            <SkillCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
