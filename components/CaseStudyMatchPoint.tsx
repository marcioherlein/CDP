'use client'

import { useState } from 'react'
import Image from 'next/image'

// ── Scorecard data ──────────────────────────────────────────────────────────
const scorecard = [
  { label: 'Google Business Profile', score: 8,  max: 25, color: '#c8a96e' },
  { label: 'Website / UX',            score: 0,  max: 20, color: '#e55c00' },
  { label: 'Local SEO',               score: 3,  max: 15, color: '#e59500' },
  { label: 'Social Media',            score: 6,  max: 20, color: '#c8a96e' },
  { label: 'Reviews / Reputation',    score: 2,  max: 10, color: '#e55c00' },
  { label: 'Funnel Clarity',          score: 4,  max: 10, color: '#c8a96e' },
]

// ── Instagram story concepts ────────────────────────────────────────────────
const stories = [
  { bg: '#1a4a1a', text: '#c8a96e', emoji: '🎾', title: 'MATCH POINT', sub: 'Isidro Casanova · La Matanza', cta: 'Reservá ahora →', time: '2h' },
  { bg: '#0d1a0d', text: '#fff',    emoji: '🌙', title: 'Canchas iluminadas', sub: 'Jugá hasta tarde ✓', cta: 'Ver horarios →', time: '5h' },
  { bg: '#c8a96e', text: '#000',    emoji: '⚡', title: '¡Nueva hora libre!', sub: 'Primera clase bonificada', cta: 'Escribinos →', time: '1d' },
]

// ── Packages ────────────────────────────────────────────────────────────────
const packages = [
  {
    name: 'STARTER',
    subtitle: '"Ponemos la casa en orden"',
    constraint: 'Discoverability',
    price: '$150–300 USD',
    period: 'setup + mes 1',
    color: '#c8a96e',
    items: [
      'Google Business Profile completo (fotos, descripción, booking ATC)',
      'Campaña WhatsApp para reviews (template + seguimiento 14 días)',
      'Instagram bio reescrita + link ATC en bio',
      'Creación de página de Facebook',
      '1 Reel walkthrough de canchas (30 min on-site)',
      'Calendario de contenido 30 días (cliente lo ejecuta)',
    ],
    kpis: ['Vistas en GBP', 'Reviews Google (meta: 10 en 14 días)', 'Alcance del primer Reel'],
  },
  {
    name: 'GROWTH',
    subtitle: '"Empezamos a aparecer y a convertir"',
    constraint: 'Discoverability → Trust',
    price: '$400–700 USD',
    period: '/mes (retainer)',
    color: '#c8a96e',
    highlight: true,
    items: [
      'Todo del paquete Starter',
      '12 posts/mes (3 Reels + 6 Stories + 3 estáticos)',
      'Landing page 1 página (NAP, ATC embed, WhatsApp, Google Maps)',
      'Campaña "Primera hora bonificada" (IG + story + WhatsApp broadcast)',
      'Post mensual en GBP (oferta o novedad)',
      'Informe quincenal de competidores',
    ],
    kpis: ['Seguidores IG', 'Vistas de Reels', 'Visitas landing page', 'Clicks ATC booking'],
  },
  {
    name: 'DOMINANCE',
    subtitle: '"Match Point es el club de referencia en GBA Oeste"',
    constraint: 'Full funnel',
    price: '$1,000–2,000 USD',
    period: '/mes (incluye ad spend)',
    color: '#c8a96e',
    items: [
      'Todo del paquete Growth',
      'Meta Ads ($20–50/sem) — tenis, padel, deportes, La Matanza 18–45',
      'Liga interna mensual: brackets, contenido, gestión WhatsApp',
      'Broadcast mensual a base de jugadores (retención + referidos)',
      'Google Ads keywords: "canchas tenis Isidro Casanova" + "padel La Matanza"',
      'Sesión trimestral de fotos/video profesional en cancha',
    ],
    kpis: ['CPM Meta Ads', 'CTR a ATC', 'Bookings mes a mes', 'Revenue por hora de cancha'],
  },
]

// ── Competitor table ─────────────────────────────────────────────────────────
const competitors = [
  { name: 'Zona Oeste Padel', rating: '4.6★', reviews: '30', strength: 'Techadas, easy booking, municipally endorsed', win: 'Match Point tiene tenis — Zona Oeste es padel-first' },
  { name: 'Club Casanova',    rating: 'N/A',  reviews: '9,841 IG', strength: 'Gym + natatorio + football — comunidad enorme', win: 'Especialización pura: tenis & padel para jugadores serios' },
  { name: 'Club Almirante Brown', rating: 'N/A', reviews: 'N/A', strength: 'Institución establecida, múltiples deportes', win: 'Reserva online vía ATC — el club tradicional no tiene eso' },
]

// ── Story card ───────────────────────────────────────────────────────────────
function StoryCard({ s }: { s: typeof stories[0] }) {
  return (
    <div
      className="relative w-[110px] h-[196px] rounded-2xl flex flex-col justify-between p-3 flex-shrink-0 border border-white/10 shadow-xl"
      style={{ background: s.bg }}
    >
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-semibold" style={{ color: s.text }}>@matchpointtenis</span>
        <span className="text-[9px] opacity-50" style={{ color: s.text }}>{s.time}</span>
      </div>
      <div className="text-center text-3xl">{s.emoji}</div>
      <div>
        <p className="text-[10px] font-bold leading-tight mb-1" style={{ color: s.text }}>{s.title}</p>
        <p className="text-[9px] opacity-70 mb-2" style={{ color: s.text }}>{s.sub}</p>
        <div className="rounded px-1.5 py-1 text-center" style={{ background: s.text === '#000' ? '#00000020' : '#ffffff15' }}>
          <span className="text-[9px] font-semibold" style={{ color: s.text }}>{s.cta}</span>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudyMatchPoint() {
  const [tab, setTab] = useState<'overview' | 'audit' | 'instagram' | 'packages'>('overview')

  const tabs: { id: typeof tab; label: string }[] = [
    { id: 'overview',   label: '📍 Overview' },
    { id: 'audit',      label: '📊 Audit' },
    { id: 'instagram',  label: '📱 Instagram' },
    { id: 'packages',   label: '📦 Packages' },
  ]

  return (
    <section id="matchpoint" className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 border-b border-ash/40 pb-8">
          <div>
            <span className="text-accent text-xs tracking-[0.3em] uppercase block mb-3">
              Prospect Case Study · GBA Oeste
            </span>
            <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-none text-white tracking-wide">
              MATCH POINT
            </h2>
            <p className="text-muted text-sm tracking-widest mt-2">
              Tenis & Pádel · Isidro Casanova, La Matanza · @matchpointtenis
            </p>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-4xl font-display text-red-400 leading-none">23</div>
            <div className="text-muted text-xs tracking-widest uppercase">/ 100 current score</div>
            <div className="text-accent text-xs mt-1">→ 85+ with strategy</div>
          </div>
        </div>

        {/* Tab nav */}
        <div className="flex border-b border-ash/30 mb-8 overflow-x-auto">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-6 py-3 text-xs tracking-widest uppercase whitespace-nowrap transition-all duration-300 border-b-2 ${
                tab === t.id
                  ? 'text-accent border-accent'
                  : 'text-muted border-transparent hover:text-silver'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── OVERVIEW TAB ── */}
        {tab === 'overview' && (
          <div className="space-y-8">
            {/* Hero visual + exec summary */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Exterior visual */}
              <div className="relative h-72 rounded-lg overflow-hidden">
                <Image src="/images/matchpoint/exterior_hero.jpg" alt="Match Point exterior" fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="font-display text-2xl text-accent tracking-widest">MATCH POINT</p>
                  <p className="text-white/70 text-xs tracking-widest">Bedoya 7078 · Isidro Casanova · La Matanza</p>
                </div>
              </div>

              {/* Key findings */}
              <div className="bg-[#111] border border-ash/30 rounded-lg p-6 space-y-4">
                <p className="text-accent text-xs tracking-widest uppercase mb-4">Key Findings</p>
                {[
                  { icon: '✓', color: '#22c55e', text: 'ATC Sports booking — online infrastructure exists (rare in La Matanza)' },
                  { icon: '✓', color: '#22c55e', text: 'Dedicated tenis + padel venue — not a generalist club' },
                  { icon: '✗', color: '#ef4444', text: 'No website — 0 owned SEO real estate' },
                  { icon: '✗', color: '#ef4444', text: 'Zero Google reviews indexed — invisible in local search' },
                  { icon: '✗', color: '#ef4444', text: 'Not appearing for "canchas tenis Isidro Casanova" — competitors winning that traffic' },
                  { icon: '↗', color: '#c8a96e', text: 'Primary diagnosed constraint: DISCOVERABILITY' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-sm flex-shrink-0 mt-0.5" style={{ color: item.color }}>{item.icon}</span>
                    <p className="text-silver text-sm leading-snug">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Court visuals */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src="/images/matchpoint/court_clay.jpg" alt="Clay court concept" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="33vw" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2">
                  <p className="text-[10px] text-accent tracking-widest uppercase">Canchas de Tenis</p>
                  <p className="text-[9px] text-white/60">Polvo de ladrillo · Isidro Casanova</p>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src="/images/matchpoint/court_night.jpg" alt="Night court" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="33vw" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2">
                  <p className="text-[10px] text-accent tracking-widest uppercase">Canchas Iluminadas</p>
                  <p className="text-[9px] text-white/60">Jugá hasta tarde</p>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden col-span-2 md:col-span-1">
                <Image src="/images/matchpoint/audit_scorecard.jpg" alt="Audit scorecard" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="33vw" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2">
                  <p className="text-[10px] text-accent tracking-widest uppercase">Marketing Audit</p>
                  <p className="text-[9px] text-white/60">Score actual: 23/100</p>
                </div>
              </div>
            </div>

            {/* Competitor table */}
            <div>
              <p className="text-accent text-xs tracking-widest uppercase mb-4">Competitor Landscape</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-ash/30">
                      {['Competitor', 'Rating', 'Reviews/Followers', 'Their Strength', 'Match Point Win'].map(h => (
                        <th key={h} className="text-left text-muted text-xs tracking-widest uppercase py-3 pr-4">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((c, i) => (
                      <tr key={i} className="border-b border-ash/20">
                        <td className="py-3 pr-4 text-white font-medium text-sm">{c.name}</td>
                        <td className="py-3 pr-4 text-accent text-sm">{c.rating}</td>
                        <td className="py-3 pr-4 text-silver text-sm">{c.reviews}</td>
                        <td className="py-3 pr-4 text-muted text-xs leading-snug max-w-[200px]">{c.strength}</td>
                        <td className="py-3 text-silver text-xs leading-snug max-w-[200px]">{c.win}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 30-day outcome */}
            <div className="bg-[#111] border border-accent/20 rounded-lg p-6">
              <p className="text-accent text-xs tracking-widest uppercase mb-4">Expected 30-Day Outcome With Strategy</p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { metric: 'Semana 1–2', outcome: 'GBP optimizado, Facebook Page creada, bio de IG actualizada con link ATC' },
                  { metric: 'Día 14', outcome: '10 reseñas Google nuevas de jugadores existentes via campaña WhatsApp' },
                  { metric: 'Mes 1', outcome: '500–1,000 alcance orgánico en primer Reel + aparecer en búsquedas locales' },
                ].map((item, i) => (
                  <div key={i} className="border border-ash/30 rounded p-4">
                    <p className="text-accent text-xs tracking-widest uppercase mb-2">{item.metric}</p>
                    <p className="text-silver text-sm leading-relaxed">{item.outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── AUDIT TAB ── */}
        {tab === 'audit' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-accent text-xs tracking-widest uppercase mb-6">Scorecard Actual</p>
                <div className="space-y-5">
                  {scorecard.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-silver text-sm">{item.label}</span>
                        <span className="text-muted text-xs">{item.score}/{item.max}</span>
                      </div>
                      <div className="relative h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                        <div
                          className="absolute left-0 top-0 h-full rounded-full transition-all duration-1000"
                          style={{ width: `${(item.score / item.max) * 100}%`, background: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="bg-[#111] border border-red-500/20 rounded-lg p-4 text-center">
                    <p className="font-display text-4xl text-red-400">23</p>
                    <p className="text-muted text-xs tracking-widest uppercase mt-1">Score actual</p>
                  </div>
                  <div className="bg-[#111] border border-accent/20 rounded-lg p-4 text-center">
                    <p className="font-display text-4xl text-accent">85+</p>
                    <p className="text-muted text-xs tracking-widest uppercase mt-1">Con estrategia</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-accent text-xs tracking-widest uppercase">Priority Fixes (Ordered by Impact/Effort)</p>
                {[
                  { priority: '01', issue: 'Sin reseñas Google', fix: 'Campaña WhatsApp a jugadores existentes', effort: 'S', impact: 'Alto' },
                  { priority: '02', issue: 'GBP incompleto', fix: '10+ fotos, descripción con keywords, link ATC', effort: 'S', impact: 'Alto' },
                  { priority: '03', issue: 'Sin website', fix: 'Landing 1 página con NAP, ATC embed, WhatsApp', effort: 'S', impact: 'Alto' },
                  { priority: '04', issue: 'Link ATC sin promover', fix: 'IG bio + GBP + website + Stories CTA semanal', effort: 'S', impact: 'Medio-Alto' },
                  { priority: '05', issue: 'Sin proof of quality', fix: '1 Reel walkthrough de canchas + testimonio jugador', effort: 'M', impact: 'Alto' },
                  { priority: '06', issue: 'Sin posicionamiento claro', fix: '"Único club tenis+padel con reserva online en Isidro Casanova"', effort: 'S', impact: 'Medio' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-[#111] border border-ash/20 rounded-lg p-4">
                    <span className="font-display text-2xl text-accent/40 flex-shrink-0">{item.priority}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium mb-0.5">{item.issue}</p>
                      <p className="text-muted text-xs leading-snug">{item.fix}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <span className="text-[10px] border border-ash/40 text-muted px-2 py-0.5 rounded">E:{item.effort}</span>
                      <span className="text-[10px] text-accent border border-accent/30 px-2 py-0.5 rounded">{item.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scorecard image */}
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image src="/images/matchpoint/audit_scorecard.jpg" alt="Full audit scorecard" fill className="object-cover" sizes="100vw" />
            </div>
          </div>
        )}

        {/* ── INSTAGRAM TAB ── */}
        {tab === 'instagram' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Simulated profile */}
              <div className="bg-[#141414] rounded-2xl border border-ash/30 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-ash/20">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-muted text-[10px] ml-2">Instagram · @matchpointtenis — concept by Courtney</span>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-4 px-4 py-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-600 to-green-900 flex items-center justify-center text-xl font-bold text-accent flex-shrink-0">
                    MP
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">@matchpointtenis</p>
                    <p className="text-muted text-[11px] mt-0.5">🎾 Tenis & Pádel · Isidro Casanova, La Matanza</p>
                    <p className="text-muted text-[11px]">📲 Reservá en atcsports.io ↗</p>
                    <div className="flex gap-4 mt-2">
                      {[['posts','—'],['seguidores','→500+'],['booking','ATC']].map(([l,v]) => (
                        <div key={l} className="text-center">
                          <p className="text-white text-xs font-bold">{v}</p>
                          <p className="text-muted text-[9px]">{l}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bio rewrite note */}
                <div className="mx-4 mb-4 p-3 bg-accent/10 border border-accent/20 rounded-lg">
                  <p className="text-[10px] text-accent tracking-widest uppercase mb-1">Bio reescrita por Courtney</p>
                  <p className="text-silver text-[11px] leading-relaxed italic">
                    "🎾 Tenis & Pádel en Isidro Casanova<br/>
                    📍 Bedoya 7078 · La Matanza<br/>
                    ⚡ Reservá online → [ATC link]<br/>
                    📲 WhatsApp: [número]"
                  </p>
                </div>

                {/* Stories */}
                <div className="px-4 pb-3">
                  <p className="text-muted text-[9px] tracking-widest uppercase mb-2">Story concepts — Courtney du Preez</p>
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {stories.map((s, i) => <StoryCard key={i} s={s} />)}
                  </div>
                </div>

                {/* Grid placeholder */}
                <div className="grid grid-cols-3 gap-px border-t border-ash/20">
                  {[
                    { src: '/images/matchpoint/court_clay.jpg', label: 'Canchas' },
                    { src: '/images/matchpoint/court_night.jpg', label: 'Nocturno' },
                    { src: '/images/matchpoint/exterior_hero.jpg', label: 'Club' },
                  ].map((img, i) => (
                    <div key={i} className="relative aspect-square">
                      <Image src={img.src} alt={img.label} fill className="object-cover hover:brightness-75 transition-all" sizes="100px" />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-1 text-center">
                        <p className="text-[8px] text-white/70">{img.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content strategy */}
              <div className="space-y-4">
                <div className="bg-[#111] border border-ash/30 rounded-lg p-5">
                  <p className="text-accent text-xs tracking-widest uppercase mb-4">30-Day Content Calendar Framework</p>
                  <div className="space-y-3">
                    {[
                      { week: 'Semana 1', content: 'Reel walkthrough de canchas + actualización de bio y link ATC en la bio' },
                      { week: 'Semana 2', content: 'Post de oferta "Primera hora bonificada" + campaña de reseñas WhatsApp' },
                      { week: 'Semana 3', content: 'Story con testimonio de jugador regular + post estático de horarios y precios' },
                      { week: 'Semana 4', content: 'Reel: "Así se juega en Match Point" — ambiente, canchas, comunidad' },
                    ].map((w, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <span className="text-accent text-xs tracking-widest flex-shrink-0 w-20">{w.week}</span>
                        <p className="text-silver text-xs leading-snug">{w.content}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#111] border border-ash/30 rounded-lg p-5">
                  <p className="text-accent text-xs tracking-widest uppercase mb-3">Cadencia propuesta</p>
                  <ul className="space-y-2">
                    {[
                      '3 posts/semana (1 Reel + 1 estático + 1 Story)',
                      'Stories diarias en semanas de promo',
                      'Hashtag clusters: #tenisBuenosAires #padelGBAOeste #IsidroCasanova #LaMatan za',
                      'CTA en cada caption y Story',
                      'Responder DMs en menos de 2 horas',
                    ].map(item => (
                      <li key={item} className="flex gap-2 text-silver text-xs">
                        <span className="text-accent flex-shrink-0">✓</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#111] border border-ash/30 rounded-lg p-5">
                  <p className="text-accent text-xs tracking-widest uppercase mb-3">Differentiator to broadcast everywhere</p>
                  <div className="border border-accent/30 rounded p-3 bg-accent/5">
                    <p className="text-white text-sm font-medium leading-snug italic">
                      "El único club de tenis y pádel con reserva online en Isidro Casanova."
                    </p>
                  </div>
                  <p className="text-muted text-xs mt-2">GBP · IG bio · Landing page · Ad copy · Todos los captions</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── PACKAGES TAB ── */}
        {tab === 'packages' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, i) => (
                <div
                  key={i}
                  className={`relative bg-[#111] border rounded-lg overflow-hidden ${
                    pkg.highlight ? 'border-accent' : 'border-ash/30'
                  }`}
                >
                  {pkg.highlight && (
                    <div className="bg-accent text-black text-[10px] tracking-widest uppercase text-center py-1.5 font-semibold">
                      Recommended
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-accent text-xs tracking-widest uppercase mb-1">{pkg.name}</p>
                    <p className="text-white text-sm font-medium mb-1 leading-snug">{pkg.subtitle}</p>
                    <p className="text-muted text-xs mb-4">Constraint: {pkg.constraint}</p>

                    <div className="mb-6">
                      <span className="font-display text-3xl text-white">{pkg.price}</span>
                      <span className="text-muted text-xs ml-2">{pkg.period}</span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {pkg.items.map(item => (
                        <li key={item} className="flex gap-2 text-silver text-xs leading-snug">
                          <span className="text-accent flex-shrink-0 mt-0.5">✓</span>{item}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-ash/20 pt-4">
                      <p className="text-muted text-[10px] tracking-widest uppercase mb-2">KPIs</p>
                      {pkg.kpis.map(kpi => (
                        <p key={kpi} className="text-silver text-[11px] flex gap-1.5 mb-1">
                          <span className="text-accent">→</span>{kpi}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Client asks checklist */}
            <div className="bg-[#111] border border-ash/30 rounded-lg p-6">
              <p className="text-accent text-xs tracking-widest uppercase mb-4">
                Assets Needed from Client Before Starting
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { item: 'Acceso GBP (propietario confirmado)', urgency: 'Día 1' },
                  { item: 'Acceso Instagram (manager o login)', urgency: 'Día 1' },
                  { item: 'Número WhatsApp del negocio / dueño', urgency: 'Día 1' },
                  { item: 'Lista de servicios (tenis, pádel, clases, torneos)', urgency: 'Día 1' },
                  { item: 'Fotos actuales de canchas (mínimo 15)', urgency: 'Semana 1' },
                  { item: 'Lista de precios: alquiler + clases', urgency: 'Semana 1' },
                  { item: 'Confirmación titularidad cuenta ATC', urgency: 'Semana 1' },
                  { item: '1 hora on-site para Reel walkthrough', urgency: 'Semana 2' },
                  { item: 'Confirmación de presupuesto', urgency: 'Día 1' },
                ].map((a, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-ash/10">
                    <span className="text-silver text-xs">{a.item}</span>
                    <span className="text-[10px] text-accent border border-accent/30 px-2 py-0.5 rounded ml-3 flex-shrink-0">{a.urgency}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom line pitch */}
            <div className="border border-accent/30 bg-accent/5 rounded-lg p-6">
              <p className="text-accent text-xs tracking-widest uppercase mb-3">Bottom Line</p>
              <p className="text-silver leading-relaxed text-sm">
                Match Point tiene infraestructura real (canchas, ATC, ubicación) pero es funcionalmente invisible online.
                El costo de oportunidad de no actuar es concreto — Zona Oeste Padel y Club Casanova están capturando cada
                búsqueda y momento social que este club debería tener. El fix no es complicado. Es ejecución.
                Y eso es exactamente lo que vendo.
              </p>
            </div>
          </div>
        )}

        {/* CTA to contact */}
        <div className="mt-16 border-t border-ash/30 pt-12 text-center">
          <p className="text-muted text-sm tracking-widest uppercase mb-2">This is how I work</p>
          <p className="text-silver text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Every prospect gets a real audit before I pitch. No generic proposals — only strategy that matches
            the actual constraint.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-accent text-accent text-sm tracking-widest uppercase px-8 py-4 hover:bg-accent hover:text-black transition-all duration-300"
          >
            Work with me →
          </a>
        </div>

      </div>
    </section>
  )
}
