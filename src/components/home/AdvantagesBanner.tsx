import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export default function AdvantagesBanner() {
  return (
    <div id="ventajas" className="bg-white pt-24 lg:pt-32">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Ventajas</Eyebrow>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Conoce las ventajas de usar EXA
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            Todo lo que necesitas para llevar la gestión financiera de tu
            empresa al siguiente nivel.
          </p>
        </div>
      </Container>
    </div>
  );
}
