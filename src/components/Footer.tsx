import { useNavigate } from "react-router-dom";
import { Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { CONTACT, SOCIAL } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-secondary py-16 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-display font-bold text-gradient-gold tracking-tight mb-4">
              UNIVERS <span className="text-secondary-foreground">DES GADGETS</span>
            </h3>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed max-w-md">
              Votre partenaire d'impression et de personnalisation à Douala. 
              Qualité, rapidité et créativité au service de vos projets.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/60">
              <li>Impression Laser</li>
              <li>Personnalisation d'Objets</li>
              <li>Impression de Bâches</li>
              <li>Roll-Up</li>
              <li>Sérigraphie</li>
            </ul>
          </div>

          {/* Contact & Réseaux */}
          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-secondary-foreground/60 mb-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>{CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-primary transition-colors">{CONTACT.phoneDisplay}</a>
              </div>
            </div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-3">Réseaux sociaux</h4>
            <div className="flex gap-3">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary/20 text-secondary-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary/20 text-secondary-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary/20 text-secondary-foreground hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href={SOCIAL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[hsl(142,70%,35%)]/20 hover:bg-[hsl(142,70%,35%)]/40 text-[hsl(142,70%,45%)] transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/40">
            © {new Date().getFullYear()} Univers des Gadgets. Tous droits réservés.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/auth")}
            className="text-secondary-foreground/40 hover:text-secondary-foreground/60 text-xs opacity-60 blur-[0.5px] hover:blur-none hover:opacity-100 transition-all"
          >
            Admin
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
