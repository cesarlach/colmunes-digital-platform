import Container from "@/components/ui/Container";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="nosotros"
      className="py-24 bg-white"
    >
      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="uppercase tracking-[4px] text-sky-700 font-semibold">
              Quiénes Somos
            </span>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
              Colombia Un Mundo de Esperanza
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              COLMUNES trabaja para mejorar la calidad de vida de miles de
              familias mediante proyectos de vivienda digna, desarrollo
              comunitario, fortalecimiento social y generación de oportunidades.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Nuestro propósito es construir comunidades sostenibles donde
              las familias puedan crecer con seguridad, bienestar y esperanza.
            </p>

          </div>

          <div className="relative">

            <Image
              src="/images/about/about-placeholder.jpg"
              alt="COLMUNES"
              width={700}
              height={700}
              className="rounded-3xl shadow-2xl object-cover"
            />

          </div>

        </div>

      </Container>
    </section>
  );
}