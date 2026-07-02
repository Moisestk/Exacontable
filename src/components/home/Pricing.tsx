import { Check } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import { PLANS } from "@/lib/site-data";

export default function Pricing() {
  return (
    <section id="planes" className="bg-surface py-24 lg:py-32">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Planes y precios</Eyebrow>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            ¿Estás listo para llevar tu empresa al siguiente nivel?
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            Adquiere uno de nuestros planes y descubre cómo EXA puede ayudarte
            a mejorar la gestión financiera de tu empresa.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col overflow-hidden rounded-xl bg-white ${
                plan.highlighted
                  ? "shadow-xl shadow-brand/10 ring-1 ring-brand/20"
                  : "shadow-sm shadow-ink/5"
              }`}
            >
              <div className={`h-1.5 ${plan.highlighted ? "bg-brand" : "bg-ink/10"}`} />
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-ink">{plan.name}</h3>
                  {plan.highlighted && (
                    <span className="text-[11px] font-bold uppercase tracking-wide text-brand">
                      Más popular
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tabular-nums text-ink">
                    ${plan.price}
                  </span>
                  <span className="text-ink/50">/mes</span>
                </div>
                <p className="mt-1 text-sm text-ink/50">{plan.docs}</p>

                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span className="text-ink/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contacto"
                  variant={plan.highlighted ? "primary" : "outline"}
                  className="mt-8 w-full"
                >
                  Comprar plan
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
