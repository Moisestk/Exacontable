import { ShieldCheck } from "lucide-react";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className="flex items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-md shadow-brand/30">
        <ShieldCheck className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <span className="leading-none">
        <span
          className={`block text-xl font-extrabold tracking-tight ${
            light ? "text-white" : "text-ink"
          }`}
        >
          exa
        </span>
        <span
          className={`block text-[10px] font-semibold uppercase tracking-[0.2em] ${
            light ? "text-white/60" : "text-black/40"
          }`}
        >
          Sistema Contable
        </span>
      </span>
    </a>
  );
}
