export default function Eyebrow({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand">
      <span className="h-px w-8 bg-brand" />
      {children}
    </span>
  );
}
