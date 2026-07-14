import Container from "@/components/ui/Container";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-24 bg-slate-50">

      <Container>

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[0.25em] text-sky-700 font-semibold">
            Nuestra Esencia
          </span>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            Construimos oportunidades para transformar vidas
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Nuestro compromiso es generar desarrollo social sostenible,
            impulsando proyectos que fortalezcan la calidad de vida de las
            familias colombianas mediante soluciones de vivienda,
            educación, emprendimiento y bienestar comunitario.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <Target
              size={55}
              className="text-sky-700"
            />

            <h3 className="text-3xl font-bold mt-6">
              Misión
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              Promover el desarrollo integral de las comunidades mediante
              programas sociales, vivienda digna, fortalecimiento comunitario
              y proyectos que contribuyan al bienestar de las familias
              colombianas.
            </p>

          </div>

          <div className="bg-gradient-to-br from-sky-700 to-blue-900 rounded-3xl shadow-xl p-10 text-white">

            <Eye
              size={55}
            />

            <h3 className="text-3xl font-bold mt-6">
              Visión
            </h3>

            <p className="mt-6 leading-8 text-slate-100">
              Consolidarnos como una organización líder en Colombia,
              reconocida por generar impacto social, promover comunidades
              sostenibles y construir oportunidades para miles de familias.
            </p>

          </div>

        </div>

      </Container>

    </section>
  );
}