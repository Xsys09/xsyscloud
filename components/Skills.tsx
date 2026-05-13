const services = [
  {
    id: "01",
    title: "IT Support & Helpdesk",
    titleColor: "text-cyan",
    desc: "Fast, reliable support for your team. We handle service desk tickets, endpoint troubleshooting, user account management, and day-to-day IT operations so your staff can stay productive.",
    items: [
      {
        name: "Service Desk",
        style: "bg-cyan/5 text-cyan border border-cyan/15",
      },
      {
        name: "M365 Admin",
        style: "bg-cyan/5 text-cyan border border-cyan/15",
      },
      { name: "Azure AD", style: "bg-cyan/5 text-cyan border border-cyan/15" },
      {
        name: "Endpoint Mgmt",
        style: "bg-cyan/5 text-cyan border border-cyan/15",
      },
      {
        name: "Windows / Linux",
        style: "bg-white/4 text-dim border border-border",
      },
      {
        name: "Active Directory",
        style: "bg-white/4 text-dim border border-border",
      },
      { name: "DNS / DHCP", style: "bg-white/4 text-dim border border-border" },
      {
        name: "Remote Support",
        style: "bg-white/4 text-dim border border-border",
      },
    ],
  },
  {
    id: "02",
    title: "App Development",
    titleColor: "text-indigo",
    desc: "Custom web and internal applications built for your specific needs. From client-facing portals to internal dashboards and automation tools — we design, build, and deploy it.",
    items: [
      {
        name: "Next.js",
        style: "bg-indigo/5 text-indigo border border-indigo/15",
      },
      {
        name: "React",
        style: "bg-indigo/5 text-indigo border border-indigo/15",
      },
      {
        name: "TypeScript",
        style: "bg-indigo/5 text-indigo border border-indigo/15",
      },
      {
        name: "REST APIs",
        style: "bg-indigo/5 text-indigo border border-indigo/15",
      },
      { name: "Python", style: "bg-white/4 text-dim border border-border" },
      { name: "Dashboards", style: "bg-white/4 text-dim border border-border" },
      {
        name: "Integrations",
        style: "bg-white/4 text-dim border border-border",
      },
      { name: "Deployment", style: "bg-white/4 text-dim border border-border" },
    ],
  },
  {
    id: "03",
    title: "Cloud & Infrastructure",
    titleColor: "text-dim",
    desc: "Cloud setup, migration, and ongoing management. We help you move to Azure or M365, manage your servers, automate repetitive tasks, and keep your systems secure and compliant.",
    items: [
      {
        name: "Azure Cloud",
        style: "bg-white/4 text-dim border border-border",
      },
      {
        name: "M365 Migration",
        style: "bg-white/4 text-dim border border-border",
      },
      { name: "PowerShell", style: "bg-white/4 text-dim border border-border" },
      {
        name: "Bash / Shell",
        style: "bg-white/4 text-dim border border-border",
      },
      {
        name: "Hyper-V / VMs",
        style: "bg-white/4 text-dim border border-border",
      },
      { name: "Networking", style: "bg-white/4 text-dim border border-border" },
      {
        name: "Cybersecurity",
        style: "bg-white/4 text-dim border border-border",
      },
      { name: "Compliance", style: "bg-white/4 text-dim border border-border" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="services" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-[9px] tracking-[3px] text-cyan uppercase mb-2">
          // 01 — Services
        </div>
        <h2 className="font-rajdhani text-3xl font-bold tracking-[3px] uppercase text-txt mb-4">
          What We Do
        </h2>
        <p className="text-[11px] text-muted leading-relaxed mb-12 max-w-xl">
          End-to-end IT coverage for local businesses — from day-one support to
          custom-built tools and cloud infrastructure.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="bg-surface border border-border p-5 hover:border-cyan/20 transition-colors flex flex-col gap-4"
            >
              <div>
                <div
                  className={`text-[9px] tracking-[2px] uppercase font-bold mb-1 ${svc.titleColor}`}
                >
                  {svc.id} · {svc.title}
                </div>
                <p className="text-[10px] text-muted leading-relaxed">
                  {svc.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {svc.items.map((item) => (
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
  );
}
