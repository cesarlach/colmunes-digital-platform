import PrimaryButton from "@/components/ui/PrimaryButton";

export default function DonationCard() {
  return (
    <div
      className="
      rounded-3xl
      bg-sky-900
      p-10
      text-white
      shadow-2xl
    "
    >
      <h3 className="text-3xl font-bold">
        Donaciones
      </h3>

      <p className="mt-6 leading-8 text-sky-100">
        Tu aporte nos permite continuar construyendo viviendas,
        desarrollando proyectos sociales y transformando comunidades.
      </p>

      <div className="mt-8">
        <PrimaryButton href="#donar">
          Donar Ahora
        </PrimaryButton>
      </div>
    </div>
  );
}