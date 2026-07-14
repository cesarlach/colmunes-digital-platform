import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">

      <Container>

        <SectionTitle
          eyebrow="Testimonios"
          title="Historias que inspiran"
          description="Conoce algunas experiencias de personas y familias que han participado en nuestros proyectos."
        />

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              city={item.city}
              text={item.text}
              image={item.image}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}