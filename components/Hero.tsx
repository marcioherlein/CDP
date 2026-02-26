'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * 20
      containerRef.current.style.setProperty('--mouse-x', `${x}px`)
      containerRef.current.style.setProperty('--mouse-y', `${y}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-black"
      style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc via-black to-black" />

      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-silver to-transparent" />
      </div>

      {/* Big background text */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 overflow-hidden pointer-events-none select-none">
        <p
          className="font-display text-[22vw] leading-none text-white/[0.03] whitespace-nowrap px-8"
          style={{
            transform: 'translate(calc(var(--mouse-x) * -0.5), calc(var(--mouse-y) * -0.5))',
            transition: 'transform 0.1s ease-out',
          }}
        >
          COURTNEY
        </p>
      </div>

      {/* Nav placeholder height */}
      <div className="h-20" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8 opacity-0-init animate-fade-up delay-100">
          <span className="block w-12 h-px bg-accent" />
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-body">
            Creative Director & Content Strategist
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display leading-none mb-6 opacity-0-init animate-fade-up delay-200">
          <span className="block text-[clamp(4rem,14vw,13rem)] text-white tracking-wide">
            COURTNEY
          </span>
          <span className="block text-[clamp(4rem,14vw,13rem)] text-gradient tracking-wide">
            DU PREEZ
          </span>
        </h1>

        {/* Tagline + CTA row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 opacity-0-init animate-fade-up delay-300">
          <p className="text-silver text-lg md:text-xl max-w-lg leading-relaxed font-body font-light">
            Sport · Lifestyle · Fashion
            <br />
            <span className="text-muted text-base">
              Styled. Directed. Edited. Posted. — Buenos Aires
            </span>
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/#work"
              className="group flex items-center gap-3 bg-accent text-black text-sm tracking-widest uppercase px-7 py-4 font-body font-medium hover:bg-white transition-all duration-300"
            >
              View Work
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
            <Link
              href="/#contact"
              className="text-sm tracking-widest uppercase text-silver hover:text-white transition-colors duration-300"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0-init animate-fade-in delay-600">
        <span className="text-muted text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  )
}
