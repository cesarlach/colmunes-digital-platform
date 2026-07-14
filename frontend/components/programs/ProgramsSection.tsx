import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProgramCard from "./ProgramCard";
import { programs } from "@/data/programs";

export default function ProgramsSection() {
  return (
    <section
      id="programas"
      className="bg-slate-50 py-28"
    >
      <Container>

        <SectionTitle
          eyebrow="Nuestros Programas"
          title="Transformando vidas"
          description="Cada programa busca generar bienestar y oportunidades para las comunidades."
        />

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {programs.map((program) => (
            <ProgramCard
              key={program.title}
              title={program.title}
              description={program.description}
              image={program.image}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}