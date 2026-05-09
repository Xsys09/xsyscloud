import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="font-rajdhani text-sm tracking-[3px] text-dim">
          <span className="text-cyan">[X]</span>SYS · ALADDIN
        </div>

        <div className="text-[9px] text-muted tracking-wide">
          Built with Next.js · Deployed on Vercel · © {new Date().getFullYear()}
        </div>

        <div className="flex gap-6">
          {[
            { href: 'https://github.com/Xsys09', label: 'GitHub' },
            { href: '/blog',                     label: 'Blog'   },
            { href: '/#contact',                 label: 'Contact'},
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-[9px] tracking-[2px] uppercase text-muted hover:text-cyan transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

      </div>
    </footer>
  )
}
