import Container from "@/components/ui/Container";
import {
  House,
  Users,
  MapPin,
  HeartHandshake,
} from "lucide-react";

const stats = [
  {
    icon: House,
    value: "500+",
    label: "Viviendas",
  },
  {
    icon: Users,
    value: "3.000+",
    label: "Familias",
  },
  {
    icon: MapPin,
    value: "25+",
    label: "Municipios",
  },
  {
    icon: HeartHandshake,
    value: "100+",
    label: "Proyectos",
  },
];

export default function Impact() {
  return (
    <section
      id="impacto"
      className="bg-sky-900 py-28 text-white"
    >
      <Container>

        <div className="text-center">

          <span className="font-semibold uppercase tracking-[4px] text-sky-300">
            Nuestro Impacto
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            Transformando comunidades
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-sky-100">
            Cada proyecto representa una oportunidad para mejorar la calidad
            de vida de miles de familias colombianas.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.label}
                className="
                rounded-3xl
                bg-white/10
                p-10
                text-center
                backdrop-blur-md
                transition
                duration-300
                hover:bg-white/20
                "
              >

                <Icon
                  className="mx-auto text-sky-300"
                  size={50}
                />

                <h3 className="mt-6 text-5xl font-bold">

                  {item.value}

                </h3>

                <p className="mt-4 text-sky-100">

                  {item.label}

                </p>

              </div>

            );

          })}

        </div>

      </Container>
    </section>
  );
}