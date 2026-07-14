"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Inicio", href: "#" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Impacto", href: "#impacto" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logos/logo-colmunes.png"
            alt="COLMUNES"
            width={60}
            height={60}
            priority
  className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />

<div className="leading-tight">
  <h1 className="text-xl font-bold text-sky-900">
    COLMUNES
  </h1>

  <span className="block text-[11px] text-slate-500">
    Colombia Un Mundo de Esperanza
  </span>

  <p className="text-xs text-slate-500">
    Construimos oportunidades
  </p>
</div>        </Link>

        <nav className="hidden gap-8 lg:flex">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-medium text-slate-700 transition hover:text-sky-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#donar"
          className="hidden rounded-full bg-green-600 to-emerald-500 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl lg:block" 
        >
          Donar
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white lg:hidden">
          <nav className="flex flex-col p-6">
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="py-3 text-slate-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#donar"
              className="mt-4 rounded-full bg-green-600 py-3 text-center font-semibold text-white"
            >
              Donar
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}