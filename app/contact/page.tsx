'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/mgodnllr', {
        method:  'POST',
        body:    data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen pt-32 pb-28">
      <div className="max-w-2xl mx-auto px-6">

        <div className="text-[9px] tracking-[3px] text-cyan uppercase mb-2">// Contact</div>
        <h1 className="font-rajdhani text-5xl font-bold tracking-[3px] uppercase text-txt mb-3">
          Get in Touch
        </h1>
        <p className="text-[11px] text-muted leading-relaxed mb-14">
          Have a project in mind, want to collaborate, or just want to say hi? Drop a message below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: 'name',  label: 'Name',  type: 'text',  placeholder: 'Your name' },
              { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name}>
                <label className="block text-[9px] tracking-[2px] uppercase text-muted mb-2">{label}</label>
                <input
                  name={name}
                  type={type}
                  required
                  placeholder={placeholder}
                  className="w-full bg-surface border border-border text-txt text-[11px] px-4 py-3 focus:outline-none focus:border-cyan/50 font-mono placeholder:text-muted transition-colors"
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block text-[9px] tracking-[2px] uppercase text-muted mb-2">Subject</label>
            <input
              name="subject"
              required
              placeholder="What's this about?"
              className="w-full bg-surface border border-border text-txt text-[11px] px-4 py-3 focus:outline-none focus:border-cyan/50 font-mono placeholder:text-muted transition-colors"
            />
          </div>

          <div>
            <label className="block text-[9px] tracking-[2px] uppercase text-muted mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Your message..."
              className="w-full bg-surface border border-border text-txt text-[11px] px-4 py-3 focus:outline-none focus:border-cyan/50 font-mono placeholder:text-muted transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-cyan text-bg text-[9px] font-bold tracking-[2px] uppercase px-8 py-3 hover:bg-cyan/90 disabled:opacity-50 transition-colors"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message →'}
          </button>

          {status === 'sent' && (
            <div className="text-[10px] text-[#39d353] border border-[#39d353]/25 px-4 py-3 bg-[#39d353]/5">
              ✓ Message sent successfully. I&apos;ll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="text-[10px] text-[#ff5f57] border border-[#ff5f57]/25 px-4 py-3 bg-[#ff5f57]/5">
              ✗ Something went wrong. Please try emailing me directly.
            </div>
          )}

        </form>

        {/* Alternate contact */}
        <div className="mt-14 pt-8 border-t border-border">
          <div className="text-[9px] tracking-[2px] text-muted uppercase mb-4">Or reach me at</div>
          <div className="space-y-2 text-[11px] text-dim font-mono">
            <div><span className="text-cyan">github  </span> github.com/Xsys09</div>
            <div><span className="text-cyan">email   </span> your@email.com</div>
          </div>
        </div>

      </div>
    </div>
  )
}
