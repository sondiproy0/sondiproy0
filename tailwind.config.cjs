/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#090C12',
        surface: '#0d1420',
        card: '#121925',
        'card-featured': '#10243a',
        contact: '#142337',
        ink: '#f1f5fa',
        'text-secondary': '#cbd5e1',
        muted: '#9aa7b7',
        accent: '#38BDF8',
        accent2: '#6EE7FF',
        line: '#202a39',
        'line-light': '#283345'
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      letterSpacing: {
        tighter: '-.08em',
        tight: '-.06em',
        snug: '-.045em',
        label: '.16em',
        'badge-lg': '0.32em',
        'badge-sm': '0.24em'
      },
      lineHeight: {
        hero: '.85',
        section: '.96',
        prose: '1.75'
      },
      borderRadius: {
        card: '18px',
        'card-lg': '24px',
        'card-xl': '26px',
        section: '24px',
        'section-lg': '2rem'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(56,189,248,0.18)',
        'card-sm': '0 30px 80px -60px rgba(56,189,248,0.35)',
        'card-lg': '0 40px 120px -72px rgba(56,189,248,0.45)',
        nav: '0 25px 50px -12px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)'
      },
      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        slow: '300ms'
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },
  plugins: []
}
