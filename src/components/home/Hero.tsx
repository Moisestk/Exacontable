import {
  ArrowRight,
  Award,
  CircleDollarSign,
  Cloud,
  Receipt,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";

const STATS = [
  { icon: Award, value: "+7 años", label: "En el mercado ecuatoriano" },
  { icon: ShieldCheck, value: "100%", label: "Cumplimiento normativo SRI" },
  { icon: Cloud, value: "24/7", label: "Respaldo en la nube" },
];

const SUMMARY_ROWS = [
  { icon: Wallet, label: "Ventas del mes", value: "$48,230" },
  { icon: Receipt, label: "Facturas emitidas", value: "1,284" },
  { icon: CircleDollarSign, label: "Cuentas por cobrar", value: "$12,940" },
  { icon: ShieldCheck, label: "Cumplimiento SRI", value: "Al día", accent: true },
];

const SALES_TREND = [32, 44, 40, 58, 52, 74];

export default function Hero() {
  return (
    <section id="inicio" className="bg-white pt-24 pb-24 lg:pt-32 lg:pb-32">
      <Container className="grid items-start gap-16 lg:grid-cols-2">
        <div>
          <Eyebrow>Sistema contable en la nube</Eyebrow>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Somos la solución integral para{" "}
            <span className="text-brand">la gestión de tu empresa</span> en
            Ecuador
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/60">
            EXA Sistema contable y financiero automatiza tu facturación
            electrónica, compras, ventas, inventario y reportes financieros
            en una sola plataforma, cumpliendo siempre con la normativa
            vigente.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contacto" size="lg">
              Solicita una demo
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#planes" variant="outline" size="lg">
              Ver planes y precios
            </Button>
          </div>

          <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <stat.icon className="h-4 w-4 text-brand" strokeWidth={2} />
                <dt className="mt-2 text-2xl font-bold tabular-nums text-ink sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-ink/45">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -right-4 -bottom-4 hidden h-full w-full rounded-xl bg-brand sm:block" />

          <div className="relative overflow-hidden rounded-xl border border-ink/10 bg-white shadow-xl shadow-ink/5">
            <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
              <p className="font-bold text-ink">Resumen financiero</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                Junio 2026
              </p>
            </div>

            <div className="divide-y divide-ink/8 px-6">
              {SUMMARY_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between py-4"
                >
                  <div className="flex items-center gap-2.5 text-sm text-ink/60">
                    <row.icon className="h-4 w-4 text-ink/35" strokeWidth={2} />
                    {row.label}
                  </div>
                  <p
                    className={`text-sm font-bold tabular-nums ${
                      row.accent ? "text-brand" : "text-ink"
                    }`}
                  >
                    {row.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-ink/10 px-6 py-5">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink/40">
                Ventas · últimos 6 meses
              </p>
              <div className="mt-4 flex h-14 items-end gap-2.5">
                {SALES_TREND.map((height, index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-t-sm ${
                      index === SALES_TREND.length - 1
                        ? "bg-brand"
                        : "bg-ink/10"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
