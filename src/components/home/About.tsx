import { BarChart3, Boxes, Receipt, ShoppingCart } from "lucide-react";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

const FEATURES = [
  {
    icon: Receipt,
    title: "Facturación electrónica",
    description: "Emite comprobantes válidos ante el SRI en segundos.",
  },
  {
    icon: ShoppingCart,
    title: "Compras y ventas",
    description: "Controla el flujo comercial de tu negocio de punta a punta.",
  },
  {
    icon: Boxes,
    title: "Control de inventario",
    description: "Stock siempre actualizado y sincronizado en tiempo real.",
  },
  {
    icon: BarChart3,
    title: "Reportes financieros",
    description: "Balances y estados de resultados listos para decidir.",
  },
];

export default function About() {
  return (
    <section id="caracteristicas" className="py-24 lg:py-32">
      <Container className="grid items-start gap-16 lg:grid-cols-2">
        <div className="order-2 grid grid-cols-2 gap-x-8 gap-y-10 lg:order-1">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="border-t border-ink/10 pt-5">
              <feature.icon className="h-6 w-6 text-brand" strokeWidth={1.75} />
              <h3 className="mt-3 font-bold text-ink">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/55">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="order-1 lg:order-2">
          <Eyebrow>Sobre EXA</Eyebrow>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Tu aliado estratégico para el éxito empresarial
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/60">
            En EXA Sistema contable y financiero entendemos la importancia de
            contar con una herramienta confiable y eficiente para gestionar la
            contabilidad de tu empresa. Con más de 7 años de experiencia en el
            mercado ecuatoriano, ofrecemos un sistema contable completo y
            personalizable que se adapta a las necesidades específicas de tu
            negocio.
          </p>

          <div className="mt-8 flex items-baseline gap-4 border-t border-ink/10 pt-6">
            <span className="text-4xl font-bold tabular-nums text-brand">
              +7
            </span>
            <p className="text-sm text-ink/60">
              años acompañando la gestión financiera de empresas ecuatorianas
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
