import Image from "next/image";
import Container from "../ui/Container";

export default function MissionBanner() {
  return (
    <section className="relative my-24 overflow-hidden rounded-[40px]">

      <Image
        src="/images/banner/comunidad-banner.jpg"
        alt="Comunidad COLMUNES"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-sky-900/70" />

      <Container className="relative z-10 py-28 text-center text-white">

        <span className="rounded-full bg-yellow-400 px-5 py-2 font-semibold text-slate-900">
          Construimos Futuro
        </span>

        <h2 className="mt-8 text-4xl font-bold md:text-5xl">
          Transformamos comunidades
          <br />
          construyendo oportunidades.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
          Cada proyecto representa una oportunidad para brindar vivienda,
          educación, esperanza y desarrollo a cientos de familias colombianas.
        </p>

        <button className="mt-10 rounded-full bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-300">
          Conoce nuestra misión
        </button>

      </Container>

    </section>
  );
}