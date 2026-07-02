import { ShieldCheck } from "lucide-react";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white shadow-sm shadow-brand/30">
        <ShieldCheck className="h-4 w-4" strokeWidth={2.25} />
      </span>
      <span className="leading-none">
        <span
          className={`block text-lg font-bold tracking-tight ${
            light ? "text-white" : "text-ink"
          }`}
        >
          exa
        </span>
        <span
          className={`block text-[10px] font-semibold uppercase tracking-[0.2em] ${
            light ? "text-white/50" : "text-ink/40"
          }`}
        >
          Sistema Contable
        </span>
      </span>
    </a>
  );
}
