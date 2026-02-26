export default function Marquee() {
  const items = [
    'Creative Direction',
    'Brand Strategy',
    'Content Creation',
    'Visual Storytelling',
    'Photography',
    'Social Media',
    'Campaign Planning',
    'Copywriting',
    'Sport & Fashion',
    'Buenos Aires',
  ]

  return (
    <div className="border-y border-ash/60 bg-charcoal overflow-hidden py-4">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-xs tracking-[0.25em] uppercase text-muted font-body px-6">
              {item}
            </span>
            <span className="text-accent text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
