'use client'

import { useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    client: 'Lizzard South Africa',
    label: 'LIZZARD',
    category: 'Lifestyle & Apparel',
    year: '2025',
    color: 'from-yellow-900/30 to-black',
    accentColor: '#d4a017',
    tags: ['Creative Direction', 'Photography', 'Styling', 'Social Media'],
    description: 'Full creative direction for a nationally recognised lifestyle and apparel brand. Styled, directed, shot and posted a multi-format campaign across Instagram targeting their 5,000+ follower base.',
    deliverables: ['Campaign photography', 'Instagram content series', 'Styling direction', 'Brand-aligned copy'],
    heroImage: '/images/lizzard_campaign.jpg',
    galleryImages: ['/images/lizzard_1.jpg', '/images/lizzard_2.jpg', '/images/lizzard_3.jpg'],
    stories: [
      { bg: '#7c3aed', textColor: '#fff', sticker: '🌴', caption: 'New Drop. Are you ready? 🔥', subtext: '@lizzardsa', time: '2h' },
      { bg: '#d4a017', textColor: '#000', sticker: '✨', caption: 'Summer vibes only', subtext: 'Swipe up to shop ↑', time: '5h' },
      { bg: '#1a1a1a', textColor: '#fff', sticker: '🔥', caption: 'She came. She styled. She conquered.', subtext: '#LizzardSA', time: '1d' },
    ],
    instagram: { handle: 'lizzardsa', followers: '5.2K', posts: '312', bio: 'Lifestyle & Apparel 🌴 South Africa' },
    maps: { name: 'Lizzard SA — Flagship Store', location: 'Cape Town, South Africa', rating: '4.8', reviews: '312', category: 'Lifestyle & Apparel Store', hours: 'Open · Closes 6 PM', address: 'V&A Waterfront, Cape Town' },
  },
  {
    id: 2,
    client: 'Kelly Love',
    label: 'KELLY LOVE',
    category: 'Fashion Design',
    year: '2025',
    color: 'from-yellow-500/20 to-black',
    accentColor: '#f5c518',
    tags: ['Creative Direction', 'Photography', 'Styling', 'Editing'],
    description: 'Campaign creation for independent fashion designer specialising in handbags, card holders and bucket hats. Brought vibrant, street-forward visual identity to life through editorial photography.',
    deliverables: ['Editorial campaign shoot', 'Product photography', 'Colour-forward styling', 'Content for launch'],
    heroImage: '/images/kellylove_campaign.jpg',
    galleryImages: ['/images/kellylove_1.jpg', '/images/kellylove_2.jpg', '/images/kellylove_3.jpg'],
    stories: [
      { bg: '#f5c518', textColor: '#000', sticker: '👜', caption: "The bag you didn't know you needed.", subtext: '@kellylovedesign', time: '3h' },
      { bg: '#f0f0f0', textColor: '#111', sticker: '🛹', caption: 'Fashion has no rules.', subtext: 'New collection live now', time: '6h' },
      { bg: '#2d6a4f', textColor: '#fff', sticker: '🌸', caption: 'Color. Joy. Confidence.', subtext: 'Link in bio ↗', time: '1d' },
    ],
    instagram: { handle: 'kellylovedesign', followers: '1.8K', posts: '87', bio: 'Bags & Accessories 👜 Independent Designer' },
    maps: { name: 'Kelly Love Design Studio', location: 'Johannesburg, South Africa', rating: '5.0', reviews: '47', category: 'Fashion Designer · Accessories', hours: 'By appointment', address: 'Maboneng Precinct, JHB' },
  },
  {
    id: 3,
    client: 'Beauty Brands',
    label: 'BEAUTY',
    category: 'Beauty & Skincare',
    year: '2025',
    color: 'from-pink-900/30 to-black',
    accentColor: '#e879a0',
    tags: ['Creative Direction', 'Photography', 'Styling', 'Casting'],
    description: 'Directed clean, high-end product and lifestyle photography for multiple beauty brands. Managed casting, styling, set direction, and post-production for polished campaign deliverables.',
    deliverables: ['Product campaigns', 'Lifestyle photography', 'Model direction', 'Post-production editing'],
    heroImage: '/images/beauty_campaign.jpg',
    galleryImages: ['/images/beauty_1.jpg', '/images/beauty_2.jpg', '/images/beauty_3.jpg'],
    stories: [
      { bg: '#fce4ec', textColor: '#880e4f', sticker: '🌸', caption: 'Your skin. Your glow. Your rules.', subtext: 'New serum — out now', time: '1h' },
      { bg: '#fff', textColor: '#333', sticker: '✨', caption: 'Morning ritual, elevated.', subtext: 'Tap to shop ↑', time: '4h' },
      { bg: '#e879a0', textColor: '#fff', sticker: '💕', caption: 'Real women. Real results.', subtext: '#BeautyUnfiltered', time: '2d' },
    ],
    instagram: { handle: 'beautybrands', followers: '12.4K', posts: '541', bio: 'Clean Beauty ✨ Real Results' },
    maps: { name: 'Beauty Brands Studio', location: 'Sandton, South Africa', rating: '4.9', reviews: '228', category: 'Beauty & Skincare', hours: 'Open · Closes 7 PM', address: 'Sandton City, Johannesburg' },
  },
  {
    id: 4,
    client: 'Personal Brand',
    label: 'PERSONAL',
    category: 'Self-Directed',
    year: '2024–2025',
    color: 'from-zinc/60 to-black',
    accentColor: '#c8a96e',
    tags: ['Brand Strategy', 'Content Creation', 'Photography', 'Personal Branding'],
    description: 'Built and managed a distinct personal brand across social media platforms. Applied strategic marketing to grow visibility, credibility and engagement across sport, style and lifestyle content.',
    deliverables: ['Personal brand identity', 'Content strategy', 'Platform growth', 'Partnership management'],
    heroImage: '/images/personal_brand.jpg',
    galleryImages: ['/images/personal_brand.jpg', '/images/courtney_hero_portrait.jpg', '/images/about_portrait.jpg'],
    stories: [
      { bg: '#0a0a0a', textColor: '#c8a96e', sticker: '🎾', caption: 'Sport is style. Style is sport.', subtext: '@courtneydupreez', time: '2h' },
      { bg: '#c8a96e', textColor: '#000', sticker: '📸', caption: 'Behind every great image is intent.', subtext: 'Buenos Aires 🇦🇷', time: '8h' },
      { bg: '#1a1a2e', textColor: '#fff', sticker: '⚡', caption: 'Athlete. Creator. Director.', subtext: 'Making visions come to life', time: '1d' },
    ],
    instagram: { handle: 'courtneydupreez', followers: '3.1K', posts: '214', bio: 'Creative Director · Athlete · Content Creator 🌍' },
    maps: { name: 'Courtney du Preez · Creative Studio', location: 'Buenos Aires, Argentina', rating: '5.0', reviews: '38', category: 'Creative Director · Content Studio', hours: 'Available for bookings', address: 'Buenos Aires, Argentina 🇦🇷' },
  },
]

type Project = typeof projects[0]
type TabType = 'gallery' | 'instagram' | 'maps'

function StoryCard({ story, handle }: { story: Project['stories'][0]; handle: string }) {
  return (
    <div className="relative w-[112px] h-[200px] rounded-2xl overflow-hidden flex flex-col justify-between p-3 flex-shrink-0 shadow-2xl border border-white/10"
      style={{ background: story.bg }}>
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-semibold opacity-80 truncate" style={{ color: story.textColor }}>@{handle}</span>
        <span className="text-[9px] opacity-50 ml-1" style={{ color: story.textColor }}>{story.time}</span>
      </div>
      <div className="text-center text-3xl">{story.sticker}</div>
      <div>
        <p className="text-[10px] font-bold leading-tight mb-1" style={{ color: story.textColor }}>{story.caption}</p>
        <p className="text-[9px] opacity-70" style={{ color: story.textColor }}>{story.subtext}</p>
      </div>
    </div>
  )
}

function IGPost({ src, caption, likes, handle }: { src: string; caption: string; likes: string; handle: string }) {
  return (
    <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/10">
      <div className="flex items-center gap-2 px-3 py-2">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500 p-[1.5px]">
          <div className="w-full h-full rounded-full bg-[#1a1a1a]" />
        </div>
        <span className="text-white text-[10px] font-semibold">@{handle}</span>
      </div>
      <div className="relative w-full aspect-square">
        <Image src={src} alt={caption} fill className="object-cover" sizes="160px" />
      </div>
      <div className="px-3 py-2">
        <div className="flex gap-2 mb-1 text-sm">♡ 💬 ↗</div>
        <p className="text-white text-[10px] font-bold">{likes} likes</p>
        <p className="text-[10px] text-silver leading-tight mt-0.5 line-clamp-2">
          <span className="text-white font-semibold">@{handle} </span>{caption}
        </p>
      </div>
    </div>
  )
}

function GoogleMapsCard({ project }: { project: Project }) {
  const { maps, accentColor, galleryImages } = project
  const stars = parseFloat(maps.rating)
  return (
    <div className="bg-[#141414] rounded-2xl border border-ash/30 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-ash/20 bg-[#1a1a1a]">
        <div className="w-2 h-2 rounded-full bg-red-500" />
        <div className="w-2 h-2 rounded-full bg-yellow-500" />
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <div className="flex items-center gap-1.5 ml-2 bg-[#0a0a0a] rounded-full px-3 py-0.5 flex-1 min-w-0">
          <span className="text-green-400 text-[9px]">🔒</span>
          <span className="text-muted text-[10px] truncate">google.com/maps · {maps.name}</span>
        </div>
      </div>
      {/* Map placeholder */}
      <div className="relative h-28 bg-[#2a2a2a] overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(rgba(200,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.3) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }} />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10" />
        <div className="absolute top-0 bottom-0 left-1/3 w-px bg-white/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-10 rounded-full mx-auto flex items-center justify-center text-xl mb-1 shadow-xl" style={{ background: accentColor }}>📍</div>
            <p className="text-white text-xs font-semibold drop-shadow">{maps.location}</p>
          </div>
        </div>
      </div>
      {/* Info */}
      <div className="p-4">
        <h4 className="text-white text-sm font-bold leading-tight mb-0.5">{maps.name}</h4>
        <p className="text-muted text-[11px] mb-2">{maps.category}</p>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-sm" style={{ color: accentColor }}>{maps.rating}</span>
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(s => (
              <span key={s} className="text-xs" style={{ color: s <= Math.floor(stars) ? '#f5c518' : '#444' }}>★</span>
            ))}
          </div>
          <span className="text-muted text-[10px]">({maps.reviews} reviews)</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-green-400 text-[11px]">{maps.hours}</span>
        </div>
        <p className="text-silver text-[11px] mb-3">📍 {maps.address}</p>
        <div className="rounded-lg px-3 py-2 border mb-3" style={{ borderColor: `${accentColor}40`, background: `${accentColor}0d` }}>
          <p className="text-[10px] tracking-wider uppercase mb-1 font-semibold" style={{ color: accentColor }}>✦ Content by Courtney du Preez</p>
          <p className="text-muted text-[10px]">Photography · Campaign Direction · Social Media</p>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {galleryImages.slice(0,2).map((img, i) => (
            <div key={i} className="relative aspect-video rounded overflow-hidden">
              <Image src={img} alt="Business photo" fill className="object-cover" sizes="120px" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-1 py-0.5">
                <p className="text-[8px] text-white/80">Added to Business</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {['Directions','Website','Call'].map(a => (
            <button key={a} className="text-[10px] py-1.5 rounded border border-ash/40 text-silver hover:text-accent hover:border-accent/40 transition-all">{a}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  const [active, setActive] = useState<number | null>(null)
  const [tabs, setTabs] = useState<Record<number, TabType>>({})
  const getTab = (id: number): TabType => tabs[id] || 'gallery'
  const setTab = (id: number, tab: TabType) => setTabs(prev => ({ ...prev, [id]: tab }))

  return (
    <section id="work" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16 border-b border-ash/40 pb-8">
          <div>
            <span className="text-accent text-xs tracking-[0.3em] uppercase block mb-3">Selected Projects</span>
            <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-none text-white tracking-wide">THE WORK</h2>
          </div>
          <p className="hidden md:block text-muted text-sm max-w-xs text-right leading-relaxed">Every project: Styled. Directed. Edited. Posted.</p>
        </div>

        <div className="divide-y divide-ash/30">
          {projects.map((project, i) => (
            <div key={project.id}>
              {/* Row */}
              <div className="group cursor-pointer" onClick={() => setActive(active === project.id ? null : project.id)}>
                <div className="flex flex-col md:flex-row md:items-center justify-between py-8 gap-4">
                  <div className="flex items-baseline gap-6">
                    <span className="font-display text-5xl text-ash group-hover:text-accent transition-colors duration-300">{String(i+1).padStart(2,'0')}</span>
                    <div>
                      <h3 className="font-display text-3xl md:text-5xl text-light group-hover:text-white tracking-wide transition-colors duration-300">{project.label}</h3>
                      <p className="text-muted text-sm mt-1 tracking-wider">{project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className="text-muted text-xs tracking-widest uppercase hidden md:block">{project.category}</span>
                    <span className="text-silver text-sm">{project.year}</span>
                    <span className={`w-8 h-8 border border-ash flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent transition-all duration-300 ${active === project.id ? 'rotate-45' : ''}`}>+</span>
                  </div>
                </div>
              </div>

              {/* Expanded */}
              <div className={`overflow-hidden transition-all duration-700 ${active === project.id ? 'max-h-[3000px] opacity-100 mb-12' : 'max-h-0 opacity-0'}`}>
                <div className={`bg-gradient-to-br ${project.color} border border-ash/40`}>
                  {/* Description */}
                  <div className="grid md:grid-cols-2 gap-8 p-8 border-b border-ash/20">
                    <div>
                      <p className="text-silver leading-relaxed text-sm font-light mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs tracking-widest uppercase border border-ash/60 text-muted px-3 py-1">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-4" style={{ color: project.accentColor }}>Deliverables</p>
                      <ul className="space-y-2">
                        {project.deliverables.map(d => (
                          <li key={d} className="flex items-center gap-3 text-silver text-sm">
                            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.accentColor }} />{d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex border-b border-ash/20">
                    {(['gallery','instagram','maps'] as TabType[]).map(tab => (
                      <button key={tab} onClick={() => setTab(project.id, tab)}
                        className={`flex-1 py-3 text-xs tracking-widest uppercase transition-all duration-300 ${getTab(project.id) === tab ? 'border-b-2' : 'text-muted hover:text-silver'}`}
                        style={getTab(project.id) === tab ? { borderColor: project.accentColor, color: project.accentColor } : {}}>
                        {tab === 'gallery' ? '📷 Campaign Photos' : tab === 'instagram' ? '📱 Instagram' : '📍 Brand Location'}
                      </button>
                    ))}
                  </div>

                  {/* Tab content */}
                  <div className="p-6">
                    {/* Gallery */}
                    {getTab(project.id) === 'gallery' && (
                      <div className="space-y-4">
                        <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-lg">
                          <Image src={project.heroImage} alt={project.client} fill className="object-cover" sizes="(max-width:768px) 100vw, 80vw" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <p className="font-display text-4xl tracking-widest" style={{ color: project.accentColor }}>{project.label}</p>
                            <p className="text-white/70 text-xs tracking-widest uppercase">Styled · Directed · Edited · Posted by Courtney du Preez</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {project.galleryImages.map((img, idx) => (
                            <div key={idx} className="relative aspect-[3/4] overflow-hidden rounded-lg">
                              <Image src={img} alt={`${project.client} ${idx+1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 33vw, 25vw" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Instagram */}
                    {getTab(project.id) === 'instagram' && (
                      <div className="space-y-4">
                        <p className="text-muted text-xs tracking-widest uppercase">✦ Simulated Instagram content — concept & execution by Courtney</p>
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Profile card */}
                          <div className="bg-[#141414] rounded-2xl border border-ash/30 overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-ash/20">
                              <div className="w-2 h-2 rounded-full bg-red-500" /><div className="w-2 h-2 rounded-full bg-yellow-500" /><div className="w-2 h-2 rounded-full bg-green-500" />
                              <span className="text-muted text-[10px] ml-2">Instagram · @{project.instagram.handle}</span>
                            </div>
                            {/* Profile row */}
                            <div className="flex items-center gap-4 px-4 py-4">
                              <div className="w-14 h-14 rounded-full flex-shrink-0 bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500 p-0.5">
                                <div className="w-full h-full rounded-full overflow-hidden">
                                  <Image src={project.galleryImages[0]} alt={project.client} width={56} height={56} className="object-cover w-full h-full" />
                                </div>
                              </div>
                              <div>
                                <p className="text-white text-sm font-bold">@{project.instagram.handle}</p>
                                <p className="text-muted text-[11px] mt-0.5">{project.instagram.bio}</p>
                                <div className="flex gap-4 mt-2">
                                  {[['posts', project.instagram.posts], ['followers', project.instagram.followers], ['growth', '+↑']].map(([label, val]) => (
                                    <div key={label} className="text-center">
                                      <p className="text-white text-xs font-bold">{val}</p>
                                      <p className="text-muted text-[9px]">{label}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            {/* Stories */}
                            <div className="px-4 pb-3">
                              <p className="text-muted text-[9px] tracking-widest uppercase mb-2">Story concepts by Courtney</p>
                              <div className="flex gap-2 overflow-x-auto pb-1">
                                {project.stories.map((story, i) => <StoryCard key={i} story={story} handle={project.instagram.handle} />)}
                              </div>
                            </div>
                            {/* Grid */}
                            <div className="grid grid-cols-3 gap-px border-t border-ash/20">
                              {project.galleryImages.map((img, i) => (
                                <div key={i} className="relative aspect-square">
                                  <Image src={img} alt="" fill className="object-cover hover:brightness-75 transition-all" sizes="100px" />
                                </div>
                              ))}
                            </div>
                          </div>
                          {/* Posts + notes */}
                          <div className="space-y-4">
                            <p className="text-[10px] tracking-widest uppercase" style={{ color: project.accentColor }}>Post Concepts</p>
                            <div className="grid grid-cols-2 gap-3">
                              {project.galleryImages.slice(0,2).map((img, idx) => (
                                <IGPost key={idx} src={img} caption={project.stories[idx]?.caption || 'Campaign content'} likes={`${Math.floor(Math.random()*400+100)}`} handle={project.instagram.handle} />
                              ))}
                            </div>
                            <div className="rounded-lg p-4 border" style={{ borderColor: `${project.accentColor}30`, background: `${project.accentColor}08` }}>
                              <p className="text-xs font-semibold mb-2" style={{ color: project.accentColor }}>Content Strategy Notes</p>
                              <ul className="space-y-1">
                                {['Posting cadence: 4–5x per week', 'Stories: daily engagement loops', 'Hashtag clusters: niche + broad mix', 'CTA on every caption or story'].map(note => (
                                  <li key={note} className="text-silver text-[11px] flex gap-2">
                                    <span style={{ color: project.accentColor }}>✓</span>{note}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Maps */}
                    {getTab(project.id) === 'maps' && (
                      <div className="space-y-4">
                        <p className="text-muted text-xs tracking-widest uppercase">✦ Enhanced brand presence — Google Business profile optimisation concept</p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <GoogleMapsCard project={project} />
                          <div className="space-y-4">
                            <div className="rounded-lg p-5 border" style={{ borderColor: `${project.accentColor}30`, background: `${project.accentColor}08` }}>
                              <p className="text-xs tracking-widest uppercase mb-3 font-semibold" style={{ color: project.accentColor }}>Google Business Optimisation</p>
                              <ul className="space-y-2">
                                {['Professional campaign photos uploaded', 'Brand bio updated with keywords', 'Products/services section populated', 'Posts schedule: 2x per week', 'Review response strategy defined', 'Attributes: women-led, established brand'].map(item => (
                                  <li key={item} className="text-silver text-[11px] flex gap-2">
                                    <span style={{ color: project.accentColor }}>✓</span>{item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              {project.galleryImages.slice(0,2).map((img, i) => (
                                <div key={i} className="relative aspect-video rounded-lg overflow-hidden">
                                  <Image src={img} alt="Google Business photo" fill className="object-cover" sizes="200px" />
                                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-1">
                                    <p className="text-[9px] text-white/80">Added to Google Business</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted text-sm tracking-widest uppercase mb-6">Ready to add your brand to this list?</p>
          <a href="#contact" className="inline-flex items-center gap-3 border border-accent text-accent text-sm tracking-widest uppercase px-8 py-4 hover:bg-accent hover:text-black transition-all duration-300">
            Start a Project →
          </a>
        </div>
      </div>
    </section>
  )
}
