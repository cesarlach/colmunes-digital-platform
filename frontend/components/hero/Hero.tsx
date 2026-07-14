import Container from "../ui/Container";
import HeroContent from "./HeroContent";
import HeroGallery from "./HeroGallery";

export default function Hero() {
  return (
    <section className="bg-white pt-8 pb-12">

      <Container>

        <div className="ml-10 grid gap-5 lg:grid-cols-[3.1fr_0.9fr]">

          {/* Imagen principal + texto */}

          <HeroContent />

          {/* Galería derecha */}

          <HeroGallery />

        </div>

      </Container>

    </section>
  );
}