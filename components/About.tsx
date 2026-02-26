const skills = {
  'Marketing & Strategy': [
    'Consumer behavior analysis',
    'Brand positioning & storytelling',
    'Market research & insights',
    'Campaign planning & execution',
    'Digital marketing fundamentals',
    'Social media strategy',
  ],
  'Content Creation': [
    'Visual storytelling',
    'Photography — brand, lifestyle, editorial',
    'Short & long-form content',
    'Copywriting',
    'Content planning & scheduling',
    'Personal branding',
  ],
  'Psychology & Human Insight': [
    'Industrial & organizational psychology',
    'Motivation & performance psychology',
    'Audience engagement strategy',
    'Behavioral insight application',
    'Communication psychology',
  ],
}

export default function About() {
  return (
    <section id="about" className="py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <span className="text-accent text-xs tracking-[0.3em] uppercase block mb-3">
            About
          </span>
          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-none text-white tracking-wide">
            HELLO, I'M
            <br />
            <span className="text-gradient">COURTNEY</span>
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-6">
            <p className="text-silver text-lg leading-relaxed font-light">
              I'm a digitally creative marketer and content director whose visual
              sensibility was shaped by years of modelling, styling my own shoots,
              and collaborating with real brands.
            </p>
            <p className="text-silver leading-relaxed font-light">
              That hands-on experience taught me lighting, composition, wardrobe
              direction, and how to translate a concept into scroll-stopping content.
              I approach every campaign from both sides of the camera — as strategist
              and as creative.
            </p>
            <p className="text-silver leading-relaxed font-light">
              As a former professional athlete, I bring discipline, performance
              mindset, and genuine understanding of sport culture to every brand
              I work with. My degree in Industrial & Organisational Psychology gives
              me a foundation in what actually drives human behaviour — which is
              what separates good content from content that converts.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              {['Buenos Aires', 'South Africa', 'English Native', 'Spanish'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs tracking-widest uppercase text-accent border border-accent/40 px-4 py-2"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-px bg-ash/40">
            {[
              { num: '3+', label: 'Brand campaigns directed' },
              { num: 'BA', label: 'BSocSci — Psychology & Marketing' },
              { num: '2', label: 'Languages' },
              { num: '∞', label: 'Sport & Fashion passion' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-charcoal p-8 flex flex-col justify-between min-h-32"
              >
                <span className="font-display text-5xl text-accent">
                  {stat.num}
                </span>
                <span className="text-muted text-xs tracking-wider uppercase leading-relaxed">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <span className="block w-8 h-px bg-accent" />
            <span className="text-accent text-xs tracking-[0.3em] uppercase">
              Skills & Expertise
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-ash/40">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-charcoal p-8">
                <h3 className="font-display text-xl text-white tracking-wider mb-6 border-b border-ash/60 pb-4">
                  {category.toUpperCase()}
                </h3>
                <ul className="space-y-3">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-3 text-silver text-sm"
                    >
                      <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0 mt-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Experience timeline */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-12">
            <span className="block w-8 h-px bg-accent" />
            <span className="text-accent text-xs tracking-[0.3em] uppercase">
              Experience
            </span>
          </div>
          <div className="space-y-0 divide-y divide-ash/40">
            {[
              {
                role: 'Kindergarten Teacher',
                company: 'Northlands School — Buenos Aires',
                period: '2025 — Present',
                note: 'Operations, communication, leadership, documentation',
              },
              {
                role: 'Content Creator & Creative Director',
                company: 'Lizzard SA · Kelly Love · Beauty Brands',
                period: '2024 — 2025',
                note: 'Full campaign direction — styled, shot, edited, posted',
              },
              {
                role: 'Café Manager',
                company: "Heidi's Café",
                period: '2020 — 2021',
                note: 'Operations, team management, supplier relations',
              },
            ].map((job) => (
              <div
                key={job.role}
                className="flex flex-col md:flex-row md:items-center justify-between py-8 gap-2 group"
              >
                <div>
                  <h4 className="text-white font-body font-medium text-lg group-hover:text-accent transition-colors duration-300">
                    {job.role}
                  </h4>
                  <p className="text-muted text-sm mt-1">{job.company}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-silver text-sm">{job.period}</p>
                  <p className="text-muted text-xs mt-1 tracking-wider">
                    {job.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
