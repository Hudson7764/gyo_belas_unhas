import { MapPin, MessageCircle, AtSign, Clock } from "lucide-react";
import { site } from "../data/site";
import Reveal from "./Reveal";

const items = [
  {
    icon: MapPin,
    label: "Localização",
    value: site.location,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.whatsappDisplay,
    href: site.whatsappUrl,
  },
  {
    icon: AtSign,
    label: "Instagram",
    value: site.instagramHandle,
    href: site.instagramUrl,
  },
  {
    icon: Clock,
    label: "Atendimento",
    value: "Somente com agendamento",
  },
];

export default function Contact() {
  return (
    <section id="contato" className="px-5 sm:px-8 py-16 sm:py-24">
      <Reveal className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
        <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gold font-semibold">
          Contato
        </span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl text-ink">
          Informações
        </h2>
      </Reveal>

      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-5">
        {items.map((item, i) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-center gap-4 rounded-2xl bg-white/70 border border-blush p-5 sm:p-6 h-full transition-shadow duration-300 hover:shadow-soft">
              <span className="shrink-0 w-11 h-11 rounded-full bg-blush-light flex items-center justify-center text-rose-dark">
                <Icon size={20} strokeWidth={1.8} />
              </span>
              <span className="text-left">
                <span className="block text-xs uppercase tracking-wide text-ink-soft/80">
                  {item.label}
                </span>
                <span className="block text-base text-ink font-medium">
                  {item.value}
                </span>
              </span>
            </div>
          );

          return (
            <Reveal key={item.label} delay={i * 80}>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
