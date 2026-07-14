import Link from "next/link";

const links = [
  { label: "Inicio", href: "#" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Vivienda", href: "#casa-modelo" },
  { label: "Galería", href: "#galeria" },
  { label: "Transparencia", href: "#transparencia" },
  { label: "Contacto", href: "#contacto" },
];

export default function NavLinks() {
  return (
    <>
      {links.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="
            text-slate-700
            font-medium
            transition
            hover:text-sky-700
          "
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}