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
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  items: FeatureRowItem[];
  tinted?: boolean;
};

const GRID_COLS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};

export default function FeatureRow({
  id,
  index,
  eyebrow,
  title,
  description,
  items,
  tinted = false,
}: FeatureRowProps) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${tinted ? "bg-surface" : "bg-white"}`}>
      <Container>
        <div className="flex items-baseline gap-4">
          <span className="text-sm font-bold tabular-nums text-brand">
            {index}
          </span>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/60">
          {description}
        </p>

        <ul
          className={`mt-10 grid gap-x-8 gap-y-8 ${
            GRID_COLS[items.length] ?? "sm:grid-cols-3"
          }`}
        >
          {items.map((item) => (
            <li key={item.title} className="border-t border-ink/10 pt-5">
              <item.icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
              <p className="mt-3 font-bold text-ink">{item.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/55">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
