import { Hand, Sparkles, Gem } from "lucide-react";
import { serviceCategories, formatPrice } from "../data/services";
import Reveal from "./Reveal";

const icons = {
  basico: Hand,
  aplicacao: Sparkles,
  decoracao: Gem,
};

export default function Services() {
  return (
    <section id="servicos" className="px-5 sm:px-8 py-16 sm:py-24">
      <Reveal className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
        <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gold font-semibold">
          Serviços
        </span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl text-ink">
          Preços e opções
        </h2>
      </Reveal>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {serviceCategories.map((category, i) => {
          const Icon = icons[category.id];
          return (
            <Reveal key={category.id} delay={i * 100}>
              <div className="h-full rounded-2xl bg-white/70 border border-blush p-7 sm:p-8 shadow-soft hover:shadow-lift transition-shadow duration-300">
                <div className="w-11 h-11 rounded-full bg-blush-light flex items-center justify-center text-rose-dark">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-xl sm:text-2xl text-ink">
                  {category.title}
                </h3>
                <ul className="mt-5 space-y-4">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-3 text-sm sm:text-base"
                    >
                      <span className="text-ink-soft">{item.name}</span>
                      <span
                        aria-hidden="true"
                        className="flex-1 border-b border-dotted border-blush translate-y-[-3px]"
                      />
                      <span className="font-semibold text-ink whitespace-nowrap">
                        {formatPrice(item.price)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
