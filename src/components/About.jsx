import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="px-5 sm:px-8 py-16 sm:py-24">
      <Reveal className="max-w-2xl mx-auto text-center">
        <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gold font-semibold">
          Sobre o atendimento
        </span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl text-ink">
          Seu momento de cuidado
        </h2>
        <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-soft text-balance">
          Cada atendimento é pensado para entregar um resultado bonito,
          delicado e feito com atenção aos detalhes. Escolha seu estilo e
          agende seu horário.
        </p>
      </Reveal>
    </section>
  );
}
