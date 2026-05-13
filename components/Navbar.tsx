"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "https://status.xsyscloud.net/status/services", label: "Status" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-rajdhani text-lg font-bold tracking-widest"
        >
          <span className="text-cyan">[X]</span>SYS
          <span className="text-dim"> CLOUD</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-[10px] tracking-[2px] uppercase text-muted hover:text-cyan transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/#contact"
          className="hidden md:block border border-cyan text-cyan text-[9px] tracking-[2px] uppercase px-4 py-2 hover:bg-cyan hover:text-bg transition-all duration-200 font-bold"
        >
          Get a Quote →
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden text-muted hover:text-cyan transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-[5px]">
            <span
              className={`block h-px bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 border-t border-border" : "max-h-0"
        } bg-surface`}
      >
        <ul className="flex flex-col px-6 py-4 gap-5">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-[11px] tracking-[2px] uppercase text-muted hover:text-cyan transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-6 pb-5">
          <Link
            href="/#contact"
            className="inline-block border border-cyan text-cyan text-[9px] tracking-[2px] uppercase px-4 py-2 font-bold"
            onClick={() => setIsOpen(false)}
          >
            Get a Quote →
          </Link>
        </div>
      </div>
    </nav>
  );
}
