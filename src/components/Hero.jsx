import { MessageCircle, Sparkles } from "lucide-react";
import { site } from "../data/site";
import heroImage from "../assets/nail-01.jpeg";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 px-5 sm:px-8 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blush blur-3xl opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 -left-32 w-64 h-64 rounded-full bg-gold-light blur-3xl opacity-30"
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="animate-fade-up text-center md:text-left">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-[0.2em] uppercase text-gold font-semibold">
            <Sparkles size={14} strokeWidth={2} />
            Manicure &amp; Nail Designer
          </span>

          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-ink text-balance">
            Unhas que valorizam o seu estilo.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-ink-soft max-w-md mx-auto md:mx-0 text-balance">
            Manicure e Nail Designer em {site.location}, com cuidado em cada
            detalhe.
          </p>

          <div className="mt-8 flex flex-col items-center md:items-start gap-3">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-dark text-cream px-8 py-4 text-sm sm:text-base tracking-wide shadow-lift hover:bg-ink transition-colors duration-300 w-full sm:w-auto"
            >
              <MessageCircle size={18} strokeWidth={2} />
              Agendar horário
            </a>
            <span className="text-xs sm:text-sm text-ink-soft/80 italic">
              Atendimento somente com agendamento
            </span>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative mx-auto max-w-sm md:max-w-none aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lift">
            <img
              src={heroImage}
              alt="Unhas cromadas em tom nude com acabamento perolado, trabalho de nail design"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div
            aria-hidden="true"
            className="hidden sm:block absolute -bottom-6 -left-6 w-28 h-28 rounded-2xl border border-gold-light/60"
          />
        </div>
      </div>
    </section>
  );
}
