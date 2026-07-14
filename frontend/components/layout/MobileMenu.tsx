"use client";

import NavLink from "./NavLink";

interface MobileMenuProps {
  open: boolean;
}

export default function MobileMenu({ open }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="md:hidden bg-white shadow-xl border-t">
      <div className="flex flex-col gap-5 p-6">

        <NavLink label="Inicio" href="#" />
        <NavLink label="Nosotros" href="#nosotros" />
        <NavLink label="Proyectos" href="#proyectos" />
        <NavLink label="Impacto" href="#impacto" />
        <NavLink label="Galería" href="#galeria" />
        <NavLink label="Transparencia" href="#transparencia" />
        <NavLink label="Contacto" href="#contacto" />

        <button className="bg-sky-700 text-white rounded-xl py-3 font-semibold hover:bg-sky-800 transition">
          Donar
        </button>

      </div>
    </div>
  );
}