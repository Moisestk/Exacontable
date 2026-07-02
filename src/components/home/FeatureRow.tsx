import { LucideIcon } from "lucide-react";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export type FeatureRowItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type FeatureRowProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  items: FeatureRowItem[];
  visualIcon: LucideIcon;
  reverse?: boolean;
  dark?: boolean;
};

export default function FeatureRow({
  id,
  eyebrow,
  title,
  description,
  items,
  visualIcon: VisualIcon,
  reverse = false,
  dark = false,
}: FeatureRowProps) {
  return (
    <section
      id={id}
      className={`py-20 lg:py-28 ${dark ? "bg-ink text-white" : "bg-white text-ink"}`}
    >
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div className={reverse ? "lg:order-2" : ""}>
          <Eyebrow light={dark}>{eyebrow}</Eyebrow>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p
            className={`mt-4 text-lg leading-relaxed ${
              dark ? "text-white/60" : "text-ink/60"
            }`}
          >
            {description}
          </p>

          <ul className="mt-8 space-y-5">
            {items.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    dark ? "bg-white/10 text-brand-100" : "bg-brand/10 text-brand"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p
                    className={`mt-1 text-sm leading-relaxed ${
                      dark ? "text-white/55" : "text-ink/55"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={`flex items-center justify-center ${reverse ? "lg:order-1" : ""}`}>
          <div className="relative flex h-72 w-full max-w-sm items-center justify-center rounded-[2rem] bg-gradient-to-br from-brand to-brand-dark shadow-xl shadow-brand/20 sm:h-80">
            <div className="absolute inset-6 rounded-2xl border border-white/15" />
            <VisualIcon className="h-24 w-24 text-white/25" strokeWidth={1.25} />
          </div>
        </div>
      </Container>
    </section>
  );
}
