'use client'

import { useState } from 'react'

const projects = [
  {
    id: 1,
    client: 'Lizzard South Africa',
    category: 'Lifestyle & Apparel',
    year: '2025',
    tags: ['Creative Direction', 'Photography', 'Styling', 'Social Media'],
    description:
      'Full creative direction for a nationally recognised lifestyle and apparel brand. Styled, directed, shot and posted a multi-format campaign across Instagram targeting their 5,000+ follower base.',
    deliverables: ['Campaign photography', 'Instagram content series', 'Styling direction', 'Brand-aligned copy'],
    color: 'from-yellow-900/20 to-black',
    label: 'LIZZARD',
  },
  {
    id: 2,
    client: 'Kelly Love',
    category: 'Fashion Design',
    year: '2025',
    tags: ['Creative Direction', 'Photography', 'Styling', 'Editing'],
    description:
      'Campaign creation for independent fashion designer specialising in handbags, card holders and bucket hats. Brought vibrant, street-forward visual identity to life through editorial photography.',
    deliverables: ['Editorial campaign shoot', 'Product photography', 'Colour-forward styling', 'Content for launch'],
    color: 'from-yellow-500/10 to-black',
    label: 'KELLY LOVE',
  },
  {
    id: 3,
    client: 'Beauty Brands',
    category: 'Beauty & Skincare',
    year: '2025',
    tags: ['Creative Direction', 'Photography', 'Styling', 'Casting'],
    description:
      'Directed clean, high-end product and lifestyle photography for multiple beauty brands. Managed casting, styling, set direction, and post-production for polished campaign deliverables.',
    deliverables: ['Product campaigns', 'Lifestyle photography', 'Model direction', 'Post-production editing'],
    color: 'from-pink-900/20 to-black',
    label: 'BEAUTY',
  },
  {
    id: 4,
    client: 'Personal Brand',
    category: 'Self-Directed',
    year: '2024–2025',
    tags: ['Brand Strategy', 'Content Creation', 'Photography', 'Personal Branding'],
    description:
      'Built and managed a distinct personal brand across social media platforms. Applied strategic marketing to grow visibility, credibility and engagement — documenting sport, style and lifestyle.',
    deliverables: ['Personal brand identity', 'Content strategy', 'Platform growth', 'Partnership management'],
    color: 'from-zinc/60 to-black',
    label: 'PERSONAL',
  },
]

export default function Work() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="work" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16 border-b border-ash/40 pb-8">
          <div>
            <span className="text-accent text-xs tracking-[0.3em] uppercase block mb-3">
              Selected Projects
            </span>
            <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-none text-white tracking-wide">
              THE WORK
            </h2>
          </div>
          <p className="hidden md:block text-muted text-sm max-w-xs text-right leading-relaxed">
            Every project: Styled. Directed. Edited. Posted.
          </p>
        </div>

        {/* Project list */}
        <div className="divide-y divide-ash/30">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="group relative cursor-pointer"
              onClick={() => setActive(active === project.id ? null : project.id)}
            >
              {/* Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between py-8 gap-4 md:gap-0">
                {/* Number + title */}
                <div className="flex items-baseline gap-6">
                  <span className="font-display text-5xl text-ash group-hover:text-accent transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl md:text-5xl text-light group-hover:text-white tracking-wide transition-colors duration-300">
                      {project.label}
                    </h3>
                    <p className="text-muted text-sm mt-1 tracking-wider">
                      {project.client}
                    </p>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-8 md:gap-12">
                  <span className="text-muted text-xs tracking-widest uppercase hidden md:block">
                    {project.category}
                  </span>
                  <span className="text-silver text-sm font-body">
                    {project.year}
                  </span>
                  <span
                    className={`w-8 h-8 border border-ash flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent transition-all duration-300 ${
                      active === project.id ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </div>
              </div>

              {/* Expanded panel */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  active === project.id ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'
                }`}
              >
                <div className={`bg-gradient-to-br ${project.color} border border-ash/40 p-8 grid md:grid-cols-2 gap-8`}>
                  <div>
                    <p className="text-silver leading-relaxed text-sm md:text-base font-light mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs tracking-widest uppercase border border-ash/60 text-muted px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-accent text-xs tracking-widest uppercase mb-4">
                      Deliverables
                    </p>
                    <ul className="space-y-2">
                      {project.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-3 text-silver text-sm">
                          <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted text-sm tracking-widest uppercase mb-6">
            Ready to add your brand to this list?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-accent text-accent text-sm tracking-widest uppercase px-8 py-4 hover:bg-accent hover:text-black transition-all duration-300"
          >
            Start a Project →
          </a>
        </div>
      </div>
    </section>
  )
}
