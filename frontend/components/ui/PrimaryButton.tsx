import Link from "next/link";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function PrimaryButton({
  href,
  children,
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className="
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-green-600
        px-7
        py-3
        font-semibold
        text-white
        transition-all
        duration-300
        hover:bg-green-700
        hover:shadow-lg
      "
    >
      {children}
    </Link>
  );
}