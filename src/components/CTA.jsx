import { MessageCircle } from "lucide-react";
import { site } from "../data/site";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="px-5 sm:px-8 py-16 sm:py-20">
      <Reveal className="max-w-4xl mx-auto text-center rounded-[2rem] bg-gradient-to-br from-blush-light via-blush to-gold-light/40 px-6 py-14 sm:px-14 sm:py-20 shadow-soft">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink text-balance">
          Pronta para escolher sua próxima unha?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-ink-soft">
          Agende seu horário e venha cuidar das suas unhas.
        </p>
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-cream px-8 py-4 text-sm sm:text-base tracking-wide shadow-lift hover:bg-rose-dark transition-colors duration-300"
        >
          <MessageCircle size={18} strokeWidth={2} />
          Agendar pelo WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
