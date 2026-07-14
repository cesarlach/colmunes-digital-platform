import { CheckCircle2 } from "lucide-react";

interface FeatureItemProps {
  text: string;
}

export default function FeatureItem({
  text,
}: FeatureItemProps) {
  return (
    <div className="flex items-center gap-3">

      <CheckCircle2
        className="text-green-600"
        size={22}
      />

      <span className="text-lg text-slate-700">
        {text}
      </span>

    </div>
  );
}