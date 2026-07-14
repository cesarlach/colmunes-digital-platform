import Image from "next/image";
import Container from "../ui/Container";

export default function HouseModelSection() {
  return (
    <section className="bg-slate-50 py-24">

      <Container>

        <div className="mb-16 text-center">

          <span className="rounded-full bg-yellow-100 px-5 py-2 font-semibold text-yellow-700">
            Proyecto Emblema
          </span>

          <h2 className="mt-6 text-5xl font-bold text-sky-900">
            Proyecto de Vivienda Social
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            COLMUNES desarrolla soluciones de vivienda digna para familias
            vulnerables mediante modelos sostenibles y proyectos comunitarios.
          </p>

        </div>

        <div className="grid gap-14 lg:grid-cols-2">

          {/* Fachada */}

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

            <Image
              src="/images/houses/house-model.jpg"
              alt="Casa Modelo"
              width={800}
              height={900}
              className="w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>
{/* Plano Arquitectónico */}

<div className="mt-24">

  <div className="text-center">

    <span className="rounded-full bg-sky-100 px-5 py-2 font-semibold text-sky-700">
      Plano Arquitectónico
    </span>

    <h3 className="mt-6 text-4xl font-bold text-sky-900">
      Distribución de la Casa Modelo
    </h3>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
      El diseño arquitectónico optimiza los espacios para brindar comodidad,
      funcionalidad y bienestar a las familias beneficiarias.
    </p>

  </div>

  <div className="mt-12 overflow-hidden rounded-[32px] bg-white p-6 shadow-2xl">

    <Image
      src="/images/houses/house-plan.jpg"
      alt="Plano Arquitectónico"
      width={1400}
      height={900}
      className="w-full rounded-2xl object-contain"
    />

  </div>

</div>
          {/* Información */}

          <div className="flex flex-col justify-center">

            <h3 className="text-3xl font-bold text-sky-900">
              Casa Modelo
            </h3>

            <p className="mt-6 text-slate-600 leading-8">
              Nuestro modelo de vivienda está diseñado para ofrecer espacios
              funcionales, seguros y sostenibles para familias colombianas.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">

              <div className="rounded-2xl bg-white p-5 shadow">

                <h4 className="font-bold text-sky-900">
                  Área
                </h4>

                <p>36.45 m²</p>

              </div>

              <div className="rounded-2xl bg-white p-5 shadow">

                <h4 className="font-bold text-sky-900">
                  Habitaciones
                </h4>

                <p>1 Alcoba</p>

              </div>

              <div className="rounded-2xl bg-white p-5 shadow">

                <h4 className="font-bold text-sky-900">
                  Baño
                </h4>

                <p>1</p>

              </div>

              <div className="rounded-2xl bg-white p-5 shadow">

                <h4 className="font-bold text-sky-900">
                  Espacios
                </h4>

                <p>Sala · Comedor · Cocina · Patio</p>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}