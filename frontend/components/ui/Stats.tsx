import {
  Home,
  Users,
  Landmark,
  Building2,
} from "lucide-react";

import StatCard from "@/components/ui/StatCard";
import Container from "@/components/ui/Container";

export default function Stats() {
  return (
    <section className="-mt-20 relative z-20">
      <Container>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <StatCard
            icon={<Users />}
            value="+260"
            label="Familias Beneficiadas"
          />

          <StatCard
            icon={<Home />}
            value="+2400"
            label="Viviendas Proyectadas"
          />

          <StatCard
            icon={<Building2 />}
            value="+60"
            label="Programas Sociales"
          />

          <StatCard
            icon={<Landmark />}
            value="+440"
            label="Predios Gestionados"
          />

        </div>

      </Container>
    </section>
  );
}