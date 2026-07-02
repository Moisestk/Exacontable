import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import Container from "../ui/Container";
import {
  CONTACT,
  FOOTER_ACCOUNT_LINKS,
  FOOTER_LEGAL_LINKS,
  NAV_LINKS,
} from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Sistema contable y financiero para empresas de Ecuador. Más de 7
            años simplificando la gestión de tu negocio.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand" /> {CONTACT.email}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand" /> {CONTACT.phone}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              {CONTACT.address}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">
            Navegación
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">
            Enlaces de interés
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">
            Cuenta
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {FOOTER_ACCOUNT_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Exa Sistema Contable. Todos los
            derechos reservados.
          </p>
          <p>Hecho en Ecuador</p>
        </Container>
      </div>
    </footer>
  );
}
