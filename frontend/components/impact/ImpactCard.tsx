interface ImpactCardProps {
  number: string;
  title: string;
}

export default function ImpactCard({
  number,
  title,
}: ImpactCardProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg text-center transition hover:-translate-y-2 hover:shadow-2xl">

      <h3 className="text-5xl font-bold text-sky-700">
        {number}
      </h3>

      <p className="mt-5 text-slate-600 text-lg">
        {title}
      </p>

    </div>
  );
}