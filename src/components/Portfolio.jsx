import { useState } from "react";
import { portfolioItems } from "../data/portfolio";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";

const spanClasses = {
  tall: "row-span-2",
  wide: "col-span-2",
  normal: "",
};

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="portfolio" className="px-5 sm:px-8 py-16 sm:py-24 bg-cream-dark/60">
      <Reveal className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
        <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gold font-semibold">
          Portfólio
        </span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl text-ink">
          Trabalhos recentes
        </h2>
        <p className="mt-4 text-base text-ink-soft text-balance">
          Uma seleção de unhas feitas com carinho. Toque em uma foto para ver
          em detalhe.
        </p>
      </Reveal>

      <Reveal delay={100} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[170px] sm:auto-rows-[220px] md:auto-rows-[240px] grid-flow-dense">
          {portfolioItems.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`group relative overflow-hidden rounded-2xl bg-blush focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-dark ${
                spanClasses[item.span] ?? ""
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300"
              />
            </button>
          ))}
        </div>
      </Reveal>

      {activeIndex !== null && (
        <Lightbox
          items={portfolioItems}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  );
}
