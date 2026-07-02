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
    <div className="border-y border-ink/10 bg-white">
      <Container>
        <div className="grid divide-y divide-ink/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {MODULES.map((module) => (
            <div key={module.title} className="py-10 sm:px-8 sm:py-14 first:sm:pl-0">
              <module.icon className="h-6 w-6 text-brand" strokeWidth={1.75} />
              <h3 className="mt-4 font-bold text-ink">{module.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
