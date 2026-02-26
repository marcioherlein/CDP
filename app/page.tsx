import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Work from '@/components/Work'
import CaseStudyMatchPoint from '@/components/CaseStudyMatchPoint'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="grain-overlay">
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <CaseStudyMatchPoint />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
