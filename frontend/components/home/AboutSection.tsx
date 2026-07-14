import Image from "next/image";
import PrimaryButton from "../ui/PrimaryButton";
import {
  Home,
  GraduationCap,
  HeartHandshake,
  Users,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Vivienda digna",
  },
  {
    icon: GraduationCap,
    title: "Educación",
  },
  {
    icon: HeartHandshake,
    title: "Desarrollo Social",
  },
  {
    icon: Users,
    title: "Fortalecimiento Comunitario",
  },
];

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* =================== FOTO =================== */}

        <div className="relative">

          <Image
            src="/images/about/comunidad.jpg"
            alt="Comunidad COLMUNES"
            width={700}
            height={800}
            className="rounded-3xl shadow-2xl"
          />

          {/* Tarjeta flotante */}

          <div
            className="
              absolute
              -bottom-10
              right-8
              rounded-3xl
              bg-white
              p-8
              shadow-2xl
            "
          >
            <p className="text-5xl font-bold text-sky-900">
              20+
            </p>

            <p className="mt-2 text-slate-600">
              Años transformando comunidades
            </p>
          </div>

        </div>

        {/* =================== TEXTO =================== */}

        <div>

          <span
            className="
              rounded-full
              bg-sky-100
              px-5
              py-2
              text-sm
              font-semibold
              text-sky-700
            "
          >
            ¿Quiénes Somos?
          </span>

          <h2 className="mt-6 text-5xl font-bold text-sky-900">
            Fundación Colombia
            <br />
            Un Mundo de Esperanza
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Somos una organización sin ánimo de lucro comprometida con la
            transformación social de comunidades vulnerables mediante proyectos
            de vivienda, educación, desarrollo comunitario y fortalecimiento de
            oportunidades para las familias colombianas.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {features.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="flex items-center gap-4"
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-green-100
                    "
                  >
                    <Icon
                      size={22}
                      className="text-green-700"
                    />
                  </div>

                  <span className="font-semibold text-slate-700">
                    {item.title}
                  </span>

                </div>

              );

            })}

          </div>

          <div className="mt-12">

            <PrimaryButton href="#programas">
              Conoce Nuestra Historia
            </PrimaryButton>

          </div>

        </div>

      </div>
    </section>
  );
}