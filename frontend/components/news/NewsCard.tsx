import Image from "next/image";

interface NewsCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
}

export default function NewsCard({
  title,
  date,
  description,
  image,
}: NewsCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-60">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-8">
        <span className="text-sm text-sky-700 font-semibold">
          {date}
        </span>

        <h3 className="mt-3 text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>

        <button className="mt-6 rounded-full bg-sky-700 px-6 py-3 text-white font-semibold transition hover:bg-sky-800">
          Leer más
        </button>
      </div>
    </div>
  );
}