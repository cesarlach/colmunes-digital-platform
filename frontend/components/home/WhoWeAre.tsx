import Image from "next/image";
import Container from "@/components/ui/Container";
import FeatureItem from "@/components/ui/FeatureItem";

export default function WhoWeAre() {
  return (
    <section
      id="nosotros"
      className="py-28 bg-white"
    >
      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Imagen */}
          <div className="relative">

            <div className="overflow-hidden rounded-[40px] shadow-2xl">

              <Image
                src="/images/about/comunidad-01.jpg"
                alt="Comunidad COLMUNES"
                width={700}
                height={620}
                className="w-full h-[620px] object-cover transition duration-500 hover:scale-105"
              />

            </div>

            {/* Tarjeta flotante */}

            <div
              className="
              absolute
              -bottom-8
              right-8
              rounded-3xl
              bg-white
              p-6
              shadow-2xl
              "
            >

              <p className="text-4xl font-bold text-sky-700">
                15+
              </p>

              <p className="text-slate-600">
                Años transformando comunidades
              </p>

            </div>

          </div>

          {/* Información */}

          <div>

            <span className="font-semibold uppercase tracking-widest text-sky-700">
              Quiénes Somos
            </span>

            <h2 className="mt-4 text-5xl font-bold leading-tight text-slate-900">

              Construimos oportunidades para transformar comunidades.

            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">

              COLMUNES es una organización comprometida con el desarrollo
              social, la vivienda digna, la inclusión y el fortalecimiento
              comunitario. Trabajamos de la mano con las comunidades para
              generar oportunidades que mejoren la calidad de vida de miles
              de familias colombianas.

            </p>

            <div className="mt-10 space-y-5">

              <FeatureItem text="Programas de vivienda social" />

              <FeatureItem text="Fortalecimiento comunitario" />

              <FeatureItem text="Inclusión de poblaciones vulnerables" />

              <FeatureItem text="Desarrollo social sostenible" />

            </div>

            <div className="mt-12">

              <button
                className="
                rounded-full
                bg-sky-700
                px-8
                py-4
                text-white
                font-semibold
                shadow-xl
                transition
                hover:bg-sky-800
                "
              >
                Conoce Nuestra Historia
              </button>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}