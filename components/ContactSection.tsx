"use client";

import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mgodnllr", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-[9px] tracking-[3px] text-cyan uppercase mb-2">
          // 03 — Contact
        </div>
        <h2 className="font-rajdhani text-3xl font-bold tracking-[3px] uppercase text-txt mb-3">
          Contact Us
        </h2>
        <p className="text-[11px] text-muted leading-relaxed mb-14 max-w-xl">
          Contact us about your IT needs or project idea. We&apos;ll get back to
          you within 24 hours with a tailored solution.
        </p>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  name: "name",
                  label: "Name",
                  type: "text",
                  placeholder: "Your name",
                },
                {
                  name: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "your@email.com",
                },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <label className="block text-[9px] tracking-[2px] uppercase text-muted mb-2">
                    {label}
                  </label>
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
              <label className="block text-[9px] tracking-[2px] uppercase text-muted mb-2">
                Service Needed
              </label>
              <select
                name="service"
                required
                defaultValue=""
                className="w-full bg-surface border border-border text-txt text-[11px] px-4 py-3 focus:outline-none focus:border-cyan/50 font-mono transition-colors"
              >
                <option value="" disabled>
                  Select a service...
                </option>
                <option value="IT Support & Helpdesk">
                  IT Support &amp; Helpdesk
                </option>
                <option value="App Development">App Development</option>
                <option value="Cloud & Infrastructure">
                  Cloud &amp; Infrastructure
                </option>
                <option value="Other / Not sure">Other / Not sure</option>
              </select>
            </div>

            <div>
              <label className="block text-[9px] tracking-[2px] uppercase text-muted mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Describe your project or IT challenge..."
                className="w-full bg-surface border border-border text-txt text-[11px] px-4 py-3 focus:outline-none focus:border-cyan/50 font-mono placeholder:text-muted transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-cyan text-bg text-[9px] font-bold tracking-[2px] uppercase px-8 py-3 hover:bg-cyan/90 disabled:opacity-50 transition-colors"
            >
              {status === "sending" ? "Sending..." : "Send Request →"}
            </button>

            {status === "sent" && (
              <div className="text-[10px] text-[#39d353] border border-[#39d353]/25 px-4 py-3 bg-[#39d353]/5">
                ✓ Request received. We&apos;ll be in touch within 24 hours.
              </div>
            )}
            {status === "error" && (
              <div className="text-[10px] text-[#ff5f57] border border-[#ff5f57]/25 px-4 py-3 bg-[#ff5f57]/5">
                ✗ Something went wrong. Please email us directly.
              </div>
            )}
          </form>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <div className="text-[9px] tracking-[2px] text-muted uppercase mb-4">
                Reach us directly
              </div>
              <div className="space-y-3 text-[11px] text-dim font-mono">
                <div>
                  <span className="text-cyan">github </span> github.com/Xsys09
                </div>
                <div>
                  <span className="text-cyan">location </span> Rizal,
                  Philippines 🇵🇭
                </div>
                <div>
                  <span className="text-cyan">response </span> Within 24 hours
                </div>
              </div>
            </div>

            <div className="bg-surface border border-border p-5">
              <div className="text-[9px] tracking-[2px] uppercase text-cyan mb-3">
                // We work with
              </div>
              <div className="space-y-2 text-[10px] text-dim leading-loose">
                <div>→ Small and medium businesses</div>
                <div>→ Startups needing an IT foundation</div>
                <div>→ Teams moving to the cloud</div>
                <div>→ Organizations needing custom tools</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
