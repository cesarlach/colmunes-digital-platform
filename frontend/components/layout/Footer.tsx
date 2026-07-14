import Container from "@/components/ui/Container";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-slate-900 text-white pt-20 pb-10"
    >
      <Container>

        <div className="grid lg:grid-cols-4 gap-12">

          <div>

            <h2 className="text-3xl font-bold">
              COLMUNES
            </h2>

            <p className="mt-5 text-slate-300 leading-7">
              Construimos oportunidades y transformamos comunidades
              mediante proyectos sociales, vivienda y desarrollo
              comunitario.
            </p>

          </div>

          <div>

            <h3 className="font-semibold text-xl">
              Navegación
            </h3>

            <ul className="mt-5 space-y-3">

              <li><Link href="#">Inicio</Link></li>

              <li><Link href="#nosotros">Nosotros</Link></li>

              <li><Link href="#proyectos">Proyectos</Link></li>

              <li><Link href="#contacto">Contacto</Link></li>

            </ul>

          </div>

          <div>

            <h3 className="font-semibold text-xl">
              Contacto
            </h3>

            <div className="space-y-4 mt-5">

              <div className="flex gap-3">
                <Phone size={18}/>
                <span>+57 XXX XXX XXXX</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18}/>
                <span>contacto@colmunes.org</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18}/>
                <span>Bogotá D.C. - Colombia</span>
              </div>

            </div>

          </div>

          <div>

            <h3 className="font-semibold text-xl">
  Redes sociales
</h3>

<p className="mt-5 text-slate-300">
  Próximamente estaremos conectados con nuestras redes oficiales.
</p>

          </div>

        </div>

        <div className="border-t border-slate-700 mt-16 pt-8 text-center text-slate-400">

          © {new Date().getFullYear()} COLMUNES.
          Todos los derechos reservados.

        </div>

      </Container>
    </footer>
  );
}