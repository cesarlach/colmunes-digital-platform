import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

export default function StatCard({
  icon,
  value,
  label,
}: StatCardProps) {
  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl text-center transition duration-300 hover:scale-105">
      <div className="flex justify-center text-sky-300 mb-3 text-4xl">
        {icon}
      </div>

      <h3 className="text-3xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-2 text-slate-200">
        {label}
      </p>
    </div>
  );
}