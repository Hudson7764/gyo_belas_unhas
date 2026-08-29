import { MessageCircle, AtSign, Clock, MapPin } from "lucide-react";
import { site } from "../data/site";
import Reveal from "./Reveal";
import profilePhoto from "../assets/gyo-profile.jpeg";

const items = [
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
    value: "Horários somente agendados com antecedência",
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
          Onde estou
        </h2>
      </Reveal>

      <Reveal className="mx-auto max-w-[220px] sm:max-w-[240px] mb-8 sm:mb-10">
        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lift ring-4 ring-white">
          <img
            src={profilePhoto}
            alt={`${site.name}, ${site.role} em ${site.location}`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </Reveal>

      <Reveal delay={80} className="max-w-md mx-auto mb-8 sm:mb-10">
        <div className="rounded-[2rem] bg-white/70 border border-blush p-7 sm:p-8 text-center shadow-soft">
          <span className="mx-auto w-11 h-11 rounded-full bg-blush-light flex items-center justify-center text-rose-dark">
            <MapPin size={20} strokeWidth={1.8} />
          </span>
          <p className="mt-4 text-base sm:text-lg text-ink">
            {site.address.street}
            <br />
            {site.address.neighborhood} — {site.address.city}/
            {site.address.state}
          </p>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-cream px-7 py-3.5 text-sm tracking-wide shadow-lift hover:bg-rose-dark transition-colors duration-300 w-full sm:w-auto"
          >
            <MapPin size={16} strokeWidth={2} />
            Como chegar
          </a>
        </div>
      </Reveal>

      <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-5">
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
