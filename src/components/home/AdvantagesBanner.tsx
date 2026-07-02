export default function AdvantagesBanner() {
  return (
    <div
      id="ventajas"
      className="relative overflow-hidden bg-gradient-to-r from-brand-dark via-brand to-brand-dark py-16 text-center"
    >
      <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Conoce las ventajas de usar EXA
        </h2>
        <p className="mt-3 text-white/70">
          Todo lo que necesitas para llevar la gestión financiera de tu
          empresa al siguiente nivel.
        </p>
      </div>
    </div>
  );
}
