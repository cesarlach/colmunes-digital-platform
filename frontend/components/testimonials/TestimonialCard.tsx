import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  city: string;
  text: string;
  image?: string;
}

export default function TestimonialCard({
  name,
  city,
  text,
  image,
}: TestimonialCardProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="flex items-center gap-4">

        {image ? (
          <Image
            src={image}
            alt={name}
            width={70}
            height={70}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-sky-900 text-2xl font-bold text-white">
            {name.substring(0, 1).toUpperCase()}
          </div>
        )}

        <div>
          <h3 className="font-bold text-slate-900">
            {name}
          </h3>

          <p className="text-sm text-slate-500">
            {city}
          </p>
        </div>

      </div>

      <p className="mt-6 italic leading-8 text-slate-600">
        "{text}"
      </p>

    </div>
  );
}