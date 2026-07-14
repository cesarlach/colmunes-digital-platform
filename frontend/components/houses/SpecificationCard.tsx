interface SpecificationCardProps {
  label: string;
  value: string;
}

export default function SpecificationCard({
  label,
  value,
}: SpecificationCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:shadow-lg">
      <h3 className="text-sm uppercase tracking-wide text-slate-500">
        {label}
      </h3>

      <p className="mt-3 text-2xl font-bold text-sky-800">
        {value}
      </p>
    </div>
  );
}