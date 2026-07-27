import React from 'react'

const roles = [
  {
    period: '2025 — Present',
    company: 'Betopia Limited',
    title: 'Cybersecurity Engineer',
    label: 'Security Operations',
    impact: 'Leading a practical, enterprise-wide detection and response program.',
    points: [
      'Rolled out Kaspersky EDR Expert across 815 endpoints in 16 SBUs—authoring security policies, exclusions, and response playbooks for each risk profile.',
      'Operate and tune Wazuh SIEM detections; investigate alerts, reduce false positives, and maintain actionable detection logic and response runbooks.',
      'Triaged 100+ phishing and malware IOCs each month using sandbox analysis, then mapped detection coverage to MITRE ATT&CK.',
      'Conduct web, network, Active Directory, and code-security assessments using OWASP Top 10, PTES, Nessus, and manual validation.'
    ]
  },
  {
    period: '2024',
    company: 'Neuratech Ltd',
    title: 'Jr. Executive — IT & Cybersecurity',
    label: 'Identity & Infrastructure',
    impact: 'Strengthening the foundations that make secure access possible.',
    points: [
      'Managed 250+ Active Directory user accounts, group structures, OUs, provisioning/de-provisioning, and delegated administration.',
      'Implemented password, account lockout, GPO, access control, and firewall policies to improve enterprise identity hygiene.',
      'Assessed Windows Server and endpoint environments, applied hardening baselines, and validated remediation through follow-up reviews.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="section-rule grid gap-8 py-16 lg:grid-cols-[.42fr_1fr] lg:py-24">
      <div>
        <p className="eyebrow">02 / Experience</p>
        <h2 className="section-title mt-4">Work that holds up under pressure.</h2>
        <p className="mt-5 max-w-xs text-sm leading-6 text-muted">
          Security work is strongest when the operating model is as considered as the tooling.
        </p>
      </div>

      <div>
        {roles.map((role, index) => (
          <article
            key={role.company}
            className={`rounded-card-lg border border-line bg-card p-6 card-hover ${
              index ? 'mt-4' : ''
            }`}
          >
            <div className="grid gap-5 sm:grid-cols-[8rem_1fr]">
              <div>
                <p className="font-mono text-xs text-accent">{role.period}</p>
                <span className="mt-3 inline-block rounded-full bg-accent/10 px-3 py-1 font-mono text-[9px] uppercase tracking-badge-wider text-accent">
                  {role.label}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted">{role.company} · Dhaka</p>
                <h3 className="mt-1 text-2xl font-bold tracking-snug">{role.title}</h3>
                <p className="mt-3 text-base leading-prose text-ink">{role.impact}</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-muted">
                  {role.points.map(point => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-1 text-accent">✦</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
