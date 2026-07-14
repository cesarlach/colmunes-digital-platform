import Image from "next/image";
import Container from "../ui/Container";

export default function FeaturedProject() {
  return (
    <section
      id="proyecto-emblema"
      className="py-24 bg-white"
    >
      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Imagen */}

          <div className="relative overflow-hidden rounded-[32px] shadow-2xl">

            <Image
              src="/images/projects/casa-modelo.jpg"
              alt="Casa Modelo COLMUNES"
              width={900}
              height={700}
              className="w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          {/* Contenido */}

          <div>

            <span className="rounded-full bg-yellow-100 px-5 py-2 font-semibold text-yellow-700">
              Proyecto Emblema
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight text-sky-900">
              Proyecto Integral
              <br />
              de Vivienda Social
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Nuestro proyecto busca brindar soluciones de vivienda digna,
              fortaleciendo el desarrollo social, económico y comunitario de
              cientos de familias colombianas.
            </p>

            <ul className="mt-10 space-y-4 text-slate-700">

              <li>✅ Vivienda de interés social.</li>

              <li>✅ Desarrollo comunitario.</li>

              <li>✅ Acompañamiento social.</li>

              <li>✅ Sostenibilidad.</li>

            </ul>

            <button className="mt-10 rounded-full bg-sky-900 px-8 py-4 font-semibold text-white transition hover:bg-sky-800">
              Conocer el Proyecto
            </button>

          </div>

        </div>

      </Container>
    </section>
  );
}