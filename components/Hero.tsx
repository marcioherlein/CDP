'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 15
      const y = (e.clientY / window.innerHeight - 0.5) * 15
      containerRef.current.style.setProperty('--mx', `${x}px`)
      containerRef.current.style.setProperty('--my', `${y}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-black"
      style={{ '--mx': '0px', '--my': '0px' } as React.CSSProperties}
    >
      {/* Full-bleed photo background — right side */}
      <div
        className="absolute inset-0"
        style={{
          transform: 'translate(calc(var(--mx) * 0.4), calc(var(--my) * 0.4))',
          transition: 'transform 0.15s ease-out',
          scale: '1.08',
        }}
      >
        <Image
          src="/images/hero_bg.jpg"
          alt="Courtney du Preez"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      {/* Dark gradient overlay — heavier on left so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Decorative vertical lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.07] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent" />
      </div>

      {/* Ghost watermark */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 overflow-hidden pointer-events-none select-none">
        <p className="font-display text-[22vw] leading-none text-white/[0.025] whitespace-nowrap px-8">
          COURTNEY
        </p>
      </div>

      <div className="h-20" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 w-full">
        <div className="flex items-center gap-4 mb-8 opacity-0-init animate-fade-up delay-100">
          <span className="block w-12 h-px bg-accent" />
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-body">
            Creative Director & Content Strategist
          </span>
        </div>

        <h1 className="font-display leading-none mb-6 opacity-0-init animate-fade-up delay-200">
          <span className="block text-[clamp(4rem,13vw,12rem)] text-white tracking-wide">
            COURTNEY
          </span>
          <span className="block text-[clamp(4rem,13vw,12rem)] text-gradient tracking-wide">
            DU PREEZ
          </span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 opacity-0-init animate-fade-up delay-300">
          <p className="text-silver text-lg md:text-xl max-w-lg leading-relaxed font-light">
            Sport · Lifestyle · Fashion
            <br />
            <span className="text-muted text-base">
              Styled. Directed. Edited. Posted. — Buenos Aires
            </span>
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/#work"
              className="group flex items-center gap-3 bg-accent text-black text-sm tracking-widest uppercase px-7 py-4 font-medium hover:bg-white transition-all duration-300"
            >
              View Work
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            <Link href="/#contact" className="text-sm tracking-widest uppercase text-silver hover:text-white transition-colors duration-300">
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0-init animate-fade-in delay-600">
        <span className="text-muted text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  )
}
