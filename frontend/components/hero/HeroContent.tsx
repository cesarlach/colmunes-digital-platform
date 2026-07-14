import PrimaryButton from "../ui/PrimaryButton";

export default function HeroContent() {
  return (
    <div
      className="
        relative
        h-[480px]
        overflow-hidden
        rounded-3xl
        bg-cover
        bg-center
        shadow-2xl
      "
      style={{
        backgroundImage: "url('/images/hero/hero-main.jpg')",
        backgroundPosition: "center 25%",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/45"></div>

      {/* Contenido */}

      <div className="relative z-10 flex h-full items-center px-32 -translate-y-8">

        <div className="max-w-2xl">
<span
  className="
    inline-flex
    items-center
    rounded-full
    bg-white/20
    px-5
    py-2
    text-sm
    font-semibold
    tracking-wide
    text-white
    backdrop-blur-md
  "
>
</span>
          <h1
            className="
              text-4xl
              lg:text-5xl
              font-extrabold
              leading-tight
              text-white
            "
          >
            CONSTRUYENDO
            <br />
            UN MUNDO
            <br />
            DE ESPERANZA
          </h1>

          <p
            className="
              mt-8
              max-w-xl
              text-xl
              leading-9
              text-white/90
            "
          >
            Transformamos comunidades vulnerables mediante
            vivienda digna, educación, emprendimiento y
            desarrollo sostenible.
          </p>

          <div className="mt-10 flex gap-5">

            <PrimaryButton href="#donar">
              Haz tu Donación
            </PrimaryButton>

            <PrimaryButton href="#proyectos">
              Conoce Nuestros Proyectos
            </PrimaryButton>

          </div>

        </div>

      </div>

    </div>
  );
}