import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "@/lib/constants";

const navLinks = [
  { label: "Accueil", path: "/", hash: "#home" },
  { label: "Services", path: "/services", hash: "#services" },
  { label: "Galerie", path: "/galerie", hash: "#gallery" },
  { label: "Témoignages", path: "/temoignages", hash: "#temoignages" },
  { label: "À propos", path: "/a-propos" },
  { label: "Contact", path: "/contact", hash: "#contact" },
  { label: "Localisation", path: "/localisation", hash: "#location" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const hash = location.hash;

  const isActive = (link: { path: string; hash?: string }) => {
    if (link.path === "/a-propos") return pathname === "/a-propos";
    if (link.path === "/") return pathname === "/" && (!hash || hash === "#home");
    return pathname === link.path || (pathname === "/" && hash === link.hash);
  };

  const getLinkTo = (link: { path: string; hash?: string }) =>
    link.hash ? `${link.path}${link.hash}` : link.path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3 text-lg font-display font-bold tracking-tight">
          <img src="/logo.png" alt="Univers des Gadgets" className="h-9 md:h-10 w-auto object-contain" />
          <span className="text-gradient-gold">UNIVERS <span className="text-secondary-foreground">DES GADGETS</span></span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path + (link.hash || "")}
              to={getLinkTo(link)}
              onClick={() => isOpen && setIsOpen(false)}
              className={`text-sm font-medium transition-colors ${
                isActive(link)
                  ? "text-primary"
                  : "text-secondary-foreground/70 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href={`tel:${CONTACT.phoneTel}`}>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold">
              <Phone className="w-4 h-4 mr-2" />
              Appelez-nous
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-secondary-foreground"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary border-t border-border/20"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path + (link.hash || "")}
                  to={getLinkTo(link)}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-medium transition-colors py-2 ${
                    isActive(link) ? "text-primary" : "text-secondary-foreground/70 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href={`tel:${CONTACT.phoneTel}`}>
                <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-2">
                  <Phone className="w-4 h-4 mr-2" />
                  Appelez-nous
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
