export const container = {
  hidden: { opacity: 0, y: 12 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: delay,
      when: 'beforeChildren',
      duration: 0.35
    }
  })
}

export const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } }
}
