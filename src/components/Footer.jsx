import { AtSign, MessageCircle } from "lucide-react";
import { site } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-5 sm:px-8 py-10 border-t border-blush">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg text-ink">{site.name}</p>
          <p className="text-sm text-ink-soft">
            Manicure &amp; Nail Designer &middot; {site.location}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-blush-light flex items-center justify-center text-rose-dark hover:bg-blush transition-colors"
          >
            <AtSign size={18} strokeWidth={1.8} />
          </a>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-full bg-blush-light flex items-center justify-center text-rose-dark hover:bg-blush transition-colors"
          >
            <MessageCircle size={18} strokeWidth={1.8} />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-ink-soft/70">
        &copy; {year} {site.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
