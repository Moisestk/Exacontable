"use client";

import { useEffect, useState } from "react";
import { LayoutDashboard, Mail, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import Button from "../ui/Button";
import { CONTACT, NAV_LINKS } from "@/lib/site-data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-ink text-white/70 md:block">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-2 text-xs lg:px-8">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-1.5 hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" /> {CONTACT.email}
            </a>
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-1.5 hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" /> {CONTACT.phone}
            </a>
          </div>
          <a
            href={CONTACT.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Portal Clientes
          </a>
        </div>
      </div>

      <div
        className={`bg-white/90 backdrop-blur-md transition-shadow ${
          scrolled ? "shadow-sm shadow-black/5" : ""
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-ink/70 transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/mi-cuenta" variant="outline" size="sm">
              <LayoutDashboard className="h-4 w-4" />
              Escritorio
            </Button>
            <Button href="#contacto" size="sm">
              Solicita una demo
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
            aria-label="Abrir menú"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white px-6 py-6 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-ink/80 hover:bg-brand/5 hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-black/5 pt-4">
            <Button href="/mi-cuenta" variant="outline">
              <LayoutDashboard className="h-4 w-4" />
              Escritorio
            </Button>
            <Button href="#contacto" onClick={() => setOpen(false)}>
              Solicita una demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
