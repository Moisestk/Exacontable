"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Boxes, CheckCircle2, Receipt } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";

const STATS = [
  { value: "+7 años", label: "en el mercado ecuatoriano" },
  { value: "100%", label: "cumplimiento normativo SRI" },
  { value: "24/7", label: "respaldo en la nube" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50/50 via-white to-white pt-16 pb-28 lg:pt-24 lg:pb-36"
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <Eyebrow>Sistema contable en la nube</Eyebrow>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Somos la solución integral para{" "}
            <span className="text-brand">la gestión de tu empresa</span> en
            Ecuador
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/60">
            EXA Sistema contable y financiero automatiza tu facturación
            electrónica, compras, ventas, inventario y reportes financieros
            en una sola plataforma, cumpliendo siempre con la normativa
            vigente.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#contacto" size="lg">
              Solicita una demo
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#planes" variant="outline" size="lg">
              Ver planes y precios
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-black/5 pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-extrabold text-ink sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-ink/50 sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative rounded-[2rem] bg-gradient-to-br from-brand to-brand-dark p-8 shadow-2xl shadow-brand/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                  Panel EXA
                </p>
                <p className="text-lg font-bold text-white">
                  Resumen del negocio
                </p>
              </div>
              <span className="h-3 w-3 rounded-full bg-white/40" />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <Receipt className="h-5 w-5 text-white/80" />
                <p className="mt-3 text-2xl font-extrabold text-white">
                  1,284
                </p>
                <p className="text-xs text-white/60">Facturas emitidas</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <BarChart3 className="h-5 w-5 text-white/80" />
                <p className="mt-3 text-2xl font-extrabold text-white">
                  $48.2k
                </p>
                <p className="text-xs text-white/60">Ventas del mes</p>
              </div>
              <div className="col-span-2 rounded-2xl bg-white/10 p-4 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Boxes className="h-5 w-5 text-white/80" />
                    <p className="text-sm font-semibold text-white">
                      Inventario sincronizado
                    </p>
                  </div>
                  <span className="text-xs font-bold text-white/80">98%</span>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/15">
                  <div className="h-full w-[98%] rounded-full bg-white" />
                </div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-4 hidden items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-black/10 sm:flex"
          >
            <CheckCircle2 className="h-5 w-5 text-brand" />
            <div>
              <p className="text-sm font-bold text-ink">Factura emitida</p>
              <p className="text-xs text-ink/50">Validada por el SRI</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-8 -left-6 hidden rounded-2xl bg-white px-5 py-4 shadow-xl shadow-black/10 sm:block"
          >
            <p className="text-xs font-semibold text-ink/50">
              Cumplimiento SRI
            </p>
            <p className="text-xl font-extrabold text-brand">Al día</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
