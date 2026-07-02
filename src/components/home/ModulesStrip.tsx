import { LayoutDashboard, ShieldCheck, Sparkles } from "lucide-react";
import Container from "../ui/Container";

const MODULES = [
  {
    icon: LayoutDashboard,
    title: "Módulos especializados",
    description:
      "Facturación electrónica, compras y ventas, control de inventario y reportes financieros en un solo lugar.",
  },
  {
    icon: Sparkles,
    title: "Facilidad de uso",
    description:
      "Una interfaz intuitiva pensada para que gestiones tu contabilidad sin experiencia previa.",
  },
  {
    icon: ShieldCheck,
    title: "Cumplimiento normativo",
    description:
      "Siempre actualizado con la normativa contable y fiscal vigente en Ecuador.",
  },
];

export default function ModulesStrip() {
  return (
    <div className="relative z-10 -mt-20 lg:-mt-24">
      <Container>
        <div className="grid gap-6 rounded-3xl bg-white p-6 shadow-xl shadow-black/5 ring-1 ring-black/5 sm:grid-cols-3 sm:p-8">
          {MODULES.map((module) => (
            <div key={module.title} className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <module.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-bold text-ink">{module.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/55">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
