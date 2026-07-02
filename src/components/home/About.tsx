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
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="grid gap-5 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <feature.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-ink">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/55">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Eyebrow>Sobre EXA</Eyebrow>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
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

          <div className="mt-8 flex items-center gap-4 rounded-2xl bg-ink p-6">
            <span className="text-4xl font-extrabold text-brand">+7</span>
            <p className="text-sm text-white/60">
              años acompañando la gestión financiera de empresas ecuatorianas
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
