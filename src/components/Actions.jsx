import { MessageCircle, MapPin, Images } from "lucide-react";
import { site, whatsappUrlWithMessage } from "../data/site";
import Reveal from "./Reveal";

const actions = [
  {
    icon: MessageCircle,
    label: "Fale comigo pelo WhatsApp",
    href: whatsappUrlWithMessage("Olá! Gostaria de agendar um horário 💅"),
    external: true,
  },
  {
    icon: MapPin,
    label: "Como chegar",
    href: site.mapsUrl,
    external: true,
  },
  {
    icon: Images,
    label: "Ver portfólio",
    href: "#portfolio",
    external: false,
  },
];

export default function Actions() {
  return (
    <section aria-label="Ações rápidas" className="px-5 sm:px-8 pb-16 sm:pb-20">
      <Reveal className="max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <a
                key={action.label}
                href={action.href}
                {...(action.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-center gap-3 rounded-2xl bg-white/70 border border-blush px-5 py-4 sm:flex-col sm:text-center sm:gap-2.5 sm:py-6 shadow-soft hover:shadow-lift hover:border-rose transition-all duration-300"
              >
                <span className="shrink-0 w-11 h-11 rounded-full bg-blush-light flex items-center justify-center text-rose-dark">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <span className="text-sm sm:text-base font-medium text-ink">
                  {action.label}
                </span>
              </a>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
