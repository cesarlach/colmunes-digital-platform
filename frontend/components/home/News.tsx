import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import NewsCard from "@/components/news/NewsCard";
import { news } from "@/data/news";

export default function News() {
  return (
    <section className="bg-white py-24">

      <Container>

        <SectionTitle
          eyebrow="Noticias"
          title="Últimas actividades"
          description="Conoce los avances, eventos y proyectos que impulsan el crecimiento de nuestras comunidades."
        />

        <div className="grid gap-10 lg:grid-cols-3">
          {news.map((item) => (
            <NewsCard
              key={item.id}
              title={item.title}
              date={item.date}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>

      </Container>

    </section>
  );
}