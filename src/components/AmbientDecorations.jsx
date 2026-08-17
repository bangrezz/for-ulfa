import React from 'react'

export function AmbientDecorations() {
  // Pre-calculated petal parameters for smooth deterministic rendering
  const petals = [
    { id: 1, left: '8%', top: '15%', size: 18, delay: '0s', duration: '8s', rotation: 15 },
    { id: 2, left: '88%', top: '22%', size: 24, delay: '2s', duration: '11s', rotation: -25 },
    { id: 3, left: '15%', top: '48%', size: 16, delay: '4s', duration: '9s', rotation: 40 },
    { id: 4, left: '92%', top: '65%', size: 20, delay: '1s', duration: '10s', rotation: -15 },
    { id: 5, left: '6%', top: '82%', size: 22, delay: '3s', duration: '12s', rotation: 30 },
    { id: 6, left: '84%', top: '90%', size: 18, delay: '5s', duration: '7s', rotation: -35 }
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Soft radial ambient background glow spots */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#E2D1FF]/30 blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-[#F0E7FF]/50 blur-3xl" />
      <div className="absolute bottom-10 left-1/4 w-[28rem] h-[28rem] rounded-full bg-[#E2D1FF]/25 blur-3xl" />

      {/* Floating Lavender Flower Petals */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute transition-opacity duration-1000"
          style={{
            left: petal.left,
            top: petal.top,
            animation: `float-slow ${petal.duration} ease-in-out infinite`,
            animationDelay: petal.delay,
            transform: `rotate(${petal.rotation}deg)`
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#CCAEF3]/40 drop-shadow-sm hover:text-[#A875E4]/60 transition-colors"
          >
            <path
              d="M12 2C12 2 15 7 15 12C15 17 12 22 12 22C12 22 9 17 9 12C9 7 12 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M2 12C2 12 7 9 12 9C17 9 22 12 22 12C22 12 17 15 12 15C7 15 2 12 2 12Z"
              fill="currentColor"
              opacity="0.75"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
