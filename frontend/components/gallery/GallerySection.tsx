import Container from "../ui/Container";

export default function GallerySection() {
  return (
    <section
      id="galeria"
      className="bg-slate-50 py-24"
    >
      <Container>

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
            Nuestra Galería
          </span>

          <h2 className="mt-6 text-5xl font-bold text-sky-900">
            Así transformamos comunidades
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-yellow-400"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-600">
            Próximamente mostraremos aquí las actividades y proyectos de COLMUNES.
          </p>

        </div>

      </Container>
    </section>
  );
}