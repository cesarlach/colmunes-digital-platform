import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ImpactCard from "@/components/impact/ImpactCard";
import { impact } from "@/data/impact";

export default function Impact() {
  return (
    <section
      id="impacto"
      className="bg-gradient-to-r from-sky-900 to-blue-700 py-24"
    >
      <Container>

        <SectionTitle
          eyebrow="Nuestro Impacto"
          title="Transformando vidas en Colombia"
          description="Cada proyecto representa una oportunidad para mejorar la calidad de vida de cientos de familias."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {impact.map((item) => (
            <ImpactCard
              key={item.title}
              number={item.number}
              title={item.title}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}