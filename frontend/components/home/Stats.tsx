import {
  Users,
  Home,
  Building2,
  Landmark,
} from "lucide-react";

import Container from "@/components/ui/Container";
import StatCard from "@/components/ui/StatCard";

export default function Stats() {
  return (
    <section className="-mt-20 relative z-20 pb-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <StatCard
            icon={<Users size={40} />}
            value="+260"
            label="Familias Beneficiadas"
          />

          <StatCard
            icon={<Home size={40} />}
            value="+2400"
            label="Viviendas Proyectadas"
          />

          <StatCard
            icon={<Building2 size={40} />}
            value="+60"
            label="Programas Sociales"
          />

          <StatCard
            icon={<Landmark size={40} />}
            value="+440"
            label="Predios Gestionados"
          />

        </div>
      </Container>
    </section>
  );
}