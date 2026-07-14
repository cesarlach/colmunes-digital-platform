import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ProgramCard({
  title,
  description,
  image,
}: ProgramCardProps) {
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-[28px]
      bg-white
      shadow-lg
      transition-all
      duration-500
      hover:-translate-y-3
      hover:shadow-2xl
      "
    >
      <div className="overflow-hidden">

        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="
          h-60
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
          "
        />

      </div>

      <div className="p-8">

        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-slate-600">
          {description}
        </p>

        <button
          className="
          mt-8
          flex
          items-center
          gap-2
          rounded-full
          bg-sky-700
          px-6
          py-3
          font-semibold
          text-white
          transition
          hover:bg-sky-800
          "
        >
          Conocer más
          <ArrowRight size={18} />
        </button>

      </div>

    </div>
  );
}