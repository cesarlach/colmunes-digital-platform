import Container from "@/components/ui/Container";
import { ArrowRight, House, HeartHandshake } from "lucide-react";

export default function FeaturedProject() {
  return (
    <section
      id="proyectos"
      className="py-28 bg-gradient-to-r from-sky-900 via-blue-800 to-sky-700 text-white"
    >
      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="uppercase tracking-[0.25em] text-sky-200 font-semibold">
              Proyecto Estratégico
            </span>

            <h2 className="text-5xl font-bold mt-6 leading-tight">
              Colombia Un Mundo de Esperanza
            </h2>

            <p className="mt-8 text-lg leading-8 text-sky-100">
              Nuestro principal proyecto busca promover el acceso a vivienda
              digna, fortalecer el desarrollo comunitario y generar
              oportunidades sostenibles para miles de familias colombianas,
              articulando esfuerzos con entidades públicas, privadas y la
              sociedad civil.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#contacto"
                className="rounded-full bg-white text-sky-900 px-8 py-4 font-semibold hover:bg-slate-100 transition"
              >
                Quiero apoyar
              </a>

              <a
                href="#galeria"
                className="rounded-full border border-white px-8 py-4 flex items-center gap-2 hover:bg-white/10 transition"
              >
                Ver proyecto
                <ArrowRight size={18} />
              </a>

            </div>

          </div>

          <div className="grid gap-6">

            <div className="rounded-3xl bg-white/10 backdrop-blur-md p-8">
              <House size={42} className="mb-4" />
              <h3 className="text-2xl font-bold">
                Vivienda de Interés Social
              </h3>
              <p className="mt-4 text-sky-100">
                Desarrollo de soluciones habitacionales para familias
                vulnerables y comunidades en crecimiento.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 backdrop-blur-md p-8">
              <HeartHandshake size={42} className="mb-4" />
              <h3 className="text-2xl font-bold">
                Desarrollo Comunitario
              </h3>
              <p className="mt-4 text-sky-100">
                Programas sociales orientados al fortalecimiento de las
                comunidades y al mejoramiento de su calidad de vida.
              </p>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}