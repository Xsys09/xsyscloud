import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 grid-bg overflow-hidden">
      {/* Gradient fade to bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg pointer-events-none" />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-cyan/5  rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4  w-[350px] h-[350px] bg-indigo/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-28 w-full">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* ── Left: Copy ── */}
          <div className="fade-in-up">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 text-[9px] tracking-[2px] text-cyan border border-cyan/25 px-3 py-1.5 mb-7 bg-cyan/5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan inline-block" />
              STATUS: ONLINE · OPEN TO CONNECT
            </div>

            <h1 className="font-rajdhani text-6xl md:text-7xl font-bold tracking-widest uppercase text-txt leading-none">
              Aladdin
            </h1>
            <div className="font-rajdhani text-2xl font-semibold tracking-widest text-cyan mt-2 mb-5 glow-cyan">
              // Xsys
            </div>

            <p className="text-[10px] tracking-wide text-dim leading-loose mb-9">
              IT Systems Engineer &amp; Service Desk Team Leader<br />
              Cloud · Infrastructure · Automation · Security<br />
              Based in Iloilo, Philippines 🇵🇭
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="bg-cyan text-bg text-[9px] font-bold tracking-[2px] uppercase px-6 py-3 hover:bg-cyan/90 transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="/blog"
                className="text-dim border border-border text-[9px] tracking-[2px] uppercase px-6 py-3 hover:border-dim transition-colors"
              >
                Read Blog
              </Link>
            </div>
          </div>

          {/* ── Right: Terminal ── */}
          <div className="bg-surface border border-border rounded-md overflow-hidden shadow-2xl">
            {/* Title bar */}
            <div className="bg-card border-b border-border px-4 py-2.5 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#28c840] inline-block" />
              <span className="ml-3 text-[10px] text-muted font-mono">xsys@cloud:~$</span>
            </div>

            {/* Body */}
            <div className="p-5 text-[11px] leading-loose font-mono">
              <div><span className="text-cyan">$ </span>whoami</div>
              <div className="text-muted">aladdin · IT Team Lead · Iloilo, PH</div>
              <br />
              <div><span className="text-cyan">$ </span>cat stack.txt</div>
              <div className="text-muted">Windows Server | Linux (Debian / Arch)</div>
              <div className="text-muted">Azure AD | M365 | PowerShell | Bash</div>
              <div className="text-muted">Next.js | React | Cloud | DevOps</div>
              <br />
              <div><span className="text-cyan">$ </span>ping status</div>
              <div className="text-[#39d353]">✓ 200 OK — open to opportunities</div>
              <br />
              <div>
                <span className="text-cyan">$ </span>
                <span className="inline-block w-[7px] h-[13px] bg-cyan cursor-blink align-middle" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
