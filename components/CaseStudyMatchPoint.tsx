'use client'

import { useState } from 'react'
import Image from 'next/image'

// ─── DATA ────────────────────────────────────────────────────────────────────

const PHOTOS = [
  {
    file: '/images/matchpoint/real_padel_action.jpg',
    label: 'Pádel · Vidrio',
    surface: 'padel',
    caption: '¿Ves esa concentración? 👀 Así se juega en Match Point.\nCancha de pádel disponible hoy — reservá 👇',
    hashtags: '#MatchPointPadel #PádelIsidro #ReserváHoy #GBAOeste #PádelArgentina',
    likes: '74', comments: '9', time: '2h',
    why: 'Best individual action shot. Glass wall + green garden background = premium venue feel that money cannot fake. Strong diagonal energy through the body. Watermark applied bottom-right shows brand discipline.',
  },
  {
    file: '/images/matchpoint/real_clay_sprint.jpg',
    label: 'Tenis · Dobles',
    surface: 'clay',
    caption: 'Todo por el punto 🎾 Polvo de ladrillo, el deporte de los que se lo toman en serio.\nReservá tu cancha → link en bio.',
    hashtags: '#TenisLaMatanza #TenisBA #PolvoDeLadrillo #MatchPointTenis #DoblesTenis',
    likes: '91', comments: '14', time: '1d',
    why: 'Best composition of all 8 photos. Player sprinting creates motion and diagonal energy. Topper fence banner = legitimate brand sponsorship. Clay surface differentiates from blue-only padel clubs.',
  },
  {
    file: '/images/matchpoint/real_highfive.jpg',
    label: 'Comunidad',
    surface: 'clay',
    caption: 'El mejor punto del día no es el que ganás — es este 🙌\nMatch Point es el club de los que disfrutan el juego.',
    hashtags: '#Comunidad #TenisConAmigos #MatchPointTenis #IsidroCasanova #JugáJunto',
    likes: '118', comments: '23', time: '3d',
    why: 'Highest engagement potential of all 8 photos. Pure genuine emotion — two players high-fiving after a point. No logo needed here, the story tells itself. Attracts community seekers, not just competitive players.',
  },
  {
    file: '/images/matchpoint/real_night_squad.jpg',
    label: 'Noche de Pádel',
    surface: 'padel',
    caption: 'Las canchas no duermen 🌙 Pádel nocturno con iluminación completa.\nAgendá tu turno de noche → link en bio 👇',
    hashtags: '#PádelNocturno #PádelDeNoche #MatchPointPadel #LaMatanza #GBAOeste',
    likes: '67', comments: '11', time: '5d',
    why: 'Only night photo in the set — proves night operation is real. Blue court + floodlights is visually striking. Group of 4 at the net = aspirational social scene. Critical for showing after-work availability.',
  },
  {
    file: '/images/matchpoint/real_street_padel.jpg',
    label: 'Estilo en Cancha',
    surface: 'padel',
    caption: 'No importa el nivel — importa la actitud 😎\nCancha de pádel abierta todos los días. Reservá en bio.',
    hashtags: '#PádelBA #PádelEstilo #MatchPointPadel #Pádel #JugáHoy',
    likes: '88', comments: '17', time: '1w',
    why: 'Most editorial photo. Morning shadows + sunglasses + tattooed player = youngest, most shareable aesthetic. Completely different visual energy from the other photos. Reaches a different audience segment.',
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
    area: 'Logo & Watermark', score: 4,
    now: 'Flame + blue arc + yellow ball + two-line type. Energetic but clipart-grade — designed for a 2010 website header, not a mobile story overlay. Three competing elements create visual noise at small sizes. Positive: applied consistently, showing brand discipline.',
    proposal: 'Keep the flame DNA — it is their identity. Simplify to a cleaner logotype: wordmark with minimal flame accent. Two export versions: color for feed/stories, white-knockout for dark overlays. Achievable in Canva in one afternoon.',
  },
  {
    area: 'Color System', score: 3,
    now: 'Three colors live inside the logo but have never been extracted and applied to content graphics, story templates, or highlight covers. The feed has zero color consistency. No defined palette document exists.',
    proposal: 'Formalize: #F59E0B Amber (primary/CTAs) · #1D4ED8 Court Blue (pádel) · #C4622D Clay (tennis) · #111 Black (background). Apply to all graphic content, story templates, highlight covers.',
  },
  {
    area: 'Photography', score: 6,
    now: 'Authentic, candid, unedited. Real players, real sweat. No preset. Clay runs warm, padel runs cool — a natural split that is actually useful. Mixed aspect ratios hurt the feed grid. Rawness is the strength competitors cannot fake.',
    proposal: 'Do not over-produce. Apply one Lightroom Mobile preset: +15 clarity, +10 vibrance, warm split on clay, cool-teal split on blue courts. Consistent 4:5 crop for all feed posts. No more landscape posts.',
  },
  {
    area: 'Content Mix', score: 3,
    now: '~85% action/gameplay, ~15% group photos. Zero: branded graphics, schedule posts, tournament brackets, behind-the-scenes, instructor content, or testimonials. Looks like a personal hobby album, not a functioning sports club.',
    proposal: '60% action · 20% community/emotion · 15% graphic/info (schedule, prices, tournament brackets) · 5% aspirational (empty court, golden hour). Mix serves all audience types and the algorithm.',
  },
  {
    area: 'Captions & CTAs', score: 2,
    now: 'No captions visible. Zero ATC booking link CTAs, zero hashtag clusters, zero location tags, zero engagement questions. Each post has zero conversion architecture.',
    proposal: 'Caption formula: Hook (1 line, emotion or question) → 2-line context → CTA ("Reservá hoy → link en bio"). Fixed hashtag cluster of 8 tags per surface type, rotated. Always geotag Isidro Casanova.',
  },
  {
    area: 'Profile & Discoverability', score: 1,
    now: 'Account is PRIVATE. Anyone discovering Match Point via hashtag or geotag cannot see a single photo without requesting to follow. All organic discovery — the only free growth mechanism Instagram offers — is completely blocked.',
    proposal: 'Switch to Public immediately. 30 seconds. Then: bio rewrite with location + ATC booking link + WhatsApp number. Five branded Highlight covers in amber/black: Canchas · Torneos · Horarios · Reservas · Comunidad.',
  },
]

const POSTS_12 = [
  { type: 'Action — Clay', hook: 'Todo por el punto 🎾', caption: 'Todo por el punto 🎾 Polvo de ladrillo, el deporte de los que se lo toman en serio.\nReservá tu cancha → link en bio.', hashtags: '#TenisLaMatanza #TenisBA #PolvoDeLadrillo #MatchPointTenis #DoblesTenis #IsidroCasanova' },
  { type: 'Community', hook: 'El mejor punto del día no es el que ganás — es este 🙌', caption: 'El mejor punto del día no es el que ganás — es este 🙌\nMatch Point es el club de los que disfrutan el juego.\nTe esperamos. Reservá en bio.', hashtags: '#Comunidad #TenisConAmigos #MatchPointTenis #IsidroCasanova #JugáJunto' },
  { type: 'Night Padel', hook: 'Las canchas no duermen 🌙', caption: 'Las canchas no duermen 🌙 Pádel nocturno con iluminación completa.\nAgendá tu turno de noche → link en bio 👇', hashtags: '#PádelNocturno #PádelDeNoche #MatchPointPadel #LaMatanza #GBAOeste' },
  { type: 'Monday Booking', hook: 'Semana nueva — canchas libres 🎾', caption: 'Semana nueva — canchas libres 🎾\n¿Con quién jugás esta semana?\nReservá ahora antes que se llenen → link en bio', hashtags: '#PádelBA #TenisBA #MatchPointTenis #ReserváHoy #IsidroCasanova' },
  { type: 'Beginner', hook: '¿Nunca jugaste pádel? No importa 👊', caption: '¿Nunca jugaste pádel? No importa 👊\nEn Match Point empezás cuando quieras, sin drama, sin juicio.\nConsultá por clases → WhatsApp en bio.', hashtags: '#PádelPrincipiantes #AprendePádel #PádelIsidro #MatchPointPadel #PrimerVez' },
  { type: 'Booking Tutorial', hook: 'Reservar cancha en 3 pasos 📲', caption: 'Reservar cancha en 3 pasos 📲\n1️⃣ Entrá a atcsports.io/matchpoint\n2️⃣ Elegí cancha + horario\n3️⃣ Confirmás — y a jugar\n\n¿Dudas? Escribinos por WhatsApp.', hashtags: '#ReservaOnline #PádelIsidro #TenisIsidro #MatchPoint #ATCSports' },
  { type: 'Tournament Result', hook: '¡Los campeones del torneo! 🏆', caption: '¡Los campeones del torneo! 🏆\n[Nombre del ganador] se llevó el título.\nFelicitaciones y hasta el próximo 🎾\nInscripciones abiertas → link en bio.', hashtags: '#TorneoTenis #TorneoPádel #MatchPointTenis #IsidroCasanova #PádelArgentina' },
  { type: 'Review CTA', hook: '¿Jugaste esta semana? Contanos 🌟', caption: '¿Jugaste esta semana? 🌟\nTu reseña en Google nos ayuda a que más jugadores encuentren el club.\nSolo lleva 1 minuto → link en bio.\n¡Gracias!', hashtags: '#MatchPointTenis #PádelIsidro #ReseñaGoogle #ClubDeTenis #ClubDePádel' },
  { type: 'Behind the Scenes', hook: 'Cancha lista. ¿Quién viene? 🎾', caption: 'Cancha lista. ¿Quién viene? 🎾\nLa preparamos para que vos solo llegues y juegues.\nReservá tu turno → link en bio 👇', hashtags: '#MatchPointPadel #CanchaLista #TenisBA #PádelBA #IsidroCasanova' },
  { type: 'Women\'s Padel', hook: 'El pádel no tiene género — tiene actitud 💪', caption: 'El pádel no tiene género — tiene actitud 💪\nEsta semana, ellas pusieron todo en la cancha.\nVení a jugar → reservá en bio.', hashtags: '#PádelFemenino #MujeresQueJuegan #MatchPointPadel #PádelIsidro #GBAOeste' },
  { type: 'Price / Value', hook: 'Reservar una cancha nunca fue tan fácil 📲', caption: 'Reservar una cancha nunca fue tan fácil 📲\nPrecio accesible. Online. 24 horas.\nBedoya 7078 · Isidro Casanova\n→ Reservá en link en bio.', hashtags: '#PádelAccesible #AlquilerCanchas #PádelLaMatanza #TenisLaMatanza #MatchPoint' },
  { type: 'Club Identity', hook: 'Somos el club que siempre estuvo en el barrio 🔥', caption: 'Somos el club que siempre estuvo en el barrio 🔥\nTenis + Pádel en Isidro Casanova.\nBedoya 7078 — reservá online, llegá y jugá.\n\nEsto es Match Point.', hashtags: '#MatchPointTenis #ClubDeBarrio #IsidroCasanova #LaMatanza #PádelArgentina' },
]

const REELS_8 = [
  { title: 'Club Walkthrough', duration: '20s', script: 'SHOT 1 (2s): Club entrance / sign. TEXT: "Match Point · Isidro Casanova"\nSHOT 2 (3s): Slow pan across clay court. TEXT: "Tenis"\nSHOT 3 (3s): Slow pan across blue padel court. TEXT: "Pádel"\nSHOT 4 (2s): Phone showing ATC booking. TEXT: "Reservá online"\nSHOT 5 (3s): Player smiling. TEXT: "Bedoya 7078"\nEND CARD: Logo + "Reservá en link en bio"' },
  { title: 'Booking in 30 Seconds', duration: '30s', script: 'Screen recording of ATC booking on phone.\nON SCREEN: "Así se reserva una cancha en Match Point"\nStep 1: "Entrá al link en bio"\nStep 2: "Elegí cancha y horario"\nStep 3: "Confirmás — y a jugar"\nEND: Logo + "Sin llamadas. Sin complicaciones."' },
  { title: 'Night Padel Energy', duration: '15s', script: 'SHOT 1 (3s): Wide padel court at night — blue glow. No text.\nSHOT 2 (2s): Ball in motion, slow-mo smash. TEXT: "🌙 Pádel nocturno"\nSHOT 3 (3s): Group celebrating at net. No text.\nSHOT 4 (2s): "Canchas iluminadas · todos los días"\nEND: Logo + "Reservá tu turno de noche"' },
  { title: 'Before / After Beginner', duration: '25s', script: 'TEXT CARD: "¿Tu primera vez jugando pádel?"\nSHOT 1 (3s): Awkward first hit. TEXT: "Día 1"\nSHOT 2 (3s): Solid rally, player smiling. TEXT: "30 días después"\nSHOT 3 (2s): High-five with partner.\nEND: Logo + "Clases para todos los niveles · WhatsApp en bio"' },
  { title: 'Tournament Day Montage', duration: '30s', script: 'MONTAGE: 10–12 clips, each 1–2 seconds. Warm-up · shots · rallies · celebrations · trophy · group hug.\nBG MUSIC: upbeat, energetic.\nMID TEXT: "Torneo [mes] — Match Point"\nEND: "Próximo torneo → inscripciones abiertas · link en bio"' },
  { title: 'Two Courts, One Club', duration: '20s', script: 'SHOT 1 (3s): Clay court, sunlight. TEXT: "Tenis — polvo de ladrillo ☀️"\nSHOT 2 (3s): Padel court, cool tones, lights. TEXT: "Pádel — vidrio y luz 🌙"\nSHOT 3 (2s): TEXT CARD: "Un solo lugar. Bedoya 7078."\nSHOT 4 (2s): Logo + "Reservá en link en bio"' },
  { title: 'Review Ask', duration: '15s', script: 'TEXT: "¿Jugaste en Match Point?"\nPLAYER: smiles, thumbs up.\nTEXT: "Tu reseña en Google ayuda a que más jugadores nos encuentren"\nTEXT: "Solo lleva 1 minuto"\nEND: Logo + QR to Google review' },
  { title: 'Meet the Coaches', duration: '25s', script: 'SHOT 1 (2s): Coach warming up. TEXT: "Los profes de Match Point"\nSHOT 2 (3s): Coach hitting forehand. TEXT: "[Nombre] · Tenis"\nSHOT 3 (3s): Coach padel demonstration. TEXT: "[Nombre] · Pádel"\nSHOT 4 (2s): Coach to camera. TEXT: "Clases para principiantes y avanzados"\nEND: Logo + "Consultá → WhatsApp en bio"' },
]

const DAILY_STORIES = [
  { day: 'Mon', theme: 'Booking Push', note: 'Court photo + "Canchas libres esta semana" + ATC link sticker' },
  { day: 'Tue', theme: 'Behind the Scenes', note: 'Preparing the court. TEXT: "Todo listo para vos"' },
  { day: 'Wed', theme: 'POLL', note: '"¿Preferís tenis o pádel?" — always gets engagement, reveals audience split' },
  { day: 'Thu', theme: 'Throwback', note: 'Past tournament or match day. "Mirá este punto 🔥"' },
  { day: 'Fri', theme: 'Review CTA ⭐', note: 'Court photo + "Tu reseña nos ayuda a crecer" + Google link sticker' },
  { day: 'Sat', theme: 'Live Action', note: 'Action photo from today. Tag players. "Sábado de pádel 🎾"' },
  { day: 'Sun', theme: 'Community', note: 'High-five or group post-game. "Así termina un domingo en Match Point 🙌"' },
  { day: 'Mon', theme: 'Booking Push', note: '"¿Ya tenés tu turno esta semana? Quedan canchas 👇" + ATC link' },
  { day: 'Tue', theme: 'Q&A Box', note: '"Preguntanos sobre precios, horarios, canchas" — answer in next story' },
  { day: 'Wed', theme: 'Q&A Answers', note: 'Answer questions from Day 9 in 2–3 story cards' },
  { day: 'Thu', theme: 'Event Countdown', note: 'Countdown to next tournament. Or: "Armamos un grupito esta semana?"' },
  { day: 'Fri', theme: 'Review CTA ⭐', note: 'Different photo, same mechanic as Day 5. Friday = peak sentiment' },
  { day: 'Sat', theme: 'Night Padel', note: '"Abierto hasta tarde 🌙 Reservá tu turno nocturno"' },
  { day: 'Sun', theme: 'Weekly Recap', note: '"Esta semana en Match Point ✅" — collage of 3–4 photos from the week' },
]

const REVIEW_STEPS = [
  { n: '01', title: 'WhatsApp Post-Match Blast', window: '30 min after each session', template: '"¡Gracias por jugar hoy en Match Point! Si la pasaste bien, nos ayudarías mucho con una reseña rápida en Google 🙏 Solo lleva 1 minuto → [link directo Google Maps]"', target: '10–15 reviews in 14 days', notes: 'Owner sends manually to every player via WhatsApp immediately after they leave. Direct link = zero friction. Most effective channel: personal, immediate, high trust.' },
  { n: '02', title: 'One-Time Loyalty Group Blast', window: 'Day 1 — once only', template: '"Estamos tratando de llegar a 50 reseñas para que más gente encuentre el club. Si sos jugador regular, ¡te pedimos 2 minutos! → [link]"', target: '15–25 reviews from loyal base', notes: 'Sent to existing WhatsApp player group. Frame as helping the club grow. Do this once — never spam or the ask loses all value.' },
  { n: '03', title: 'QR Code Physical Install', window: 'Permanent — print once', template: 'A4 laminated sign: "¿Disfrutaste jugar acá? 30 segundos te bastan ⭐ Escanéame y dejá tu reseña" + QR code linking directly to the review form', target: '2–4 passive reviews/week', notes: 'Print and install at reception + each court entrance. Zero ongoing effort. Players who would never think to review will do it when prompted in the moment.' },
  { n: '04', title: 'Weekly Instagram Story CTA', window: 'Every Friday — ongoing', template: 'Real court photo + "¿Jugaste esta semana? Tu reseña nos ayuda a crecer ⭐" + Link sticker → Google review form', target: '4–8 reviews/month from IG', notes: 'Friday is post-week sentiment peak. The IG audience already likes the club — they just never had a direct path. Story link sticker = one tap.' },
  { n: '05', title: 'Reply to Every Review Within 24h', window: 'Ongoing — permanent habit', template: '"¡Gracias [nombre]! Nos alegra que hayas disfrutado. Te esperamos en la próxima 🎾 — El equipo de Match Point"', target: 'Better Google local pack ranking', notes: 'Google rewards active GBP engagement with better local placement. 40 reviews + 40 replies outranks 60 reviews with 0 replies. 30 seconds per reply.' },
]

const GBP_REVIEWS = [
  { name: 'Carlos M.', initial: 'C', color: '#F59E0B', stars: 5, time: 'hace 1 semana', text: 'Canchas de tenis en excelente estado, polvo de ladrillo bien mantenido. Reservé por ATC sin problema. Buena onda el lugar, volvemos seguido con el grupo.', reply: '¡Gracias Carlos! Un placer tenerte. Te esperamos en la próxima 🎾 — Match Point' },
  { name: 'Valeria R.', initial: 'V', color: '#1D4ED8', stars: 5, time: 'hace 2 semanas', text: 'Las canchas de pádel iluminadas son una joya para la zona. Todo muy organizado, reserva online fácil. Ambiente familiar y precio accesible.', reply: '¡Qué bueno leerte Valeria! El pádel nocturno es nuestro favorito 😄 ¡Volvé pronto!' },
  { name: 'Diego F.', initial: 'D', color: '#059669', stars: 4, time: 'hace 3 semanas', text: 'Buen club de barrio. Tenis y pádel en el mismo lugar está genial. La cancha de pádel azul impecable. Muy recomendable para La Matanza.', reply: '¡Gracias Diego! Seguimos mejorando. Mandanos tus sugerencias por WhatsApp 🙌' },
]

const LOGO_ROUTES = [
  { route: 'A', name: 'Simplified Flame Wordmark', build: 'Canva · 2 hours', desc: '"MATCH POINT" in bold condensed type + single flame icon replacing the dot on the I or sitting above the P. Clean, scales to 16px. Color version + white knockout.', use: 'IG profile pic · story overlays · court signage · merch · small digital formats', recommended: true },
  { route: 'B', name: 'Badge / Crest', build: 'Canva · 3 hours', desc: 'Circular badge: flame icon at top, "MATCH POINT" arcing around it, "PÁDEL · TENIS" at base. Classic club identity. Works on clothing and banners.', use: 'Merch · court banners · certificates · tournament graphics', recommended: false },
  { route: 'C', name: 'Monogram Mark', build: 'Canva · 1 hour', desc: 'Bold "MP" monogram with a flame accent integrated into the letterforms. Extremely versatile — works as favicon, WhatsApp display, story avatar ring, and embroidery.', use: 'IG avatar · WhatsApp profile · watermark corner · branded gear', recommended: false },
]

const KEYWORDS_15 = [
  ['canchas pádel Isidro Casanova', 'GBP description · Posts'],
  ['cancha tenis Isidro Casanova', 'GBP description · Posts'],
  ['alquiler cancha pádel La Matanza', 'GBP services · Posts'],
  ['alquiler cancha tenis La Matanza', 'GBP services · Posts'],
  ['pádel GBA Oeste', 'IG hashtags · GBP posts'],
  ['club deportivo Isidro Casanova', 'GBP category · description'],
  ['canchas pádel nocturnas La Matanza', 'GBP attributes · posts'],
  ['clases pádel principiantes GBA', 'GBP services · IG captions'],
  ['reserva online cancha pádel Buenos Aires', 'GBP description · bio'],
  ['torneos pádel La Matanza', 'GBP events · IG posts'],
  ['pádel cerca de mí Isidro Casanova', 'implicit via location tags'],
  ['tenis al aire libre GBA Oeste', 'GBP description'],
  ['polvo de ladrillo Isidro Casanova', 'IG hashtags · GBP posts'],
  ['clases tenis adultos La Matanza', 'GBP services'],
  ['ATC Sports Isidro Casanova', 'GBP + IG bio'],
]

const PACKAGES = [
  {
    name: 'STARTER', sub: '"Ponemos la casa en orden"', focus: 'Discoverability',
    price: '$150–300', period: 'USD · setup + mes 1', highlight: false,
    timeline: '5–7 days setup',
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
    timeline: 'Ongoing monthly · Month 1 includes Starter',
    items: [
      'Everything in Starter',
      '12 posts/month: 3 Reels + 3 Stories/week + 3 static feed posts',
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
    timeline: 'Ongoing monthly · requires 90-day commitment',
    items: [
      'Everything in Growth',
      'Meta Ads $20–50/wk: tenis + pádel, La Matanza + GBA Oeste, 18–45',
      'Logo simplification + full palette document (Canva + CapCut templates)',
      'Liga interna mensual: brackets as content, WhatsApp group management',
      'Monthly player broadcast (retention + referral incentive)',
      'Quarterly on-site photo/video session (professional, 2h)',
    ],
    kpis: ['Meta CPM', 'CTR to ATC', 'Monthly booking volume', 'Revenue per court hour'],
  },
]

const EXECUTION_PLAN = [
  { week: 'Wk 1', phase: 'Foundation', actions: 'Switch IG to Public · Full GBP setup · Bio rewrite + ATC link · Launch WhatsApp review blast to all existing players · Install QR code at reception', truth: 'GBP access granted · Owner WhatsApp player list available' },
  { week: 'Wk 2', phase: 'Foundation', actions: '5 Highlight covers · 15+ photos to GBP · Begin posting 3x/week with caption formula · First Friday Story review CTA', truth: 'Canva account set up · 5+ real photos edited with preset' },
  { week: 'Wk 3', phase: 'Momentum', actions: 'First Reel published (Club Walkthrough) · Month 2 content calendar prepared · Check review count — respond to every one · GBP check: appearing in search?', truth: 'At least 10 reviews received · IG profile public + posting' },
  { week: 'Wk 4', phase: 'Momentum', actions: 'Second Reel (Night Padel or Booking tutorial) · Monthly report · Tournament bracket graphic posted · 30-day review target: 25+', truth: 'Consistent 3x/week posting maintained · GBP showing photos in results' },
  { week: 'Wks 5–8', phase: 'Growth', actions: 'Beginner content pillar launched · Story Q&A session · Women\'s padel content highlighted · Track ATC clicks from IG bio', truth: '25+ Google reviews · IG follower growth visible · Rhythm established' },
  { week: 'Wks 9–12', phase: 'Scale', actions: 'Evaluate ad readiness · Launch Meta Ads if budget approved · Plan quarterly photo session · 90-day KPI review', truth: '50+ reviews · 3-pack ranking in 1+ search term · Bookings traceable to IG' },
]

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function StoryCard({ s, active }: { s: typeof STORIES[0]; active: boolean }) {
  return (
    <div className={`relative flex-shrink-0 rounded-[18px] overflow-hidden shadow-2xl transition-all duration-300 ${active ? 'scale-105' : 'scale-95 opacity-55'}`} style={{ width: 120, height: 213 }}>
      <Image src={s.photo} alt={s.tag} fill className="object-cover" sizes="120px" />
      <div className="absolute inset-0" style={{ background: s.overlay }} />
      <div className="absolute top-2 left-2 right-2 flex gap-0.5">
        {STORIES.map((_, i) => (
          <div key={i} className="h-[2px] flex-1 rounded-full"
            style={{ background: s === STORIES[i] ? '#fff' : 'rgba(255,255,255,0.3)' }} />
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

function PostCard({ photo, active }: { photo: typeof PHOTOS[0]; active: boolean }) {
  return (
    <div className={`bg-[#141414] rounded-2xl overflow-hidden border transition-all duration-300 ${active ? 'border-amber-400/50' : 'border-white/8'}`}>
      <div className="flex items-center gap-2 px-3 py-2.5">
        <div className="w-7 h-7 rounded-full p-[1.5px] flex-shrink-0" style={{ background: 'linear-gradient(135deg, #F59E0B, #1D4ED8)' }}>
          <div className="w-full h-full rounded-full bg-[#141414] flex items-center justify-center">
            <span className="text-[7px] font-black text-amber-400">MP</span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-[11px] font-bold leading-none">matchpointtenis</p>
          <p className="text-white/30 text-[8px]">Isidro Casanova · {photo.time}</p>
        </div>
        <span className="text-white/25 text-sm">···</span>
      </div>
      <div className="relative w-full" style={{ aspectRatio: '4/5' }}>
        <Image src={photo.file} alt={photo.label} fill className="object-cover" sizes="300px" />
      </div>
      <div className="px-3 pt-2.5 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-base">♡</span><span className="text-base">💬</span><span className="text-base">↗</span>
          <span className="text-base ml-auto">🔖</span>
        </div>
        <p className="text-white text-[10px] font-bold mb-1">{photo.likes} me gusta · {photo.comments} comentarios</p>
        <div className="text-white/55 text-[10px] leading-snug">
          <span className="text-white font-bold mr-1">matchpointtenis</span>
          {photo.caption.split('\n')[0]}
        </div>
        <p className="text-amber-400/70 text-[9px] mt-1.5">{photo.hashtags}</p>
      </div>
    </div>
  )
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function CaseStudyMatchPoint() {
  const [tab, setTab] = useState<'brand' | 'instagram' | 'maps' | 'packages' | 'strategy'>('brand')
  const [activePost, setActivePost] = useState(0)
  const [activeStory, setActiveStory] = useState(0)
  const [activePostCard, setActivePostCard] = useState(0)
  const [activeReel, setActiveReel] = useState(0)
  const [brandSub, setBrandSub] = useState<'audit' | 'identity' | 'posts'>('audit')
  const [mapSub, setMapSub] = useState<'gbp' | 'reviews' | 'keywords'>('gbp')

  const tabs = [
    { id: 'brand' as const, icon: '🎨', label: 'Brand Analysis' },
    { id: 'instagram' as const, icon: '📱', label: 'Instagram' },
    { id: 'maps' as const, icon: '📍', label: 'Google Maps' },
    { id: 'packages' as const, icon: '📦', label: 'Packages' },
    { id: 'strategy' as const, icon: '🗓', label: '90-Day Plan' },
  ]

  const subTabClass = (active: boolean) =>
    `px-4 py-2 text-[9px] tracking-[0.2em] uppercase rounded-full border transition-all duration-200 ${
      active
        ? 'border-amber-400/50 text-amber-400 bg-amber-400/8'
        : 'border-white/10 text-white/30 hover:text-white/50'
    }`

  return (
    <section id="matchpoint" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]"
        style={{ backgroundImage: 'radial-gradient(circle, #F59E0B 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* ── HEADER ── */}
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
                Pádel &amp; Tenis · Bedoya 7078, Isidro Casanova · @matchpointtenis
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

        {/* ── PHOTO STRIP ── */}
        <div className="grid grid-cols-5 gap-1.5 mb-4 rounded-2xl overflow-hidden" style={{ height: 180 }}>
          {PHOTOS.map((p, i) => (
            <div key={i} className="relative group overflow-hidden cursor-pointer"
              onClick={() => { setTab('instagram'); setActivePostCard(i) }}>
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
          5 selected from 8 scraped · real @matchpointtenis photos · click any to preview as post →
        </p>

        {/* ── TABS ── */}
        <div className="flex border-b border-white/10 mb-12 overflow-x-auto">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className="flex items-center gap-2 px-5 py-3.5 text-[10px] tracking-[0.2em] uppercase whitespace-nowrap border-b-2 -mb-px transition-all duration-200"
              style={tab === t.id
                ? { color: '#F59E0B', borderColor: '#F59E0B' }
                : { color: 'rgba(255,255,255,0.28)', borderColor: 'transparent' }}>
              <span>{t.icon}</span>{t.label}
            </button>
          ))}
        </div>

        {/* ══════════════════════════ BRAND TAB ══════════════════════════════ */}
        {tab === 'brand' && (
          <div>
            {/* Sub-nav */}
            <div className="flex gap-2 mb-10 flex-wrap">
              <button className={subTabClass(brandSub === 'audit')} onClick={() => setBrandSub('audit')}>Audit</button>
              <button className={subTabClass(brandSub === 'identity')} onClick={() => setBrandSub('identity')}>Brand Identity</button>
              <button className={subTabClass(brandSub === 'posts')} onClick={() => setBrandSub('posts')}>12 Post Ideas</button>
            </div>

            {brandSub === 'audit' && (
              <div className="space-y-14">
                {/* 3 insights */}
                <div>
                  <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>
                    What I Found — Analysis of 8 Real Scraped Photos
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mb-12">
                    {[
                      { icon: '🔥', h: 'Two Visual Worlds, Zero Consistency', b: 'Clay courts: warm orange, bright Argentine sun, Topper-branded fence banners. Padel courts: blue surface, glass walls, floodlit at night. Each surface has completely different visual DNA. Neither is being used strategically.' },
                      { icon: '💪', h: 'Authenticity Is Already There', b: 'Real players. Real sweat. Real neighborhood. The high-five and the night squad are genuinely emotional. This is what clubs with a €5,000 photoshoot budget try and fail to manufacture. Match Point has it for free.' },
                      { icon: '🔒', h: 'Private Account = Zero Organic Reach', b: 'Anyone discovering Match Point via hashtag or geotag cannot see a single photo without requesting to follow. All organic discovery is blocked. This costs the club new players every single week.' },
                    ].map((item, i) => (
                      <div key={i} className="rounded-2xl border border-white/8 p-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
                        <span className="text-2xl mb-3 block">{item.icon}</span>
                        <p className="text-white text-sm font-bold mb-2 leading-tight">{item.h}</p>
                        <p className="text-white/45 text-xs leading-relaxed">{item.b}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Audit rows */}
                <div>
                  <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>Brand Audit — Current vs. Proposal</p>
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
                {/* Differentiator + palette */}
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <p className="text-[9px] tracking-[0.35em] uppercase mb-5" style={{ color: '#F59E0B' }}>Proposed Color System</p>
                    <div className="grid grid-cols-4 gap-3 mb-6">
                      {[
                        { hex: '#F59E0B', name: 'Amber Fire', role: 'Primary · CTAs' },
                        { hex: '#1D4ED8', name: 'Court Blue', role: 'Secondary · pádel' },
                        { hex: '#C4622D', name: 'Clay', role: 'Tertiary · tenis' },
                        { hex: '#111111', name: 'Black', role: 'Background default' },
                      ].map(sw => (
                        <div key={sw.hex}>
                          <div className="rounded-xl mb-2" style={{ background: sw.hex, height: 52 }} />
                          <p className="text-white text-[9px] font-bold leading-none mb-0.5">{sw.name}</p>
                          <p className="text-white/30 text-[8px]">{sw.role}</p>
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
                        No competitor in GBA Oeste offers both surfaces AND online booking. Use this sentence everywhere, always.
                      </p>
                      {['IG Bio — first line', 'GBP description — first sentence', 'Every graphic post caption', 'WhatsApp business status'].map(w => (
                        <div key={w} className="flex gap-2 text-[10px] py-1">
                          <span style={{ color: '#F59E0B' }}>→</span>
                          <span className="text-white/50">{w}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {brandSub === 'identity' && (
              <div className="space-y-14">
                {/* Logo routes */}
                <div>
                  <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>Logo Direction — 3 Routes</p>
                  <div className="grid md:grid-cols-3 gap-5 mb-8">
                    {LOGO_ROUTES.map(lr => (
                      <div key={lr.route} className="rounded-2xl border p-6 relative"
                        style={{ borderColor: lr.recommended ? 'rgba(245,158,11,0.4)' : 'rgba(255,255,255,0.08)', background: lr.recommended ? 'rgba(245,158,11,0.04)' : 'rgba(255,255,255,0.02)' }}>
                        {lr.recommended && (
                          <div className="absolute -top-3 left-5 text-[8px] tracking-widest uppercase px-3 py-1 rounded-full font-black"
                            style={{ background: '#F59E0B', color: '#000' }}>Recommended</div>
                        )}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="font-display text-3xl" style={{ color: '#F59E0B' }}>Route {lr.route}</span>
                          <span className="text-[8px] tracking-widest text-white/30 uppercase border border-white/10 rounded-full px-2 py-0.5">{lr.build}</span>
                        </div>
                        <p className="text-white text-sm font-bold mb-2">{lr.name}</p>
                        <p className="text-white/50 text-xs leading-relaxed mb-3">{lr.desc}</p>
                        <div className="border-t border-white/8 pt-3">
                          <p className="text-[8px] tracking-widest uppercase mb-1.5" style={{ color: '#F59E0B' }}>Best Used For</p>
                          <p className="text-white/40 text-[10px] leading-relaxed">{lr.use}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-white/8 p-5" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <p className="text-amber-400 text-[9px] tracking-widest uppercase mb-3">Immediate Action — No Designer Needed</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      {['Route A — Canva, 2 hours: "Bebas Neue" + flame icon from Flaticon. Use for IG profile and story overlays.', 'Route C — Canva, 1 hour: MP monogram for WhatsApp, IG avatar, and any spot where the full logo is too large.', 'Keep the original logo on all existing physical signage. Only update digital assets.'].map((note, i) => (
                        <div key={i} className="flex gap-2 text-[10px] leading-relaxed text-white/50">
                          <span style={{ color: '#F59E0B' }}>→</span>{note}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Typography */}
                <div>
                  <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>Typography Stack</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { role: 'Display / Headlines', font: 'Bebas Neue or Anton', use: 'Post headlines, story text, tournament graphics, score overlays', sample: 'MATCH POINT', size: 'text-4xl' },
                      { role: 'Body / Captions', font: 'Inter 400 · 600 · 700', use: 'Captions, bio text, GBP description, pricing graphics', sample: 'Reservá tu turno hoy →', size: 'text-base' },
                      { role: 'Accent / Tags', font: 'Inter 700 ALL CAPS', use: 'Category labels: PÁDEL · TENIS · NOCTURNO · surface tags', sample: 'PÁDEL · TENIS', size: 'text-sm tracking-widest' },
                    ].map((t, i) => (
                      <div key={i} className="rounded-2xl border border-white/8 p-5" style={{ background: 'rgba(255,255,255,0.02)' }}>
                        <p className="text-[8px] tracking-widest uppercase mb-1" style={{ color: '#F59E0B' }}>{t.role}</p>
                        <p className="text-white/30 text-[9px] mb-3">{t.font} · Google Fonts (free)</p>
                        <p className={`text-white font-bold mb-3 ${t.size}`}>{t.sample}</p>
                        <p className="text-white/35 text-[10px] leading-relaxed">{t.use}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Photography rules */}
                <div>
                  <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>Photography Rules</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-5">
                    {[
                      { surface: '🧱 Clay / Tennis', color: '#C4622D', rules: ['Shoot in bright daylight — let the orange clay be the hero', 'Warm preset: +15 clarity, +10 vibrance, warm split grade', 'Capture horizontal sprint energy — running player beats static player', 'Topper banner in background = sponsor credibility, keep it in frame'] },
                      { surface: '🔵 Padel / Blue Court', color: '#1D4ED8', rules: ['Shoot at night or dusk under floodlights — blue court glow is the asset', 'Cool/teal grade to differentiate visually from clay content', 'Glass walls in background = premium venue feel', 'Groups of 4 at net = social scene that new players aspire to join'] },
                    ].map((s, i) => (
                      <div key={i} className="rounded-2xl border border-white/8 p-5" style={{ background: 'rgba(255,255,255,0.02)' }}>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 rounded-full" style={{ background: s.color }} />
                          <p className="text-white font-bold text-sm">{s.surface}</p>
                        </div>
                        {s.rules.map((r, j) => (
                          <div key={j} className="flex gap-2 py-1.5 border-b border-white/5 last:border-0">
                            <span style={{ color: s.color }} className="text-[10px] flex-shrink-0 mt-0.5">→</span>
                            <p className="text-white/55 text-[10px] leading-snug">{r}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/8 p-5" style={{ background: 'rgba(255,255,255,0.02)' }}>
                      <p className="text-green-400 text-[9px] tracking-widest uppercase mb-3">Always Do</p>
                      {['4:5 crop for all feed posts — never landscape', '9:16 for Stories — always full bleed', 'Real players mid-action or genuine emotion', 'Export at highest quality, resize for Stories separately'].map(r => (
                        <div key={r} className="flex gap-2 py-1.5 border-b border-white/5 last:border-0">
                          <span className="text-green-400 text-[10px] flex-shrink-0">✓</span>
                          <p className="text-white/55 text-[10px]">{r}</p>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-2xl border border-white/8 p-5" style={{ background: 'rgba(255,255,255,0.02)' }}>
                      <p className="text-red-400 text-[9px] tracking-widest uppercase mb-3">Never Do</p>
                      {['Stock photos or hired athletes', 'Landscape posts — they shrink in the grid', 'Posed static group photos where nobody is moving', 'More than one empty-court shot per month'].map(r => (
                        <div key={r} className="flex gap-2 py-1.5 border-b border-white/5 last:border-0">
                          <span className="text-red-400 text-[10px] flex-shrink-0">✗</span>
                          <p className="text-white/55 text-[10px]">{r}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {brandSub === 'posts' && (
              <div className="space-y-6">
                <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>12 Posts — Fully Written (Hook · Caption · Hashtags)</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {POSTS_12.map((post, i) => (
                    <div key={i} className="rounded-2xl border border-white/8 p-5" style={{ background: 'rgba(255,255,255,0.02)' }}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-display text-2xl" style={{ color: 'rgba(245,158,11,0.3)' }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[8px] tracking-widest uppercase border border-white/15 rounded-full px-2 py-0.5 text-white/40">{post.type}</span>
                      </div>
                      <div className="mb-3">
                        <p className="text-[8px] tracking-widest uppercase mb-1" style={{ color: '#F59E0B' }}>Hook</p>
                        <p className="text-white text-sm font-bold leading-snug">{post.hook}</p>
                      </div>
                      <div className="mb-3">
                        <p className="text-[8px] tracking-widest uppercase mb-1 text-white/30">Caption</p>
                        <p className="text-white/55 text-xs leading-relaxed whitespace-pre-line">{post.caption}</p>
                      </div>
                      <div className="border-t border-white/6 pt-3">
                        <p className="text-amber-400/60 text-[9px] leading-relaxed">{post.hashtags}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ══════════════════════════ INSTAGRAM TAB ══════════════════════════ */}
        {tab === 'instagram' && (
          <div className="space-y-16">

            {/* Profile mock */}
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
                            <div key={l}><p className="text-white font-bold text-sm leading-none">{n}</p><p className="text-white/35 text-[9px]">{l}</p></div>
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
                    <p className="text-blue-400 text-xs mb-4">🔗 atcsports.io/match-point</p>
                    <div className="flex gap-2 mb-4">
                      <button className="flex-1 text-xs font-bold py-1.5 rounded-lg" style={{ background: '#1D4ED8', color: '#fff' }}>Seguir</button>
                      <button className="flex-1 text-xs font-bold py-1.5 rounded-lg bg-white/10 text-white">Mensaje</button>
                      <button className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs">▾</button>
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-1">
                      {[{ label: 'Canchas', color: '#F59E0B', icon: '🎾' }, { label: 'Torneos', color: '#C4622D', icon: '🏆' }, { label: 'Horarios', color: '#1D4ED8', icon: '🕐' }, { label: 'Reservas', color: '#059669', icon: '📅' }, { label: 'Comunidad', color: '#7C3AED', icon: '🤝' }].map(h => (
                        <div key={h.label} className="flex flex-col items-center flex-shrink-0">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-1 p-[2px]"
                            style={{ background: `linear-gradient(135deg, ${h.color}, #111)` }}>
                            <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#111' }}>
                              <span className="text-sm">{h.icon}</span>
                            </div>
                          </div>
                          <span className="text-white/50 text-[8px]">{h.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-0.5">
                    {PHOTOS.concat(PHOTOS).slice(0, 9).map((p, i) => (
                      <div key={i} className="relative overflow-hidden" style={{ aspectRatio: '1' }}>
                        <Image src={p.file} alt="" fill className="object-cover" sizes="100px" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-red-500/20 p-5" style={{ background: 'rgba(239,68,68,0.04)' }}>
                    <p className="text-red-400 text-[9px] tracking-widest uppercase mb-3">Current Problems</p>
                    {['Account is PRIVATE — zero organic discovery', 'No ATC booking link — most important conversion path missing', 'No WhatsApp number — how do new players contact them?', 'No location text — invisible in local IG search', 'No Highlight covers — profile looks abandoned to new visitors'].map(pr => (
                      <div key={pr} className="flex gap-2 py-1.5 border-b border-white/5 last:border-0">
                        <span className="text-red-400 text-xs flex-shrink-0">✗</span>
                        <p className="text-white/50 text-xs">{pr}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-green-500/20 p-5" style={{ background: 'rgba(5,150,105,0.04)' }}>
                    <p className="text-green-400 text-[9px] tracking-widest uppercase mb-3">After Optimization</p>
                    {['Switch to Public — 30 seconds, unlocks all organic reach', 'ATC link in bio — one tap to reserve, the only CTA that matters', 'WhatsApp number — instant trust for anyone considering booking', 'Location keywords — appears in IG local search results', '5 branded Highlight covers in amber palette — instant visual identity'].map(pr => (
                      <div key={pr} className="flex gap-2 py-1.5 border-b border-white/5 last:border-0">
                        <span className="text-green-400 text-xs flex-shrink-0">✓</span>
                        <p className="text-white/65 text-xs">{pr}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stories */}
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>Story Templates — Real Club Photos</p>
              <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
                {STORIES.map((s, i) => (
                  <div key={i} className="cursor-pointer flex-shrink-0" onClick={() => setActiveStory(i)}>
                    <StoryCard s={s} active={activeStory === i} />
                    <p className="text-white/30 text-[8px] text-center mt-2">{s.tag}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Feed simulator */}
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>Feed Post Simulator — Click to Preview</p>
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {PHOTOS.map((p, i) => (
                      <button key={i} onClick={() => setActivePostCard(i)}
                        className="relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0"
                        style={{ borderColor: activePostCard === i ? '#F59E0B' : 'transparent' }}>
                        <Image src={p.file} alt={p.label} fill className="object-cover" sizes="56px" />
                        <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[7px] font-black"
                          style={{ background: '#F59E0B', color: '#000' }}>{i + 1}</div>
                      </button>
                    ))}
                  </div>
                  <PostCard photo={PHOTOS[activePostCard]} active={true} />
                </div>
                <div className="space-y-4">
                  <div className="border border-white/8 rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <p className="text-amber-400 text-[9px] tracking-widest uppercase mb-3">Why This Photo Was Selected</p>
                    <p className="text-white/60 text-xs leading-relaxed">{PHOTOS[activePostCard].why}</p>
                  </div>
                  <div className="border border-white/8 rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <p className="text-amber-400 text-[9px] tracking-widest uppercase mb-3">Caption Formula</p>
                    {PHOTOS[activePostCard].caption.split('\n').map((line, i) => (
                      <div key={i} className="flex gap-2 mb-2">
                        <span className="text-amber-400/50 text-[9px] flex-shrink-0 mt-0.5 w-8">{i === 0 ? 'HOOK' : 'CTA'}</span>
                        <p className="text-white/65 text-xs">{line}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border border-white/8 rounded-2xl p-4">
                    <p className="text-amber-400 text-[9px] tracking-widest uppercase mb-2">Hashtag Cluster</p>
                    <p className="text-white/50 text-[10px] leading-relaxed">{PHOTOS[activePostCard].hashtags}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 8 Reel scripts */}
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>8 Reel Scripts — Select to View</p>
              <div className="flex gap-2 flex-wrap mb-6">
                {REELS_8.map((r, i) => (
                  <button key={i} onClick={() => setActiveReel(i)}
                    className="px-3 py-1.5 rounded-full text-[9px] tracking-wide border transition-all"
                    style={activeReel === i
                      ? { borderColor: '#F59E0B', color: '#F59E0B', background: 'rgba(245,158,11,0.08)' }
                      : { borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.35)' }}>
                    {i + 1}. {r.title}
                  </button>
                ))}
              </div>
              <div className="rounded-2xl border border-white/8 p-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-3xl" style={{ color: 'rgba(245,158,11,0.3)' }}>
                    {String(activeReel + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-white font-bold text-base">{REELS_8[activeReel].title}</p>
                    <p className="text-white/30 text-[9px]">{REELS_8[activeReel].duration}</p>
                  </div>
                </div>
                <pre className="text-white/55 text-xs leading-relaxed whitespace-pre-wrap font-sans">{REELS_8[activeReel].script}</pre>
              </div>
            </div>

            {/* 14-day story plan */}
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>14-Day Daily Story Plan</p>
              <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                {DAILY_STORIES.map((s, i) => (
                  <div key={i} className="rounded-xl border border-white/8 p-3" style={{ background: 'rgba(255,255,255,0.015)' }}>
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-[8px] font-bold px-1.5 py-0.5 rounded"
                        style={{ background: 'rgba(245,158,11,0.15)', color: '#F59E0B' }}>{s.day}</span>
                      <span className="text-white/20 text-[7px]">D{i + 1}</span>
                    </div>
                    <p className="text-white text-[9px] font-bold mb-1">{s.theme}</p>
                    <p className="text-white/35 text-[8px] leading-tight">{s.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════ MAPS TAB ═══════════════════════════════ */}
        {tab === 'maps' && (
          <div className="space-y-14">
            {/* Sub nav */}
            <div className="flex gap-2 flex-wrap">
              <button className={subTabClass(mapSub === 'gbp')} onClick={() => setMapSub('gbp')}>GBP Optimization</button>
              <button className={subTabClass(mapSub === 'reviews')} onClick={() => setMapSub('reviews')}>Review System</button>
              <button className={subTabClass(mapSub === 'keywords')} onClick={() => setMapSub('keywords')}>Local Keywords</button>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: '🔍', stat: '0', label: 'Reviews indexed', sub: 'Club exists on GBP but is invisible in local pack results for "canchas tenis Isidro Casanova"' },
                { icon: '📸', stat: '0', label: 'GBP photos uploaded', sub: 'No photos on Google Business Profile. Generic pin icon while competitors show courts.' },
                { icon: '⭐', stat: '4.6★', label: 'Top competitor score', sub: 'Zona Oeste Padel: 4.6 stars, 30+ reviews. Appears first in search. Match Point does not appear.' },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl border border-white/8 p-6 text-center" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <p className="font-display text-5xl text-red-400 mb-1">{item.stat}</p>
                  <p className="text-white text-sm font-bold mb-2">{item.label}</p>
                  <p className="text-white/40 text-xs leading-relaxed">{item.sub}</p>
                </div>
              ))}
            </div>

            {mapSub === 'gbp' && (
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                {/* GBP mock */}
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
                        <span className="text-amber-400 text-sm">★★★★★</span>
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
                    {GBP_REVIEWS.map((r, i) => (
                      <div key={i} className="border border-white/6 rounded-xl p-3 mb-2 last:mb-0" style={{ background: 'rgba(255,255,255,0.015)' }}>
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
                {/* Checklist */}
                <div>
                  <div className="border border-amber-400/20 rounded-2xl p-5 mb-4" style={{ background: 'rgba(245,158,11,0.03)' }}>
                    <p className="text-amber-400 text-[9px] tracking-widest uppercase font-bold mb-4">Day-1 GBP Optimization Checklist</p>
                    {[
                      { task: 'Upload 15+ photos: clay, padel, night, entrance, action, group', effort: '30 min', priority: 'P1' },
                      { task: 'Description: "El único club tenis + pádel con reserva online..."', effort: '5 min', priority: 'P1' },
                      { task: 'Categories: Club deportivo + Cancha de tenis + Pádel', effort: '2 min', priority: 'P1' },
                      { task: 'Booking CTA button → atcsports.io/match-point', effort: '2 min', priority: 'P1' },
                      { task: 'Correct address: Bedoya 7078, Isidro Casanova, La Matanza', effort: '2 min', priority: 'P1' },
                      { task: 'Services: Alquiler tenis · Alquiler pádel · Clases · Torneos', effort: '5 min', priority: 'P1' },
                      { task: 'Hours, WhatsApp number, website → ATC link', effort: '5 min', priority: 'P1' },
                      { task: 'Q&A: pre-answer "¿Cuánto vale?" · "¿Cómo reservo?" · "¿Tienen luz?"', effort: '10 min', priority: 'P2' },
                      { task: 'Weekly GBP Post (tournament result or promo)', effort: '10 min/wk', priority: 'P2' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 py-2 border-b border-white/5 last:border-0">
                        <span className="text-amber-400/40 text-[10px] flex-shrink-0 mt-0.5">○</span>
                        <div className="flex-1 flex items-start justify-between gap-2">
                          <p className="text-white/55 text-[10px] leading-snug">{item.task}</p>
                          <div className="flex gap-1.5 flex-shrink-0">
                            <span className="text-[7px] px-1.5 py-0.5 rounded text-white/30 border border-white/10">{item.priority}</span>
                            <span className="text-amber-400/50 text-[8px]">{item.effort}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border border-white/8 rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <p className="text-white/30 text-[9px] tracking-widest uppercase mb-2">Expected Outcome · 90 days</p>
                    <p className="text-white/55 text-xs leading-relaxed">Appear in "canchas tenis Isidro Casanova" and "pádel La Matanza" searches. With 25+ reviews and active GBP, local 3-pack ranking is realistic in 60–90 days. No paid ads required.</p>
                  </div>
                </div>
              </div>
            )}

            {mapSub === 'reviews' && (
              <div className="space-y-10">
                <div>
                  <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>How to Get 47 Reviews in 30 Days</p>
                  <div className="space-y-3 mb-8">
                    {REVIEW_STEPS.map((step, i) => (
                      <div key={i} className="border border-white/8 rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.015)' }}>
                        <div className="flex items-start gap-5">
                          <span className="font-display text-4xl leading-none flex-shrink-0" style={{ color: 'rgba(245,158,11,0.22)' }}>{step.n}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-1">
                              <p className="text-white text-sm font-bold">{step.title}</p>
                              <span className="text-[8px] px-2 py-0.5 rounded-full border border-green-400/30 text-green-400">Low effort</span>
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
                      { title: 'Why Reviews = Google Ranking', body: 'Google\'s local pack is determined by relevance (keywords in GBP), distance (fixed), and prominence (reviews + activity). A fully optimized GBP with 40+ reviews against an unoptimized zero-review competitor is not a contest.' },
                      { title: 'The Compounding Loop', body: 'More reviews → better ranking → more new players discover the club → more players to ask → more reviews. The first 20 are the hardest. The WhatsApp post-match messages in week 1 are the critical unlock — everything else compounds from that base.' },
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

            {mapSub === 'keywords' && (
              <div>
                <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>15 Local Keywords to Target</p>
                <div className="rounded-2xl border border-white/8 overflow-hidden">
                  <div className="grid grid-cols-12 border-b border-white/8 px-4 py-2" style={{ background: 'rgba(255,255,255,0.04)' }}>
                    <p className="col-span-1 text-[8px] tracking-widest uppercase text-white/30">#</p>
                    <p className="col-span-7 text-[8px] tracking-widest uppercase text-white/30">Keyword</p>
                    <p className="col-span-4 text-[8px] tracking-widest uppercase text-white/30">Use In</p>
                  </div>
                  {KEYWORDS_15.map(([kw, use], i) => (
                    <div key={i} className="grid grid-cols-12 px-4 py-3 border-b border-white/5 last:border-0"
                      style={{ background: i % 2 !== 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                      <p className="col-span-1 text-white/20 text-[10px] font-bold">{String(i + 1).padStart(2, '0')}</p>
                      <p className="col-span-7 text-white/70 text-xs font-medium">{kw}</p>
                      <p className="col-span-4 text-white/35 text-[10px]">{use}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-amber-400/20 p-5" style={{ background: 'rgba(245,158,11,0.03)' }}>
                  <p className="text-amber-400 text-[9px] tracking-widest uppercase mb-3">8 Weekly GBP Post Topics</p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      'Tournament result + winner photo',
                      'Court availability push → ATC link',
                      'Beginner CTA — "Clases para todos los niveles"',
                      'Night padel — "Canchas iluminadas todos los días"',
                      'Differentiator reminder — "El único club tenis + pádel con reserva online"',
                      'Community moment — group or tournament day',
                      'Seasonal hook — "El verano se juega en Match Point ☀️"',
                      'Review ask — "Tu reseña en Google nos ayuda a llegar a más jugadores"',
                    ].map((topic, i) => (
                      <div key={i} className="flex gap-2 text-[10px] py-1">
                        <span style={{ color: '#F59E0B' }}>{String(i + 1).padStart(2, '0')}</span>
                        <span className="text-white/55">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ══════════════════════════ PACKAGES TAB ═══════════════════════════ */}
        {tab === 'packages' && (
          <div className="space-y-10">
            <div className="grid md:grid-cols-3 gap-5">
              {PACKAGES.map((pkg, i) => (
                <div key={i} className="relative rounded-2xl border overflow-hidden flex flex-col"
                  style={{ borderColor: pkg.highlight ? '#F59E0B' : 'rgba(255,255,255,0.08)', background: pkg.highlight ? 'rgba(245,158,11,0.04)' : 'rgba(255,255,255,0.015)' }}>
                  {pkg.highlight && (
                    <div className="text-center py-1.5 text-[9px] tracking-[0.3em] uppercase font-black"
                      style={{ background: '#F59E0B', color: '#000' }}>✦ Recommended Starting Point</div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: '#F59E0B' }}>{pkg.name}</p>
                    <p className="text-white text-sm font-bold leading-snug mb-2">{pkg.sub}</p>
                    <div className="inline-block border border-white/12 rounded-full px-2.5 py-0.5 mb-4 self-start">
                      <span className="text-white/35 text-[9px]">Focus: {pkg.focus}</span>
                    </div>
                    <div className="mb-1">
                      <span className="font-display text-4xl text-white leading-none">{pkg.price}</span>
                    </div>
                    <p className="text-white/30 text-xs mb-5">{pkg.period}</p>
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {pkg.items.map(d => (
                        <li key={d} className="flex gap-2 text-white/50 text-[11px] leading-snug">
                          <span className="flex-shrink-0 mt-0.5" style={{ color: '#F59E0B' }}>✓</span>{d}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-white/8 pt-3 mb-3">
                      <p className="text-white/20 text-[8px] tracking-widest uppercase mb-1.5">Timeline</p>
                      <p className="text-white/40 text-[10px]">{pkg.timeline}</p>
                    </div>
                    <div className="border-t border-white/8 pt-3">
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

        {/* ══════════════════════════ STRATEGY TAB ═══════════════════════════ */}
        {tab === 'strategy' && (
          <div className="space-y-14">
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>Week-by-Week Execution — 90 Days</p>
              <div className="space-y-3">
                {EXECUTION_PLAN.map((row, i) => (
                  <div key={i} className="rounded-2xl border border-white/8 p-5"
                    style={{ background: i < 2 ? 'rgba(245,158,11,0.025)' : i < 4 ? 'rgba(29,78,216,0.025)' : 'rgba(5,150,105,0.025)' }}>
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-20">
                        <p className="font-display text-xl" style={{ color: i < 2 ? '#F59E0B' : i < 4 ? '#60A5FA' : '#4ade80' }}>{row.week}</p>
                        <p className="text-[8px] tracking-widest uppercase"
                          style={{ color: i < 2 ? 'rgba(245,158,11,0.5)' : i < 4 ? 'rgba(96,165,250,0.5)' : 'rgba(74,222,128,0.5)' }}>{row.phase}</p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-[8px] tracking-widest uppercase text-white/30 mb-2">Priority Actions</p>
                            <p className="text-white/65 text-xs leading-relaxed">{row.actions}</p>
                          </div>
                          <div>
                            <p className="text-[8px] tracking-widest uppercase text-white/30 mb-2">What Must Be True</p>
                            <p className="text-white/40 text-xs leading-relaxed">{row.truth}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#F59E0B' }}>Risks + Mitigations</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { risk: 'Owner doesn\'t send WhatsApp messages consistently', fix: 'Create a 14-day pre-written sequence. Owner just copies and sends. 2 minutes per day.' },
                  { risk: 'No new content produced — no one filming', fix: 'Minimum viable 2h phone shoot covers 6–8 weeks of content. Teach owner or a player to capture 1–2 clips per session.' },
                  { risk: 'Posting falls behind schedule', fix: 'Batch content 4 weeks at a time. Use Creator Studio or Later to schedule in one sitting.' },
                  { risk: 'Private account not switched to Public', fix: 'This is the single most critical action. Must be confirmed before any other step.' },
                  { risk: 'GBP optimization not completed', fix: 'Do it in one 90-minute session using the checklist. Priority over all content work.' },
                  { risk: 'Reviews come in but nobody replies', fix: 'Enable GBP notifications on owner\'s phone. Reply template ready to copy-paste. 30 seconds per reply.' },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border border-white/8 p-5" style={{ background: 'rgba(255,255,255,0.015)' }}>
                    <div className="flex gap-2 mb-2">
                      <span className="text-red-400 text-[10px] flex-shrink-0 mt-0.5">⚠</span>
                      <p className="text-white text-xs font-bold leading-snug">{item.risk}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-green-400 text-[10px] flex-shrink-0 mt-0.5">→</span>
                      <p className="text-white/50 text-xs leading-relaxed">{item.fix}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── FOOTER ── */}
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
