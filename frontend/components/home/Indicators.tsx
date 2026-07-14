import {
  Users,
  Sprout,
  House,
  HeartHandshake,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "260+",
    title: "Familias",
    subtitle: "Legalizadas",
    color: "bg-blue-100",
    iconColor: "text-blue-700",
  },
  {
    icon: Sprout,
    number: "60+",
    title: "Familias",
    subtitle: "Capacitadas",
    color: "bg-green-100",
    iconColor: "text-green-700",
  },
  {
    icon: House,
    number: "2400+",
    title: "Viviendas",
    subtitle: "Proyectadas",
    color: "bg-sky-100",
    iconColor: "text-sky-700",
  },
  {
    icon: HeartHandshake,
    number: "440+",
    title: "Familias",
    subtitle: "Beneficiarias",
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
];

export default function Indicators() {
  return (
    <section className="-mt-12 relative z-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 rounded-3xl bg-white p-8 shadow-2xl md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.number}
                className="flex items-center gap-5 transition duration-300 hover:-translate-y-2"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full ${item.color}`}
                >
                  <Icon
                    size={30}
                    className={item.iconColor}
                  />
                </div>

                <div>

                  <h3 className="text-4xl font-bold text-sky-900">
                    {item.number}
                  </h3>

                  <p className="font-semibold text-slate-800">
                    {item.title}
                  </p>

                  <p className="text-slate-500">
                    {item.subtitle}
                  </p>

                </div>

              </div>

            );

          })}

        </div>
      </div>
    </section>
  );
}