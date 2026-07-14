interface Props {
  title: string;
  description: string;
}

export default function InfoCard({
  title,
  description,
}: Props) {
  return (
    <div
      className="
      rounded-3xl
      bg-white
      p-8
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
    "
    >
      <h3 className="mb-5 text-2xl font-bold text-sky-900">
        {title}
      </h3>

      <p className="leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}