import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-ash/40 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-2xl tracking-widest text-white hover:text-accent transition-colors"
        >
          CDP
        </Link>
        <p className="text-muted text-xs tracking-widest text-center">
          © {new Date().getFullYear()} Courtney du Preez. All rights reserved.
        </p>
        <p className="text-muted text-xs tracking-widest">
          Buenos Aires · South Africa
        </p>
      </div>
    </footer>
  )
}
