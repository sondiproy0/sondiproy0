import React from 'react'

export default function BackgroundMesh() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="orb-drift absolute -top-40 right-[8%] h-[34rem] w-[34rem] rounded-full bg-accent/20 blur-3xl opacity-40" />
      <div
        className="orb-drift absolute top-[42rem] -left-36 h-96 w-96 rounded-full bg-[#274028] blur-3xl opacity-30"
        style={{ animationDelay: '-6s' }}
      />
      <div className="absolute inset-0 opacity-[.035] [background-image:linear-gradient(var(--color-accent)_1px,transparent_1px),linear-gradient(90deg,var(--color-accent)_1px,transparent_1px)] [background-size:54px_54px]" />
    </div>
  )
}
