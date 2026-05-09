import Link from 'next/link'

const projects = [
  {
    id:     '001',
    name:   'XsysCloud',
    desc:   'Personal portfolio & blog. Built with Next.js, deployed on Vercel. Home base for writing and project showcases.',
    tags:   ['Next.js', 'Tailwind', 'MDX', 'Vercel'],
    accent: '#00c8ff',
    link:   'https://github.com/Xsys09/xsyscloud',
    status: 'LIVE',
  },
  {
    id:     '002',
    name:   'M365 Automation Toolkit',
    desc:   'PowerShell scripts for M365 admin tasks — user provisioning, license management, reporting & endpoint control.',
    tags:   ['PowerShell', 'M365', 'Azure AD'],
    accent: '#818cf8',
    link:   'https://github.com/Xsys09',
    status: 'WIP',
  },
  {
    id:     '003',
    name:   'IT Service Desk Scripts',
    desc:   'Collection of Bash and PowerShell scripts for day-to-day IT operations, diagnostics, and user management.',
    tags:   ['Bash', 'PowerShell', 'Windows', 'Linux'],
    accent: '#818cf8',
    link:   'https://github.com/Xsys09',
    status: 'WIP',
  },
  {
    id:     '004',
    name:   'Home Lab — Infrastructure',
    desc:   'Personal lab running Windows Server, Linux VMs, and experimenting with Azure/cloud setups and networking.',
    tags:   ['Hyper-V', 'Linux', 'Azure', 'Networking'],
    accent: '#00c8ff',
    link:   '#',
    status: 'ONGOING',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-[9px] tracking-[3px] text-cyan uppercase mb-2">// 03 — Work</div>
        <h2 className="font-rajdhani text-3xl font-bold tracking-[3px] uppercase text-txt mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-surface border border-border p-5 flex flex-col gap-3 group hover:border-border/80 transition-all"
              style={{ borderTopColor: proj.accent, borderTopWidth: '2px' }}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[9px] text-muted tracking-widest">{proj.id}</span>
                  <h3 className="font-rajdhani text-lg font-semibold tracking-wide text-txt mt-0.5">
                    {proj.name}
                  </h3>
                </div>
                <span
                  className="text-[8px] tracking-[2px] px-2 py-1 border shrink-0"
                  style={{ color: proj.accent, borderColor: `${proj.accent}33` }}
                >
                  {proj.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-[10px] text-muted leading-relaxed flex-1">{proj.desc}</p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] tracking-wide px-2 py-0.5 border border-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9px] tracking-wide group-hover:translate-x-1 transition-transform"
                  style={{ color: proj.accent }}
                >
                  View →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
