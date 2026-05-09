const categories = [
  {
    id: '01',
    title: 'Infrastructure',
    titleColor: 'text-cyan',
    items: [
      { name: 'Windows Server', style: 'bg-cyan/5 text-cyan border border-cyan/15' },
      { name: 'Linux (Debian/Arch)', style: 'bg-cyan/5 text-cyan border border-cyan/15' },
      { name: 'Azure AD',      style: 'bg-cyan/5 text-cyan border border-cyan/15' },
      { name: 'M365 Admin',    style: 'bg-cyan/5 text-cyan border border-cyan/15' },
      { name: 'Active Directory', style: 'bg-white/4 text-dim border border-border' },
      { name: 'Hyper-V',      style: 'bg-white/4 text-dim border border-border' },
      { name: 'DNS / DHCP',   style: 'bg-white/4 text-dim border border-border' },
      { name: 'Group Policy', style: 'bg-white/4 text-dim border border-border' },
    ],
  },
  {
    id: '02',
    title: 'Scripting & Dev',
    titleColor: 'text-indigo',
    items: [
      { name: 'PowerShell', style: 'bg-indigo/5 text-indigo border border-indigo/15' },
      { name: 'Bash / Shell', style: 'bg-indigo/5 text-indigo border border-indigo/15' },
      { name: 'Next.js',    style: 'bg-indigo/5 text-indigo border border-indigo/15' },
      { name: 'React',      style: 'bg-indigo/5 text-indigo border border-indigo/15' },
      { name: 'TypeScript', style: 'bg-white/4 text-dim border border-border' },
      { name: 'Python',     style: 'bg-white/4 text-dim border border-border' },
      { name: 'Git',        style: 'bg-white/4 text-dim border border-border' },
      { name: 'REST APIs',  style: 'bg-white/4 text-dim border border-border' },
    ],
  },
  {
    id: '03',
    title: 'Learning Focus',
    titleColor: 'text-dim',
    items: [
      { name: 'Azure Cloud',   style: 'bg-white/4 text-dim border border-border' },
      { name: 'AWS',           style: 'bg-white/4 text-dim border border-border' },
      { name: 'DevOps / CI-CD',style: 'bg-white/4 text-dim border border-border' },
      { name: 'Cybersecurity', style: 'bg-white/4 text-dim border border-border' },
      { name: 'Docker',        style: 'bg-white/4 text-dim border border-border' },
      { name: 'Terraform',     style: 'bg-white/4 text-dim border border-border' },
      { name: 'Kubernetes',    style: 'bg-white/4 text-dim border border-border' },
      { name: 'Web Dev',       style: 'bg-white/4 text-dim border border-border' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-[9px] tracking-[3px] text-cyan uppercase mb-2">// 02 — Capabilities</div>
        <h2 className="font-rajdhani text-3xl font-bold tracking-[3px] uppercase text-txt mb-12">
          Skills &amp; Stack
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-surface border border-border p-5 hover:border-cyan/20 transition-colors">
              <div className={`text-[9px] tracking-[2px] uppercase font-bold mb-4 ${cat.titleColor}`}>
                {cat.id} · {cat.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item.name}
                    className={`text-[9px] px-2 py-1 tracking-wide ${item.style}`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
