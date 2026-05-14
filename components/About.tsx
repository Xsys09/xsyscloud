const stats = [
  { num: "5+", label: "Years in IT", color: "text-cyan" },
  { num: "M365", label: "Certified Admin", color: "text-indigo" },
  { num: "24hr", label: "Response Time", color: "text-cyan" },
  { num: "∞", label: "Tasks Automated", color: "text-indigo" },
];

export default function About() {
  return (
    <section id="about" className="py-28 max-w-6xl mx-auto px-6">
      <div className="text-[9px] tracking-[3px] text-cyan uppercase mb-2">
        // 02 — About
      </div>
      <h2 className="font-rajdhani text-3xl font-bold tracking-[3px] uppercase text-txt mb-12">
        Who We Are
      </h2>

      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* Mission */}
        <div className="text-[11px] text-dim leading-loose space-y-4">
          <p>
            Xsys Cloud is an IT services and app development organization based
            in Rizal, Philippines. We help small and medium businesses run
            smoother, more secure, and more modern operations — without the
            enterprise price tag.
          </p>
          <p>
            We handle the full IT stack: service desk support, Microsoft 365 and
            Azure administration, server and network management, and custom
            automation scripting. When your team needs new tools, we build them
            — web apps, internal dashboards, and integrations tailored to your
            workflow.
          </p>
          <p>
            Our approach is straightforward: understand your business first,
            then apply the right technology. No unnecessary complexity, no
            vendor lock-in — just reliable IT that works.
          </p>
          <p className="text-cyan">Local expertise. Cloud-ready solutions.</p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map(({ num, label, color }) => (
            <div
              key={label}
              className="bg-surface border border-border p-5 hover:border-cyan/30 transition-colors"
            >
              <div className={`font-rajdhani text-4xl font-bold ${color}`}>
                {num}
              </div>
              <div className="text-[9px] tracking-[2px] uppercase text-muted mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
