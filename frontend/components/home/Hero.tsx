"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Imagen de fondo */}
      <Image
        src="/images/hero/hero-placeholder.jpg"
        alt="COLMUNES"
        fill
        priority
        className="object-cover"
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-sky-900/50" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">

            <span className="rounded-full bg-sky-700/20 border border-sky-300 px-5 py-2 text-sm font-semibold tracking-widest uppercase text-sky-200">
              Fundación COLMUNES
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-7xl">
              Colombia
              <br />
              Un Mundo de Esperanza
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-200">
              Construimos oportunidades, transformamos comunidades y
              promovemos el desarrollo social mediante proyectos de
              vivienda, educación y fortalecimiento comunitario.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Button href="#proyectos">
                Conoce nuestros proyectos
              </Button>

              <Button
                href="#contacto"
                variant="secondary"
              >
                Contáctanos
              </Button>

            </div>

          </div>

        </div>

      </div>

      {/* Flecha */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white">
        <ChevronDown size={42} />
      </div>

    </section>
  );
}