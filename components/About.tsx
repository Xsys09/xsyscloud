const stats = [
  { num: '5+',  label: 'Years in IT',       color: 'text-cyan' },
  { num: 'M365',label: 'Admin Level',        color: 'text-indigo' },
  { num: '2',   label: 'OS Environments',    color: 'text-cyan' },
  { num: '∞',   label: 'Scripts Written',    color: 'text-indigo' },
]

export default function About() {
  return (
    <section id="about" className="py-28 max-w-6xl mx-auto px-6">
      <div className="text-[9px] tracking-[3px] text-cyan uppercase mb-2">// 01 — About</div>
      <h2 className="font-rajdhani text-3xl font-bold tracking-[3px] uppercase text-txt mb-12">
        Who I Am
      </h2>

      <div className="grid md:grid-cols-2 gap-14 items-start">

        {/* Bio */}
        <div className="text-[11px] text-dim leading-loose space-y-4">
          <p>
            IT Systems Engineer and Service Desk Team Leader based in Iloilo,
            Philippines. I manage infrastructure, mentor teams, and build
            automation tools that make IT operations run smoother.
          </p>
          <p>
            Day-to-day: Windows and Linux server administration, Microsoft 365
            and Azure AD management, and writing PowerShell scripts that turn
            repetitive tasks into one-liners. I lead a service desk team and
            handle everything from desktop troubleshooting to cloud
            infrastructure.
          </p>
          <p>
            Outside the day job, I&apos;m levelling up in cloud architecture,
            DevOps pipelines, and web development — because knowing how to
            <em> build</em> systems is just as important as keeping them alive.
          </p>
          <p className="text-cyan">
            Currently writing about what I learn along the way.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map(({ num, label, color }) => (
            <div
              key={label}
              className="bg-surface border border-border p-5 hover:border-cyan/30 transition-colors"
            >
              <div className={`font-rajdhani text-4xl font-bold ${color}`}>{num}</div>
              <div className="text-[9px] tracking-[2px] uppercase text-muted mt-1">{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
