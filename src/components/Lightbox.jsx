import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ items, index, onClose, onNavigate }) {
  const goPrev = useCallback(
    () => onNavigate((index - 1 + items.length) % items.length),
    [index, items.length, onNavigate]
  );
  const goNext = useCallback(
    () => onNavigate((index + 1) % items.length),
    [index, items.length, onNavigate]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, goPrev, goNext]);

  const item = items[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-sm px-4 py-8 animate-fade-up"
      style={{ animationDuration: "0.25s" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Visualização ampliada da foto"
    >
      <button
        type="button"
        aria-label="Fechar"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-cream/90 hover:text-cream p-2"
      >
        <X size={28} />
      </button>

      <button
        type="button"
        aria-label="Foto anterior"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        className="absolute left-2 sm:left-6 text-cream/80 hover:text-cream p-2 sm:p-3"
      >
        <ChevronLeft size={30} />
      </button>

      <img
        src={item.src}
        alt={item.alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[80vh] max-w-full sm:max-w-[80vw] object-contain rounded-xl shadow-lift"
      />

      <button
        type="button"
        aria-label="Próxima foto"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        className="absolute right-2 sm:right-6 text-cream/80 hover:text-cream p-2 sm:p-3"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
}
