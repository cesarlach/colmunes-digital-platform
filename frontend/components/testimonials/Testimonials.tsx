import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-sky-900">
            Lo que dicen nuestras comunidades
          </h2>

          <p className="mt-6 text-slate-600">
            Historias reales de personas que han sido parte de los programas de
            COLMUNES.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <TestimonialCard
            name="María Gómez"
            city="Bogotá"
            text="Gracias a COLMUNES hoy tenemos nuevas oportunidades para nuestra familia."
            image="/images/team/default.jpg"
          />

          <TestimonialCard
            name="José Ramírez"
            city="Soacha"
            text="El acompañamiento recibido ha sido fundamental."
            image="/images/team/default.jpg"
          />

          <TestimonialCard
            name="Ana Rodríguez"
            city="Cundinamarca"
            text="COLMUNES nos ha permitido crecer como comunidad."
            image="/images/team/default.jpg"
          />

        </div>

      </div>
    </section>
  );
}