import { Mail, Phone, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-sky-900 text-white text-sm">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">

        <div className="flex flex-wrap items-center gap-6">

          <div className="flex items-center gap-2">
            <Phone size={15} />
            <span>+57 3107692481</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={15} />
            <span>Gpesellin@colmunesong.org</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={15} />
            <span>Bogotá D.C. - Colombia</span>
          </div>

        </div>

        <span className="hidden lg:block">
          Construimos oportunidades para todos.
        </span>

      </div>

    </div>
  );
}