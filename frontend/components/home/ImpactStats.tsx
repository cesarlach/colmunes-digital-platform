import {
  Home,
  Users,
  HeartHandshake,
  GraduationCap,
} from "lucide-react";

const stats = [
  {
    icon: Home,
    value: "260+",
    title: "Viviendas",
    subtitle: "Construidas",
  },
  {
    icon: Users,
    value: "2.400+",
    title: "Personas",
    subtitle: "Beneficiadas",
  },
  {
    icon: GraduationCap,
    value: "60+",
    title: "Proyectos",
    subtitle: "Sociales",
  },
  {
    icon: HeartHandshake,
    value: "440+",
    title: "Voluntarios",
    subtitle: "Activos",
  },
];

export default function ImpactStats() {
  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-sky-900">
            Nuestro Impacto
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Más de 20 años transformando vidas en Colombia.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="
                  rounded-3xl
                  bg-slate-50
                  p-10
                  text-center
                  shadow-lg
                  transition
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >

                <Icon
                  className="mx-auto text-sky-700"
                  size={48}
                />

                <h3 className="mt-6 text-5xl font-bold text-sky-900">
                  {item.value}
                </h3>

                <p className="mt-4 font-semibold text-slate-700">
                  {item.title}
                </p>

                <p className="text-slate-500">
                  {item.subtitle}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}