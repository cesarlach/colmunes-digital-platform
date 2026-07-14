import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { partners } from "@/data/partners";

export default function Partners() {
  return (
    <section className="bg-slate-100 py-24">
      <Container>

        <SectionTitle
          eyebrow="Nuestros Aliados"
          title="Construimos juntos un mejor futuro"
          description="Trabajamos de la mano con organizaciones públicas y privadas comprometidas con el desarrollo social."
        />

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex h-36 items-center justify-center rounded-2xl bg-white p-6 shadow-md transition hover:shadow-xl"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={70}
                className="object-contain"
              />
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}