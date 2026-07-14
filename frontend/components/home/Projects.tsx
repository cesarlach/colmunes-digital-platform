import Container from "@/components/ui/Container";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="bg-slate-50 py-24"
    >
      <Container>

        <SectionTitle
  eyebrow="Nuestros Proyectos"
  title="Transformando comunidades"
  description="Desarrollamos proyectos que generan oportunidades para las familias colombianas mediante vivienda, desarrollo social y educación."
/>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              button={project.button}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}