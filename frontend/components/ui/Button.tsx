import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-gradient-to-r from-sky-700 to-blue-600 text-white hover:scale-105 hover:shadow-xl",
    secondary:
      "border-2 border-white text-white hover:bg-white hover:text-sky-800",
  };

  return (
    <Link
      href={href}
      className={`rounded-full px-8 py-4 font-semibold transition duration-300 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}