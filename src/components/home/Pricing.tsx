import { Check, Star } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import { PLANS } from "@/lib/site-data";

export default function Pricing() {
  return (
    <section id="planes" className="bg-gradient-to-b from-white to-brand-50/40 py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Planes y precios</Eyebrow>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
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
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.highlighted
                  ? "bg-ink text-white shadow-2xl shadow-brand/20 ring-1 ring-brand/40 lg:-translate-y-4"
                  : "bg-white text-ink shadow-sm ring-1 ring-black/5"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">
                  <Star className="h-3 w-3 fill-current" /> Más popular
                </span>
              )}

              <h3 className="font-bold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">${plan.price}</span>
                <span
                  className={plan.highlighted ? "text-white/50" : "text-ink/50"}
                >
                  /mes
                </span>
              </div>
              <p
                className={`mt-1 text-sm ${
                  plan.highlighted ? "text-white/50" : "text-ink/50"
                }`}
              >
                {plan.docs}
              </p>

              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span
                      className={
                        plan.highlighted ? "text-white/80" : "text-ink/70"
                      }
                    >
                      {feature}
                    </span>
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
          ))}
        </div>
      </Container>
    </section>
  );
}
