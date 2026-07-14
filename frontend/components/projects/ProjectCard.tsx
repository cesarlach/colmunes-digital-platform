import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  button: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  button,
}: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-4 text-slate-600 leading-7">
          {description}
        </p>

        <Link
          href="#"
          className="mt-6 inline-flex rounded-full bg-sky-700 px-6 py-3 text-white font-semibold transition hover:bg-sky-800"
        >
          {button}
        </Link>
      </div>
    </div>
  );
}