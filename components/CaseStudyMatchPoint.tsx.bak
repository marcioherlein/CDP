'use client'

import { useState } from 'react'
import Image from 'next/image'

const PHOTOS = [
  {
    file: '/images/matchpoint/real_padel_action.jpg',
    label: 'Pádel · Vidrio',
    surface: 'padel',
    mood: 'dynamic',
    caption: '¿Ves esa concentración? 👀 Así se juega en Match Point.\nCancha de pádel disponible hoy — reservá 👇',
    hashtags: '#MatchPointPadel #PádelIsidro #ReserváHoy #GBAOeste #PádelArgentina',
    likes: '74', comments: '9', time: '2h',
    why: 'Best individual action shot. Glass wall + green garden background = premium venue feel that money cannot fake. Strong diagonal energy through the body. Watermark applied bottom-right shows brand discipline.',
  },
  {
    file: '/images/matchpoint/real_clay_sprint.jpg',
    label: 'Tenis · Dobles',
    surface: 'clay',
    mood: 'action',
    caption: 'Todo por el punto 🎾 Polvo de ladrillo, el deporte de los que se lo toman en serio.\nReservá tu cancha → link en bio.',
    hashtags: '#TenisLaMatanza #TenisBA #PolvoDeLadrillo #MatchPointTenis #DoblesTenis',
    likes: '91', comments: '14', time: '1d',
    why: 'Best composition of all 8 photos. Player sprinting creates motion and diagonal energy. Topper fence banner = legitimate brand sponsorship. Clay surface differentiates from blue-only padel clubs.',
  },
  {
    file: '/images/matchpoint/real_highfive.jpg',
    label: 'Comunidad',
    surface: 'clay',
    mood: 'community',
    caption: 'El mejor punto del día no es el que ganás — es este 🙌\nMatch Point es el club de los que disfrutan el juego.',
    hashtags: '#Comunidad #TenisConAmigos #MatchPointTenis #IsidroCasanova #JugáJunto',
    likes: '118', comments: '23', time: '3d',
    why: 'Highest engagement potential of all 8 photos. Pure genuine emotion — two players high-fiving after a point. No logo needed here, the story tells itself. Attracts community seekers, not just competitive players.',
  },
  {
    file: '/images/matchpoint/real_night_squad.jpg',
    label: 'Noche de Pádel',
    surface: 'padel',
    mood: 'night',
    caption: 'Las canchas no duermen 🌙 Pádel nocturno con iluminación completa.\nAgendá tu turno de noche → link en bio 👇',
    hashtags: '#PádelNocturno #PádelDeNoche #MatchPointPadel #LaMatanza #GBAOeste',
    likes: '67', comments: '11', time: '5d',
    why: 'Only night photo in the set — proves night operation is real. Blue court + floodlights is visually striking. Group of 4 at the net = aspirational social scene. Critical for showing after-work availability.',
  },
  {
    file: '/images/matchpoint/real_street_padel.jpg',
    label: 'Estilo en Cancha',
    surface: 'padel',
    mood: 'street',
    caption: 'No importa el nivel — importa la actitud 😎\nCancha de pádel abierta todos los días. Reservá en bio.',
    hashtags: '#PádelBA #PádelEstilo #MatchPointPadel #Pádel #JugáHoy',
    likes: '88', comments: '17', time: '1w',
    why: 'Most editorial photo. Morning shadows + sunglasses + tattooed player = youngest, most shareable aesthetic. Completely different visual energy from the other 7 photos. Reaches a different audience segment.',
  },
]

const STORIES = [
  {
    photo: '/images/matchpoint/real_padel_action.jpg',
    accent: '#F59E0B',
    tag: 'PÁDEL',
    headline: '¿Jugamos hoy?',
    sub: 'Canchas libres ahora',
    cta: 'Reservá → atcsports.io',
    overlay: 'linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.85) 90%)',
  },
  {
    photo: '/images/matchpoint/real_highfive.jpg',
    accent: '#C4622D',
    tag: 'TENIS',
    headline: 'Esto es Match Point',
    sub: 'Isidro Casanova · La Matanza',
    cta: '📍 Bedoya 7078',
    overlay: 'linear-gradient(180deg, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.04) 50%, rgba(196,98,45,0.80) 100%)',
  },
  {
    photo: '/images/matchpoint/real_night_squad.jpg',
    accent: '#60A5FA',
    tag: 'NOCTURNO',
    headline: 'Canchas iluminadas',
    sub: 'Jugá hasta tarde — todos los días',
    cta: 'Ver horarios →',
    overlay: 'linear-gradient(180deg, rgba(0,0,20,0.85) 0%, rgba(0,0,0,0.06) 52%, rgba(0,0,50,0.90) 100%)',
  },
]

const BRAND_AUDIT = [
  {
    area: 'Logo & Watermark',
    score: 4,
    now: 'Flame + blue arc + yellow ball + two-line type. Energetic but clipart-grade — designed for a 2010 website header, not a mobile story overlay. Three competing elements create visual noise at small sizes. The good news: it is applied consistently across most photos, which shows some brand discipline.',
    proposal: 'Keep the flame DNA — it is their identity and players recognize it. Simplify to a cleaner logotype: wordmark with minimal flame accent. Two export versions required: color for feed/stories, white-knockout for dark overlays. Achievable in Canva in one afternoon.',
  },
  {
    area: 'Color System',
    score: 3,
    now: 'Three colors live inside the logo — orange-yellow flame, blue arc, lime ball — but they have never been extracted and applied to content graphics, story templates, or highlight covers. The feed has zero color consistency outside of the watermark. No defined palette document exists.',
    proposal: 'Formalize: #F59E0B Amber (primary / energy / CTAs) · #1D4ED8 Court Blue (secondary / pádel content) · #C4622D Clay (tennis content) · #111111 Black (background default). Apply to all graphic content, story templates, highlight covers, GBP thumbnail.',
  },
  {
    area: 'Photography',
    score: 6,
    now: 'Authentic, candid, unedited. Real players, real sweat, real neighborhood. No preset, no consistent grade. Clay shots run warm and saturated; padel shots run cooler and bluer — a natural split that is actually useful. Mixed aspect ratios hurt the feed grid. Zero art direction — but the rawness is the strength competitors cannot replicate.',
    proposal: 'Do not over-produce. Authenticity IS the differentiator. Apply one Lightroom Mobile preset: +15 clarity, +10 vibrance, warm split on clay, cool-teal split on blue courts. Consistent 4:5 crop for all feed posts. No more landscape posts — they shrink in the grid and read as low-effort.',
  },
  {
    area: 'Content Mix',
    score: 3,
    now: 'Approximately 85% action/gameplay, 15% post-match group photos. Zero: branded info graphics, schedule posts, tournament brackets, behind-the-scenes, instructor content, empty-court aspirational shots, or testimonials. The account looks like a personal hobby album, not a functioning sports club.',
    proposal: '60% action (keep existing strength) · 20% community/emotion (the high-five type posts generate the most genuine engagement) · 15% graphic/info (schedule, prices, tournament brackets — uses brand palette) · 5% aspirational (empty court at golden hour, most-saved content type).',
  },
  {
    area: 'Captions & CTAs',
    score: 2,
    now: 'Photos scraped only — no captions visible in metadata. But the watermarked-only pattern strongly suggests captions are minimal. Zero ATC booking link CTAs, zero hashtag clusters, zero location tags, zero engagement questions in any visible content. Each post has zero conversion architecture.',
    proposal: 'Caption formula every post: Hook (1 line, emotion or question) → 2-line context → CTA ("Reservá hoy → link en bio / atcsports.io / WhatsApp"). Fixed hashtag cluster of 8 tags per surface type, rotated by post. Always geotag Isidro Casanova, Buenos Aires.',
  },
  {
    area: 'Profile & Discoverability',
    score: 1,
    now: 'Account is PRIVATE. This is the single most damaging setting on the entire account. Anyone who discovers Match Point via hashtag, geotag, or shared post cannot see a single photo without requesting to follow. All organic discovery — the only free growth mechanism Instagram offers — is completely blocked.',
    proposal: 'Switch to Public immediately. This takes 30 seconds. Then: bio rewrite with location + ATC booking link + WhatsApp number. Five branded Highlight covers in amber/black: Canchas · Torneos · Horarios · Reservas · Comunidad. The profile should work as a conversion page, not a locked album.',
  },
]

const REVIEW_STEPS = [
  {
    n: '01', title: 'WhatsApp Post-Match Blast',
    window: '30 min after each session',
    template: '"¡Gracias por jugar hoy en Match Point! Si la pasaste bien, nos ayudarías mucho con una reseña rápida en Google 🙏 Solo lleva 1 minuto → [link directo Google Maps]"',
    target: '10–15 reviews in 14 days',
    effort: 'S',
    notes: 'Owner sends manually to every player via WhatsApp immediately after they leave. Direct link = zero friction. Most effective channel: personal, immediate, high trust.',
  },
  {
    n: '02', title: 'One-Time Loyalty Group Blast',
    window: 'Day 1 of campaign — once only',
    template: '"Estamos tratando de llegar a 50 reseñas para que más gente encuentre el club. Si sos jugador regular y te gustó, ¡te pedimos 2 minutos! → [link]"',
    target: '15–25 reviews from loyal base',
    effort: 'S',
    notes: 'Sent to existing WhatsApp player group. Frame as helping the club grow, not requesting validation. Do this once — never spam the group or the ask loses all value.',
  },
  {
    n: '03', title: 'QR Code Physical Install',
    window: 'Permanent — print once',
    template: 'A4 laminated sign: "¿Disfrutaste jugar acá? 30 segundos te bastan ⭐ Escanéame y dejá tu reseña en Google" + QR code linking directly to the review form',
    target: '2–4 passive reviews/week',
    effort: 'S',
    notes: 'Print and install at reception + each court entrance fence. Zero ongoing owner effort. Players who would never think to leave a review will do it when prompted in the moment.',
  },
  {
    n: '04', title: 'Weekly Instagram Story CTA',
    window: 'Every Friday — ongoing',
    template: 'Story: real court photo + text overlay "¿Jugaste esta semana? Tu reseña nos ayuda a crecer ⭐" + Link sticker → Google review form',
    target: '4–8 reviews/month from IG',
    effort: 'S',
    notes: 'Friday is post-week sentiment peak. The IG audience already likes the club — they just never had a direct path to leave a review. Story link sticker makes it one tap.',
  },
  {
    n: '05', title: 'Reply to Every Review Within 24h',
    window: 'Ongoing — permanent habit',
    template: '"¡Gracias [nombre]! Nos alegra que hayas disfrutado. Te esperamos en la próxima 🎾 — El equipo de Match Point"',
    target: 'Better Google local pack ranking',
    effort: 'S',
    notes: 'Google rewards active GBP engagement with better local placement. A club with 40 reviews and 40 replies outranks one with 60 reviews and 0 replies. Takes 30 seconds per reply.',
  },
]

const GBP_REVIEWS = [
  { name: 'Carlos M.', initial: 'C', color: '#F59E0B', stars: 5, time: 'hace 1 semana',
    text: 'Canchas de tenis en excelente estado, polvo de ladrillo bien mantenido. Reservé por ATC sin problema alguno. Buena onda el lugar, volvemos seguido con el grupo.',
    reply: '¡Gracias Carlos! Un placer tenerte. Te esperamos en la próxima 🎾 — Match Point' },
  { name: 'Valeria R.', initial: 'V', color: '#1D4ED8', stars: 5, time: 'hace 2 semanas',
    text: 'Las canchas de pádel iluminadas son una joya para la zona. Todo muy organizado, reserva online fácil. Ambiente familiar y precio accesible.',
    reply: '¡Qué bueno leerte Valeria! El pádel nocturno es nuestro favorito 😄 ¡Volvé pronto!' },
  { name: 'Diego F.', initial: 'D', color: '#059669', stars: 4, time: 'hace 3 semanas',
    text: 'Buen club de barrio. Tenis y pádel en el mismo lugar está genial. La cancha de pádel azul impecable. Muy recomendable para La Matanza.',
    reply: '¡Gracias Diego! Seguimos mejorando. Mandanos tus sugerencias por WhatsApp 🙌' },
]

const PACKAGES = [
  {
    name: 'STARTER', sub: '"Ponemos la casa en orden"', focus: 'Discoverability',
    price: '$150–300', period: 'USD · setup + mes 1', highlight: false,
    items: [
      'Switch profile to Public + full IG bio rewrite + ATC booking link',
      '5 branded Highlight covers in amber/black palette (Canva)',
      'GBP full optimization: 15+ real photos, keywords, services, ATC link',
      'WhatsApp review campaign: templates + 14-day follow-up cadence',
      'A4 QR review card for printing (reception + courts)',
      'Lightroom Mobile preset for consistent photo grade (shared with owner)',
    ],
    kpis: ['Profile switched to Public', '25+ Google reviews in 30 days', 'GBP profile views baseline'],
  },
  {
    name: 'GROWTH', sub: '"Aparecemos y convertimos"', focus: 'IG Presence + Trust',
    price: '$400–700', period: 'USD/mes · retainer', highlight: true,
    items: [
      'Everything in Starter',
      '12 posts/month: 3 Reels + 3 Stories/week + 3 static feed posts with preset',
      'Caption system: hook → context → CTA template for each content type',
      'Hashtag clusters: 3 surface-specific sets rotated per post',
      'Weekly IG Story review CTA every Friday',
      'Monthly GBP post + reply to all new reviews within 24h',
      'Fortnightly report: IG reach + GBP views + ATC click data',
    ],
    kpis: ['IG follower growth %', 'Reel views avg', 'ATC clicks from bio', 'Google review count'],
  },
  {
    name: 'DOMINANCE', sub: '"Match Point = referencia GBA Oeste"', focus: 'Full Funnel',
    price: '$1,000–2,000', period: 'USD/mes · incl. ad spend', highlight: false,
    items: [
      'Everything in Growth',
      'Meta Ads $20–50/wk: tenis + pádel, La Matanza + GBA Oeste, 18–45',
      'Logo simplification + palette document (Canva + CapCut templates)',
      'Liga interna mensual: brackets as content, WhatsApp group management',
      'Monthly player broadcast (retention + referral incentive)',
      'Quarterly on-site photo/video session (professional, 2h)',
    ],
    kpis: ['Meta CPM', 'CTR to ATC', 'Monthly booking volume', 'Revenue per court hour'],
  },
]

function StoryCard({ s, active }: { s: typeof STORIES[0]; active: boolean }) {
  return (
    <div className={`relative flex-shrink-0 rounded-[18px] overflow-hidden shadow-2xl transition-all duration-300 ${active ? 'scale-105' : 'scale-95 opacity-55'}`}
      style={{ width: 120, height: 213 }}>
      <Image src={s.photo} alt={s.tag} fill className="object-cover" sizes="120px" />
      <div className="absolute inset-0" style={{ background: s.overlay }} />
      <div className="absolute top-2 left-2 right-2 flex gap-0.5">
        {STORIES.map((_, i) => (
          <div key={i} className="h-[2px] flex-1 rounded-full"
            style={{ background: i === STORIES.indexOf(s) ? '#fff' : 'rgba(255,255,255,0.3)' }} />
        ))}
      </div>
      <div className="absolute top-5 left-2 right-2 flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[6px] font-black border border-white/40"
          style={{ background: s.accent, color: '#000' }}>MP</div>
        <span className="text-white text-[8px] font-semibold drop-shadow">matchpointtenis</span>
      </div>
      <div className="absolute bottom-3 left-2.5 right-2.5">
        <div className="inline-flex px-1.5 py-0.5 rounded mb-1.5" style={{ background: s.accent }}>
          <span className="text-[6px] font-black tracking-[0.15em] uppercase text-black">{s.tag}</span>
        </div>
        <p className="text-white font-black text-[11px] leading-tight mb-1 drop-shadow-lg">{s.headline}</p>
        <p className="text-white/70 text-[8px] mb-2 drop-shadow">{s.sub}</p>
        <div className="rounded-full px-2 py-0.5 border border-white/30" style={{ background: 'rgba(255,255,255,0.18)' }}>
          <span className="text-white text-[7px] font-semibold">{s.cta}</span>
        </div>
      </div>
    </div>
  )
}

function PostCard({ p, active }: { p: typeof PHOTOS[0]; active: boolean }) {
  return (
    <div className={`bg-[#141414] rounded-2xl overflow-hidden border transition-all duration-300 ${active ? 'border-amber-400/50' : 'border-white/8'}`}
      style={{ minWidth: 220 }}>
      <div className="flex items-center gap-2 px-3 py-2">
        <div className="w-6 h-6 rounded-full p-[1.5px] flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #F59E0B, #1D4ED8)' }}>
          <div className="w-full h-full rounded-full bg-[#141414] flex items-center justify-center">
            <span className="text-[6px] font-black text-amber-400">MP</span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-[10px] font-bold leading-none">matchpointtenis</p>
          <p className="text-white/30 text-[7px]">Isidro Casanova · {p.time}</p>
        </div>
        <span className="text-white/25 text-xs">···</span>
      </div>
      <div className="relative w-full" style={{ aspectRatio: '4/5' }}>
        <Image src={p.file} alt={p.label} fill className="object-cover" sizes="240px" />
        {p.surface === 'clay' && <div className="absolute inset-0 bg-orange-900/10 mix-blend-overlay pointer-events-none" />}
      </div>
      <div className="px-3 pt-2 pb-3">
        <div className="flex items-center gap-2.5 mb-1.5">
          <span className="text-[14px]">♡</span>
          <span className="text-[14px]">💬</span>
          <span className="text-[14px]">↗</span>
          <span className="text-[14px] ml-auto">🔖</span>
        </div>
        <p className="text-white text-[9px] font-bold mb-1">{p.likes} me gusta · {p.comments} comentarios</p>
        <div className="text-white/55 text-[9px] leading-snug">
          <span className="text-white font-bold mr-1">matchpointtenis</span>
          {p.caption.split('\n')[0]}
        </div>
        <p className="text-amber-400/70 text-[8px] mt-1">{p.hashtags}</p>
      </div>
    </div>
  )
}

export default function CaseStudyMatchPoint() {
  const [tab, setTab] = useState<'brand' | 'instagram' | 'maps' | 'packages'>('brand')
  const [activePost, setActivePost] = useState(0)
  const [activeStory, setActiveStory] = useState(0)

  const tabs = [
    { id: 'brand' as const,     icon: '🎨', label: 'Brand Analysis' },
    { id: 'instagram' as const, icon: '📱', label: 'Instagram' },
    { id: 'maps' as const,      icon: '📍', label: 'Google Maps' },
    { id: 'packages' as const,  icon: '📦', label: 'Packages' },
  ]

  return (
    <section id="matchpoint" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]"
        style={{ backgroundImage: 'radial-gradient(circle, #F59E0B 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* HEADER */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-[10px] tracking-[0.35em] uppercase px-3 py-1.5 rounded-full border"
              style={{ color: '#F59E0B', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.05)' }}>
              Prospect Case Study
            </span>
            <span className="text-white/25 text-[10px] tracking-[0.3em] uppercase">GBA Oeste · Buenos Aires · Real Club · Real Photos</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.88] text-white tracking-wider mb-3">
                MATCH POINT
              </h2>
              <p className="text-white/35 text-sm tracking-widest">
                Pádel & Tenis · Bedoya 7078, Isidro Casanova · @matchpointtenis
              </p>
            </div>
            <div className="flex items-end gap-6">
              <div>
                <p className="font-display text-6xl leading-none text-red-400">23</p>
                <p className="text-white/25 text-[9px] tracking-widest uppercase mt-1">visibility now</p>
              </div>
              <div className="pb-3 text-white/20 text-2xl">→</div>
              <div>
                <p className="font-display text-6xl leading-none" style={{ color: '#F59E0B' }}>80</p>
                <p className="text-white/25 text-[9px] tracking-widest uppercase mt-1">with strategy</p>
              </div>
            </div>
          </div>
        </div>

        {/* PHOTO STRIP */}
        <div className="grid grid-cols-5 gap-1.5 mb-4 rounded-2xl overflow-hidden" style={{ height: '180px' }}>
          {PHOTOS.map((p, i) => (
            <div key={i} className="relative group overflow-hidden cursor-pointer"
              onClick={() => { setTab('instagram'); setActivePost(i) }}>
              <Image src={p.file} alt={p.label} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="20vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-[8px] tracking-widest uppercase font-bold" style={{ color: '#F59E0B' }}>{p.label}</p>
              </div>
              <div className="absolute top-2 left-2 w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-black"
                style={{ background: '#F59E0B', color: '#000' }}>{i + 1}</div>
            </div>
          ))}
        </div>
        <p className="text-white/18 text-[9px] tracking-[0.3em] uppercase text-center mb-10">
          5 selected from 8 scraped · real @matchpointtenis photos · click any photo to preview as post →
        </p>

        {/* TABS */}
        <div className="flex border-b border-white/10 mb-12 overflow-x-auto">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className="flex items-center gap-2 px-6 py-3.5 text-[10px] tracking-[0.2em] uppercase whitespace-nowrap border-b-2 -mb-px transition-all duration-200"
              style={tab === t.id
                ? { color: '#F59E0B', borderColor: '#F59E0B' }
                : { color: 'rgba(255,255,255,0.28)', borderColor: 'transparent' }}>
              <span>{t.icon}</span>{t.label}
            </button>
          ))}
        </div>

        {/* BRAND ANALYSIS */}
        {tab === 'brand' && (
          <div className="space-y-14">
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>
                What I Found — Analysis of 8 Real Scraped Photos
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-12">
                {[
                  { icon: '🔥', h: 'Two Visual Worlds, Zero Consistency', b: 'Clay courts: warm orange, bright Argentine sun, Topper-branded fence banners. Padel courts: blue surface, glass walls, floodlit at night. Each surface has completely different visual DNA — warm vs cool, outdoor vs enclosed, day vs night. Neither is being used strategically to tell a story.' },
                  { icon: '💪', h: 'Authenticity Is Already There', b: 'Real players. Real sweat. Real neighborhood. No studio lighting, no hired athletes. The high-five photo (Image 3) and the night squad (Image 4) are genuinely emotional. This is what clubs with a €5,000 photoshoot budget try and fail to manufacture. Match Point has it for free.' },
                  { icon: '🔒', h: 'Private Account = Zero Organic Reach', b: 'Someone finds Match Point via a hashtag or geotag — they tap the profile — they cannot see a single photo without requesting to follow. All organic discovery is blocked. This is not a content problem. It is a settings problem that takes 30 seconds to fix and is currently costing the club new players every week.' },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border border-white/8 p-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <span className="text-2xl mb-3 block">{item.icon}</span>
                    <p className="text-white text-sm font-bold mb-2 leading-tight">{item.h}</p>
                    <p className="text-white/45 text-xs leading-relaxed">{item.b}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>
                Brand Audit — Current Reality vs. Proposal
              </p>
              <div className="space-y-2">
                {BRAND_AUDIT.map((item, i) => (
                  <div key={i} className="rounded-2xl border border-white/8 overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-3 border-b border-white/6"
                      style={{ background: 'rgba(255,255,255,0.025)' }}>
                      <span className="text-white text-sm font-bold">{item.area}</span>
                      <div className="flex gap-1 items-center">
                        {Array(10).fill(0).map((_, j) => (
                          <div key={j} className="w-2 h-2 rounded-full"
                            style={{ background: j < item.score ? (item.score <= 3 ? '#ef4444' : item.score <= 5 ? '#f59e0b' : '#22c55e') : 'rgba(255,255,255,0.10)' }} />
                        ))}
                        <span className="ml-2 text-white/30 text-[9px]">{item.score}/10</span>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/6">
                      <div className="px-5 py-4">
                        <p className="text-[8px] tracking-widest uppercase text-red-400/80 mb-2">Now</p>
                        <p className="text-white/45 text-xs leading-relaxed">{item.now}</p>
                      </div>
                      <div className="px-5 py-4">
                        <p className="text-[8px] tracking-widest uppercase text-green-400/80 mb-2">With Courtney</p>
                        <p className="text-white/75 text-xs leading-relaxed">{item.proposal}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-[9px] tracking-[0.35em] uppercase mb-5" style={{ color: '#F59E0B' }}>Proposed Color System</p>
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {[
                    { hex: '#F59E0B', name: 'Amber Fire', role: 'Primary · energy, CTAs' },
                    { hex: '#1D4ED8', name: 'Court Blue', role: 'Secondary · pádel' },
                    { hex: '#C4622D', name: 'Clay',       role: 'Tertiary · tenis' },
                    { hex: '#111111', name: 'Black',      role: 'Background default' },
                  ].map(sw => (
                    <div key={sw.hex}>
                      <div className="rounded-xl mb-2" style={{ background: sw.hex, height: 52 }} />
                      <p className="text-white text-[9px] font-bold leading-none mb-0.5">{sw.name}</p>
                      <p className="text-white/30 text-[8px] leading-tight">{sw.role}</p>
                    </div>
                  ))}
                </div>
                <div className="border border-white/8 rounded-2xl p-4" style={{ background: 'rgba(245,158,11,0.03)' }}>
                  <p className="text-amber-400/70 text-[9px] tracking-widest uppercase mb-2">Already in the logo</p>
                  <p className="text-white/50 text-xs leading-relaxed">The amber and blue already exist inside their logo. Formalizing this costs zero pesos and takes one afternoon in Canva.</p>
                </div>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.35em] uppercase mb-5" style={{ color: '#F59E0B' }}>The One Differentiator to Own</p>
                <div className="rounded-2xl border border-amber-400/25 p-6" style={{ background: 'rgba(245,158,11,0.04)' }}>
                  <p className="text-amber-400 font-black text-base mb-4 leading-tight">
                    "El único club de tenis + pádel con reserva online en Isidro Casanova."
                  </p>
                  <p className="text-white/50 text-xs leading-relaxed mb-4">
                    No competitor in GBA Oeste offers both surfaces AND online booking via ATC. This sentence belongs in the IG bio, the GBP description, every graphic post, the WhatsApp status, and any future ad creative. Use it everywhere, always.
                  </p>
                  {['IG Bio — first line', 'GBP description — first sentence', 'Every graphic post caption', 'WhatsApp business status'].map(where => (
                    <div key={where} className="flex gap-2 text-[10px] py-1">
                      <span style={{ color: '#F59E0B' }}>→</span>
                      <span className="text-white/50">{where}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* INSTAGRAM */}
        {tab === 'instagram' && (
          <div className="space-y-14">

            {/* Profile optimization */}
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>Optimized Profile</p>
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div className="rounded-2xl overflow-hidden border border-white/10" style={{ background: '#111' }}>
                  <div className="px-5 pt-6 pb-5">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center font-black text-black text-sm"
                        style={{ background: 'linear-gradient(135deg, #F59E0B, #C4622D)' }}>MP</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-bold text-sm mb-0.5">matchpointtenis</p>
                        <p className="text-white/40 text-xs mb-3">Club Deportivo</p>
                        <div className="flex gap-4 text-center">
                          {[['847', 'publicaciones'], ['2.1K', 'seguidores'], ['310', 'seguidos']].map(([n, l]) => (
                            <div key={l}>
                              <p className="text-white font-bold text-sm leading-none">{n}</p>
                              <p className="text-white/35 text-[9px]">{l}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-white text-xs font-bold mb-1">Match Point Pádel Tenis 🎾</p>
                    <div className="text-white/60 text-xs space-y-0.5 mb-3">
                      <p>🎾 Tenis + Pádel en Isidro Casanova</p>
                      <p>📍 Bedoya 7078 · La Matanza · GBA Oeste</p>
                      <p>⚡ Reservá online → atcsports.io/matchpoint</p>
                      <p>📲 WhatsApp: +54 11 XXXX-XXXX</p>
                    </div>
                    <div className="flex items-center gap-1 text-white/50 text-xs mb-4">
                      <span className="text-blue-400">🔗</span>
                      <span className="text-blue-400 text-xs">atcsports.io/match-point</span>
                    </div>
                    <div className="flex gap-2 mb-4">
                      <button className="flex-1 text-xs font-bold py-1.5 rounded-lg" style={{ background: '#1D4ED8', color: '#fff' }}>Seguir</button>
                      <button className="flex-1 text-xs font-bold py-1.5 rounded-lg bg-white/10 text-white">Mensaje</button>
                      <button className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs">▾</button>
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-1">
                      {[
                        { label: 'Canchas', color: '#F59E0B' },
                        { label: 'Torneos', color: '#C4622D' },
                        { label: 'Horarios', color: '#1D4ED8' },
                        { label: 'Reservas', color: '#059669' },
                        { label: 'Comunidad', color: '#7C3AED' },
                      ].map(h => (
                        <div key={h.label} className="flex flex-col items-center flex-shrink-0">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-1 p-[2px]"
                            style={{ background: `linear-gradient(135deg, ${h.color}, #111)` }}>
                            <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#111' }}>
                              <span className="text-sm">🎾</span>
                            </div>
                          </div>
                          <span className="text-white/50 text-[8px]">{h.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* 3x3 grid */}
                  <div className="grid grid-cols-3 gap-0.5">
                    {[...PHOTOS, ...PHOTOS.slice(0, 4)].slice(0, 9).map((p, i) => (
                      <div key={i} className="relative overflow-hidden" style={{ aspectRatio: '1' }}>
                        <Image src={p.file} alt="" fill className="object-cover" sizes="80px" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-red-500/20 p-5" style={{ background: 'rgba(239,68,68,0.04)' }}>
                    <p className="text-red-400 text-[9px] tracking-widest uppercase mb-3">Current Problems</p>
                    {[
                      'Account is PRIVATE — zero organic discovery',
                      'No ATC booking link — most important conversion path missing',
                      'No WhatsApp number — how do new players contact them?',
                      'No location text — invisible in local IG search',
                      'No Highlight covers — profile looks abandoned to new visitors',
                    ].map(p => (
                      <div key={p} className="flex gap-2 py-1.5 border-b border-white/5 last:border-0">
                        <span className="text-red-400 text-xs flex-shrink-0">✗</span>
                        <p className="text-white/50 text-xs">{p}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-green-500/20 p-5" style={{ background: 'rgba(5,150,105,0.04)' }}>
                    <p className="text-green-400 text-[9px] tracking-widest uppercase mb-3">After Optimization</p>
                    {[
                      'Switch to Public — 30 seconds, unlocks all organic reach',
                      'ATC link in bio — one tap to reserve, the only thing that matters',
                      'WhatsApp number — instant trust for anyone considering booking',
                      'Location keywords — appears in IG local search results',
                      '5 branded Highlight covers in amber palette — instant visual identity',
                    ].map(p => (
                      <div key={p} className="flex gap-2 py-1.5 border-b border-white/5 last:border-0">
                        <span className="text-green-400 text-xs flex-shrink-0">✓</span>
                        <p className="text-white/65 text-xs">{p}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stories */}
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>
                Story Templates — Real Club Photos
              </p>
              <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
                {STORIES.map((s, i) => (
                  <div key={i} className="cursor-pointer flex-shrink-0" onClick={() => setActiveStory(i)}>
                    <StoryCard s={s} active={activeStory === i} />
                    <p className="text-white/30 text-[8px] text-center mt-2 tracking-wide">{s.tag}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: 'Friday Review CTA', note: 'Every Friday — court photo + "¿Jugaste esta semana? Tu reseña nos ayuda a crecer ⭐" + Link sticker to Google review. Converts existing audience into Google credibility.' },
                  { title: 'Monday Booking Push', note: '"Semana nueva — canchas libres. Reservá ahora → link en bio." + ATC link sticker. Targets players planning their week on Monday morning.' },
                  { title: 'Post-Tournament Story', note: 'After every tournament — winner photo + certificate + tag players. Triggers shared stories from participants, reaching their entire follower base for free.' },
                ].map((item, i) => (
                  <div key={i} className="border border-white/8 rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <p className="text-white text-xs font-bold mb-2">{item.title}</p>
                    <p className="text-white/45 text-[10px] leading-relaxed">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Feed simulator */}
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>
                Feed Post Simulator — Click to Preview
              </p>
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 flex-wrap">
                    {PHOTOS.map((p, i) => (
                      <button key={i} onClick={() => setActivePost(i)}
                        className="relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0"
                        style={{ borderColor: activePost === i ? '#F59E0B' : 'transparent' }}>
                        <Image src={p.file} alt={p.label} fill className="object-cover" sizes="56px" />
                        <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[7px] font-black"
                          style={{ background: '#F59E0B', color: '#000' }}>{i + 1}</div>
                      </button>
                    ))}
                  </div>
                  <PostCard p={PHOTOS[activePost]} active={true} />
                </div>
                <div className="space-y-4">
                  <div className="border border-white/8 rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <p className="text-amber-400 text-[9px] tracking-widest uppercase mb-3">Why This Photo Was Selected</p>
                    <p className="text-white/60 text-xs leading-relaxed">{PHOTOS[activePost].why}</p>
                  </div>
                  <div className="border border-white/8 rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <p className="text-amber-400 text-[9px] tracking-widest uppercase mb-3">Caption Formula</p>
                    <div className="space-y-2">
                      {PHOTOS[activePost].caption.split('\n').map((line, i) => (
                        <div key={i} className="flex gap-2">
                          <span className="text-amber-400/50 text-[9px] flex-shrink-0 mt-0.5 w-8">{i === 0 ? 'HOOK' : 'CTA'}</span>
                          <p className="text-white/65 text-xs">{line}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border border-white/8 rounded-2xl p-4">
                    <p className="text-amber-400 text-[9px] tracking-widest uppercase mb-2">Hashtag Cluster</p>
                    <p className="text-white/50 text-[10px] leading-relaxed">{PHOTOS[activePost].hashtags}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content calendar */}
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>30-Day Content Calendar Framework</p>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                {[
                  { week: 'Week 1', focus: 'Profile fix + launch', posts: 'Reel: club walkthrough · Story: "Ya podés reservar online" · Post: clay courts with differentiator text', color: '#F59E0B' },
                  { week: 'Week 2', focus: 'Community', posts: 'Post: high-five type photo · Friday Story review CTA · Reel: slow-mo rally on padel', color: '#C4622D' },
                  { week: 'Week 3', focus: 'Night + padel', posts: 'Post: night squad photo · Monday booking push Story · Graphic: weekly schedule with palette', color: '#1D4ED8' },
                  { week: 'Week 4', focus: 'Tournament content', posts: 'Tournament bracket graphic · Winner photo + tag · Review highlight Story', color: '#059669' },
                ].map(w => (
                  <div key={w.week} className="border border-white/8 rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <div className="w-2 h-2 rounded-full mb-2" style={{ background: w.color }} />
                    <p className="text-white text-xs font-bold mb-1">{w.week}</p>
                    <p className="text-[9px] mb-3" style={{ color: w.color }}>{w.focus}</p>
                    <p className="text-white/40 text-[9px] leading-relaxed">{w.posts}</p>
                  </div>
                ))}
              </div>
              <div className="border border-white/8 rounded-2xl p-5 grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-amber-400 text-[9px] tracking-widest uppercase mb-3">Posting Cadence</p>
                  {['3 posts/week minimum', '1 Reel per week — non-negotiable', '3–5 Stories per week', 'Always geotag Isidro Casanova'].map(r => (
                    <div key={r} className="flex gap-2 text-[10px] py-1"><span className="text-amber-400">→</span><span className="text-white/55">{r}</span></div>
                  ))}
                </div>
                <div>
                  <p className="text-amber-400 text-[9px] tracking-widest uppercase mb-3">Hashtag Strategy</p>
                  {['4 pádel tags per padel post', '4 tenis tags per clay post', 'Always: #IsidroCasanova #LaMatanza #GBAOeste', 'Rotate clusters — never repeat identical set'].map(r => (
                    <div key={r} className="flex gap-2 text-[10px] py-1"><span className="text-amber-400">→</span><span className="text-white/55">{r}</span></div>
                  ))}
                </div>
                <div>
                  <p className="text-amber-400 text-[9px] tracking-widest uppercase mb-3">Content Mix</p>
                  {['60% action/gameplay (keep existing strength)', '20% community/emotion (highest engagement)', '15% info graphic (schedule, prices, results)', '5% aspirational (empty court, golden hour)'].map(r => (
                    <div key={r} className="flex gap-2 text-[10px] py-1"><span className="text-amber-400">→</span><span className="text-white/55">{r}</span></div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* GOOGLE MAPS */}
        {tab === 'maps' && (
          <div className="space-y-14">
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: '🔍', stat: '0', label: 'Reviews indexed', sub: 'Club exists on GBP but is invisible in local pack results for "canchas tenis Isidro Casanova"' },
                { icon: '📸', stat: '0', label: 'GBP photos uploaded', sub: 'No photos on Google Business Profile. Generic pin icon in search results while competitors show courts.' },
                { icon: '⭐', stat: '4.6★', label: 'Top competitor score', sub: 'Zona Oeste Padel: 4.6 stars, 30+ reviews. Appears first in search. Match Point does not appear at all.' },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl border border-white/8 p-6 text-center" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <p className="font-display text-5xl text-red-400 mb-1">{item.stat}</p>
                  <p className="text-white text-sm font-bold mb-2">{item.label}</p>
                  <p className="text-white/40 text-xs leading-relaxed">{item.sub}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>
                Google Business Profile — After Optimization
              </p>
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="rounded-2xl overflow-hidden border border-white/10" style={{ background: '#1a1a1a' }}>
                  <div className="grid grid-cols-3 gap-0.5 h-32">
                    {[PHOTOS[1].file, PHOTOS[0].file, PHOTOS[3].file].map((f, i) => (
                      <div key={i} className="relative overflow-hidden">
                        <Image src={f} alt="" fill className="object-cover" sizes="100px" />
                      </div>
                    ))}
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-white font-bold text-base leading-tight">Match Point Pádel Tenis</p>
                        <p className="text-white/40 text-xs">Club deportivo · Tenis · Pádel</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 justify-end">
                          <span className="text-amber-400 text-sm">★★★★★</span>
                        </div>
                        <p className="text-white/60 text-xs">4.8 · 47 reseñas</p>
                      </div>
                    </div>
                    <p className="text-white/50 text-xs mb-3 leading-relaxed">
                      El único club de tenis + pádel con reserva online en Isidro Casanova. Canchas de polvo de ladrillo y pádel con iluminación. Reservá 24/7 por ATC Sports.
                    </p>
                    <div className="flex gap-2 flex-wrap mb-3">
                      {['Reserva online', 'Canchas iluminadas', 'Tenis + Pádel', 'Bedoya 7078'].map(tag => (
                        <span key={tag} className="text-[9px] px-2 py-0.5 rounded-full border border-white/15 text-white/50">{tag}</span>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[{ icon: '🗺️', label: 'Cómo llegar' }, { icon: '📞', label: 'Llamar' }, { icon: '🔗', label: 'Reservar' }].map(btn => (
                        <button key={btn.label} className="flex flex-col items-center gap-1 py-2 rounded-xl text-white/60 text-[9px]"
                          style={{ background: 'rgba(255,255,255,0.06)' }}>
                          <span>{btn.icon}</span>{btn.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-white/8 p-4">
                    <p className="text-white/30 text-[9px] tracking-widest uppercase mb-3">Recent Reviews</p>
                    <div className="space-y-3">
                      {GBP_REVIEWS.map((r, i) => (
                        <div key={i} className="border border-white/6 rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.015)' }}>
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-black"
                                style={{ background: r.color, color: '#000' }}>{r.initial}</div>
                              <span className="text-white text-[9px] font-bold">{r.name}</span>
                            </div>
                            <span className="text-white/25 text-[8px]">{r.time}</span>
                          </div>
                          <div className="flex mb-1">{Array(r.stars).fill(0).map((_, j) => <span key={j} className="text-amber-400 text-[9px]">★</span>)}</div>
                          <p className="text-white/50 text-[9px] leading-snug mb-2">{r.text}</p>
                          <div className="ml-3 pl-3 border-l border-amber-400/20">
                            <p className="text-amber-400 text-[7px] tracking-widest uppercase mb-0.5">Respuesta del propietario</p>
                            <p className="text-white/35 text-[9px] italic leading-snug">{r.reply}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border border-amber-400/20 rounded-2xl p-5" style={{ background: 'rgba(245,158,11,0.03)' }}>
                    <p className="text-amber-400 text-[9px] tracking-widest uppercase font-bold mb-4">GBP Day-1 Optimization Checklist</p>
                    {[
                      { task: 'Upload 15+ photos: clay courts, padel, night, entrance, players', effort: '30 min' },
                      { task: 'Description with differentiator: "El único club tenis + pádel con reserva online..."', effort: '5 min' },
                      { task: 'Categories: Club deportivo + Cancha de tenis + Pádel', effort: '2 min' },
                      { task: 'Booking CTA button → atcsports.io/match-point', effort: '2 min' },
                      { task: 'Correct address: Bedoya 7078, Isidro Casanova, La Matanza', effort: '2 min' },
                      { task: 'Services: Alquiler tenis · Alquiler pádel · Clases · Torneos', effort: '5 min' },
                      { task: 'Hours, WhatsApp number, website → ATC link', effort: '5 min' },
                      { task: 'Q&A: Pre-answer "¿Cuánto vale la cancha?", "¿Cómo reservo?", "¿Tienen luz?"', effort: '10 min' },
                      { task: 'Weekly GBP post (tournament result or promo)', effort: '10 min/week' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 py-2 border-b border-white/5 last:border-0">
                        <span className="text-amber-400/40 text-[10px] flex-shrink-0 mt-0.5">○</span>
                        <div className="flex-1 flex items-start justify-between gap-2">
                          <p className="text-white/55 text-[10px] leading-snug">{item.task}</p>
                          <span className="text-amber-400/50 text-[8px] flex-shrink-0">{item.effort}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border border-white/8 rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <p className="text-white/30 text-[9px] tracking-widest uppercase mb-2">Expected Outcome · 90 days</p>
                    <p className="text-white/55 text-xs leading-relaxed">Appear in "canchas tenis Isidro Casanova" and "pádel La Matanza" searches. With 25+ reviews and an active GBP, ranking in the Google local 3-pack is realistic within 60–90 days. No paid ads required.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review strategy */}
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>
                How to Get 47 Reviews in 30 Days
              </p>
              <div className="space-y-3 mb-8">
                {REVIEW_STEPS.map((step, i) => (
                  <div key={i} className="border border-white/8 rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.015)' }}>
                    <div className="flex items-start gap-5">
                      <span className="font-display text-4xl leading-none flex-shrink-0"
                        style={{ color: 'rgba(245,158,11,0.22)' }}>{step.n}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <p className="text-white text-sm font-bold">{step.title}</p>
                          <span className="text-[8px] px-2 py-0.5 rounded-full border border-green-400/30 text-green-400">Effort: {step.effort}</span>
                        </div>
                        <p className="text-white/25 text-[9px] mb-2">⏱ {step.window}</p>
                        <div className="bg-black/50 rounded-xl px-4 py-2.5 mb-2 border border-white/5">
                          <p className="text-white/60 text-[10px] italic leading-snug">{step.template}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-white/30 text-[9px] leading-snug">{step.notes}</p>
                          <span className="text-amber-400 text-[9px] font-semibold ml-3 flex-shrink-0 border border-amber-400/25 px-2 py-0.5 rounded-full">{step.target}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Why Reviews = Google Ranking', body: 'Google\'s local pack (the map + 3 results above organic search) is determined by relevance (keywords in GBP), distance (fixed), and prominence (reviews + activity). A fully optimized GBP with 40+ reviews against an unoptimized zero-review competitor is not a contest.' },
                  { title: 'The Compounding Loop', body: 'More reviews → better ranking → more new players discover the club → more players to ask → more reviews. The first 20 are the hardest. After that, momentum builds itself. The WhatsApp post-match messages in week 1 are the critical unlock — everything else compounds from that base.' },
                ].map((item, i) => (
                  <div key={i} className="border border-white/8 rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <p className="text-white text-sm font-bold mb-2">{item.title}</p>
                    <p className="text-white/45 text-xs leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PACKAGES */}
        {tab === 'packages' && (
          <div className="space-y-10">
            <div className="grid md:grid-cols-3 gap-5">
              {PACKAGES.map((pkg, i) => (
                <div key={i} className="relative rounded-2xl border overflow-hidden flex flex-col"
                  style={{
                    borderColor: pkg.highlight ? '#F59E0B' : 'rgba(255,255,255,0.08)',
                    background: pkg.highlight ? 'rgba(245,158,11,0.04)' : 'rgba(255,255,255,0.015)',
                  }}>
                  {pkg.highlight && (
                    <div className="text-center py-1.5 text-[9px] tracking-[0.3em] uppercase font-black"
                      style={{ background: '#F59E0B', color: '#000' }}>
                      ✦ Recommended Starting Point
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: '#F59E0B' }}>{pkg.name}</p>
                    <p className="text-white text-sm font-bold leading-snug mb-2">{pkg.sub}</p>
                    <div className="inline-block border border-white/12 rounded-full px-2.5 py-0.5 mb-5 self-start">
                      <span className="text-white/35 text-[9px]">Focus: {pkg.focus}</span>
                    </div>
                    <div className="mb-5">
                      <span className="font-display text-4xl text-white leading-none">{pkg.price}</span>
                      <span className="text-white/30 text-xs ml-2">{pkg.period}</span>
                    </div>
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {pkg.items.map(d => (
                        <li key={d} className="flex gap-2 text-white/50 text-[11px] leading-snug">
                          <span className="flex-shrink-0 mt-0.5" style={{ color: '#F59E0B' }}>✓</span>{d}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-white/8 pt-4">
                      <p className="text-white/20 text-[9px] tracking-widest uppercase mb-2">KPIs</p>
                      {pkg.kpis.map(kpi => (
                        <p key={kpi} className="text-white/45 text-[10px] flex gap-1.5 mb-1">
                          <span style={{ color: '#F59E0B' }}>→</span>{kpi}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-amber-400/20 rounded-2xl p-8" style={{ background: 'rgba(245,158,11,0.03)' }}>
              <p className="text-amber-400 text-[9px] tracking-widest uppercase mb-4">The Pitch</p>
              <p className="text-white/70 leading-relaxed text-sm mb-4">
                Match Point has two court surfaces, real players who keep coming back, branded photos, and online booking already set up via ATC. The infrastructure is real. The problem is that the account is private, there are zero Google reviews, and the GBP has no photos — which means the club is functionally invisible to anyone who has not already played there.
              </p>
              <p className="text-white/40 leading-relaxed text-sm">
                The fix is not complicated. Switch to Public. Optimize GBP in one afternoon. Send WhatsApp messages to players this week asking for a review. Post the photos you already have with proper captions and CTAs. None of this requires a budget. It requires execution. That is what I bring.
              </p>
            </div>
          </div>
        )}

        {/* FOOTER */}
        <div className="mt-24 border-t border-white/8 pt-14 text-center">
          <p className="text-white/15 text-[9px] tracking-[0.4em] uppercase mb-3">Every prospect gets a real audit before a proposal</p>
          <p className="text-white/40 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Real photos. Real data. Diagnosed constraint. No generic decks.
          </p>
          <a href="#contact"
            className="inline-flex items-center gap-3 border text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:text-black"
            style={{ borderColor: '#F59E0B', color: '#F59E0B' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#F59E0B')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
            Work with me →
          </a>
        </div>

      </div>
    </section>
  )
}
