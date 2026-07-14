import Link from "next/link";

interface NavLinkProps {
  label: string;
  href: string;
  className?: string;
}

export default function NavLink({
  label,
  href,
  className = "",
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`
        text-slate-700
        font-medium
        transition
        hover:text-sky-700
        ${className}
      `}
    >
      {label}
    </Link>
  );
}