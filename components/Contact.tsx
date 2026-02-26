'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', brand: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Replace with your preferred form handler (Formspree, Resend, etc.)
    // For now, simulates success after 1.5s
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('sent')
  }

  return (
    <section id="contact" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="text-accent text-xs tracking-[0.3em] uppercase block mb-3">
            Get In Touch
          </span>
          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-none text-white tracking-wide">
            LET'S
            <br />
            <span className="text-gradient">BUILD.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: info */}
          <div className="space-y-8">
            <p className="text-silver text-lg leading-relaxed font-light max-w-md">
              Whether you're a brand looking for campaign direction, a business that
              needs a content strategy, or a startup building its visual identity —
              let's talk.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href="mailto:courtneyleedupreez@gmail.com"
                className="flex items-center gap-4 group"
              >
                <span className="text-accent text-xs tracking-widest uppercase w-20">
                  Email
                </span>
                <span className="text-silver group-hover:text-white transition-colors text-sm">
                  courtneyleedupreez@gmail.com
                </span>
              </a>
              <a
                href="tel:+5491151319202"
                className="flex items-center gap-4 group"
              >
                <span className="text-accent text-xs tracking-widest uppercase w-20">
                  Phone
                </span>
                <span className="text-silver group-hover:text-white transition-colors text-sm">
                  +54 911 5131 9202
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="text-accent text-xs tracking-widest uppercase w-20">
                  Location
                </span>
                <span className="text-silver text-sm">
                  Buenos Aires, Argentina
                </span>
              </div>
            </div>

            <div className="pt-8 border-t border-ash/40">
              <p className="text-muted text-xs tracking-widest uppercase mb-4">
                Available for
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  'Brand Campaigns',
                  'Content Strategy',
                  'Creative Direction',
                  'Photography',
                  'Social Media',
                  'Consulting',
                ].map((service) => (
                  <span
                    key={service}
                    className="text-xs tracking-wider text-silver border border-ash/60 px-3 py-1.5"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {status === 'sent' ? (
              <div className="border border-accent/40 bg-accent/5 p-12 text-center">
                <p className="font-display text-4xl text-accent tracking-wide mb-3">
                  THANK YOU
                </p>
                <p className="text-silver text-sm">
                  Message received. I'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-muted text-xs tracking-widest uppercase block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-ash/60 text-white text-sm px-4 py-3 focus:border-accent focus:outline-none transition-colors duration-300 placeholder:text-ash"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-muted text-xs tracking-widest uppercase block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-ash/60 text-white text-sm px-4 py-3 focus:border-accent focus:outline-none transition-colors duration-300 placeholder:text-ash"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-muted text-xs tracking-widest uppercase block mb-2">
                    Brand / Company
                  </label>
                  <input
                    type="text"
                    name="brand"
                    value={form.brand}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-ash/60 text-white text-sm px-4 py-3 focus:border-accent focus:outline-none transition-colors duration-300 placeholder:text-ash"
                    placeholder="Who are you representing?"
                  />
                </div>
                <div>
                  <label className="text-muted text-xs tracking-widest uppercase block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-ash/60 text-white text-sm px-4 py-3 focus:border-accent focus:outline-none transition-colors duration-300 resize-none placeholder:text-ash"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-accent text-black text-sm tracking-widest uppercase py-4 font-body font-medium hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
