import { useReveal } from "../hooks/useReveal";

export default function Reveal({ children, className = "", delay = 0 }) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`fade-section ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
