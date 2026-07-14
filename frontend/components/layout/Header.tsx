"use client";

import Image from "next/image";
import Link from "next/link";

import TopBar from "./TopBar";
import PrimaryButton from "../ui/PrimaryButton";

const menu = [
  { name: "Inicio", href: "#" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Programas", href: "#programas" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Galería", href: "#galeria" },
  { name: "Contacto", href: "#contacto" },
];

export default function Header() {
  return (
    <>
      <TopBar />

      <header className="sticky top-0 z-50 bg-white shadow-sm">

        <div className="mx-auto max-w-7xl px-10">

          <div className="flex h-24 items-center">

            {/* ===================== LOGO ===================== */}

            <div className="ml-10 flex w-[420px] items-center">

              <Link
                href="/"
                className="flex items-center gap-4 translate-x-10"
              >
                <Image
                  src="/images/logos/logo-colmunes.png"
                  alt="COLMUNES"
                  width={90}
                  height={90}
                  priority
                  className="h-auto object-contain"
                />

                <div className="leading-tight">

                  <h1 className="text-2xl font-bold tracking-wide text-sky-900">
                    COLMUNES
                  </h1>

                  <p className="text-sm text-slate-600">
                    Fundación Colombia
                  </p>

                  <p className="text-sm font-semibold text-sky-700">
                    Un Mundo de Esperanza
                  </p>

                </div>

              </Link>

            </div>

            {/* ===================== MENÚ ===================== */}

            <nav className="hidden flex-1 justify-center lg:flex">

              <ul className="flex items-center gap-10">

                {menu.map((item) => (

                  <li key={item.name}>

                    <Link
                      href={item.href}
                      className="
                        text-[15px]
                        font-medium
                        text-slate-700
                        transition
                        duration-300
                        hover:text-sky-700
                      "
                    >
                      {item.name}
                    </Link>

                  </li>

                ))}

              </ul>

            </nav>

            {/* ===================== BOTÓN ===================== */}

            <div className="flex w-[280px] justify-center">

              <PrimaryButton href="#donar">
                Donar Ahora
              </PrimaryButton>

            </div>

          </div>

        </div>

      </header>
    </>
  );
}