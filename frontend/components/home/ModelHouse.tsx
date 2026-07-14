import Container from "@/components/ui/Container";
import Image from "next/image";

export default function ModelHouse() {
  return (
    <section
      id="casa-modelo"
      className="bg-white py-24"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="uppercase tracking-[4px] text-sky-700 font-semibold">
              Proyecto Destacado
            </span>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
              Casa Modelo
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              Nuestro proyecto de vivienda busca ofrecer hogares dignos,
              funcionales y sostenibles para familias colombianas,
              promoviendo calidad de vida y desarrollo comunitario.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">

              <div className="rounded-2xl bg-sky-50 p-5">
                <h3 className="font-bold text-sky-700">Habitaciones</h3>
                <p className="mt-2 text-slate-600">2 o 3</p>
              </div>

              <div className="rounded-2xl bg-sky-50 p-5">
                <h3 className="font-bold text-sky-700">Baños</h3>
                <p className="mt-2 text-slate-600">1</p>
              </div>

              <div className="rounded-2xl bg-sky-50 p-5">
                <h3 className="font-bold text-sky-700">Sala - Comedor</h3>
                <p className="mt-2 text-slate-600">Integrada</p>
              </div>

              <div className="rounded-2xl bg-sky-50 p-5">
                <h3 className="font-bold text-sky-700">Cocina</h3>
                <p className="mt-2 text-slate-600">Abierta</p>
              </div>

            </div>
          </div>

          <div>
            <Image
              src="/images/houses/model-house.jpg"
              alt="Casa Modelo COLMUNES"
              width={900}
              height={700}
              className="rounded-3xl shadow-2xl object-cover"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}