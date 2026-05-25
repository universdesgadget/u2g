/** Domaine principal (SEO, canonical, Open Graph) */
export const SITE_URL = "https://universdesgadgets.com" as const;

/** Ancien domaine Vercel — redirigé vers SITE_URL (vercel.json) */
export const LEGACY_VERCEL_URL = "https://u2g.vercel.app" as const;

/** Favicon onglet (fichier : public/favicon.png, source logo 3) */
export const FAVICON_PATH = "/favicon.png?v=4" as const;
export const FAVICON_URL = `${SITE_URL}${FAVICON_PATH}` as const;

// Contact entreprise — un seul endroit à modifier
export const CONTACT = {
  whatsappNumber: "237697320490",
  whatsappDisplay: "+237 697320490",
  phoneDisplay: "+237 697320490",
  phoneTel: "+237697320490",
  address: "2MRV+6V6, Douala — Cameroun",
  email: "universdesgadget@gmail.com",
} as const;

// Réseaux sociaux — URLs à adapter selon vos comptes
export const SOCIAL = {
  facebook: "https://facebook.com/share/1CEUf7Mf4f/",
  instagram: "https://instagram.com/universdesgadgets",
  tiktok: "https://vm.tiktok.com/ZS9YfGfayMqSs-fk5jg/",
  whatsapp: `https://wa.me/${CONTACT.whatsappNumber}`,
} as const;

// Carousel homepage — 5 images avec message et bouton par slide
// Chemins: public/images/carousel-1.jpg ... carousel-5.jpg (ou public/images/carousel/carousel-1.jpg)
export const CAROUSEL_SLIDES = [
  {
    image: "/images/carousel-1.jpg",
    message: "Univers des Gadgets — Votre partenaire d'impression",
    buttonText: "Découvrir nos services",
    buttonLink: "#services",
  },
  {
    image: "/images/carousel-2.jpg",
    message: "Impression laser, gravure et personnalisation d'objets",
    buttonText: "Voir la galerie",
    buttonLink: "#gallery",
  },
  {
    image: "/images/carousel-3.jpg",
    message: "Qualité professionnelle pour tous vos projets",
    buttonText: "Demander un devis",
    buttonLink: "#contact",
  },
  {
    image: "/images/carousel-4.jpg",
    message: "500+ projets réalisés, 100% satisfaction client",
    buttonText: "Nous contacter",
    buttonLink: "#contact",
  },
  {
    image: "/images/carousel-5.jpg",
    message: "Douala — Cameroun — Au service de votre créativité",
    buttonText: "Appelez-nous",
    buttonLink: `tel:${CONTACT.phoneTel}`,
  },
] as const;

// Témoignages — 4 témoignages avec photo
// Images à placer dans: public/images/
export const TESTIMONIALS = [
  {
    name: "Marie T.",
    role: "Entrepreneure",
    comment: "Excellente qualité d'impression et délais respectés. Je recommande vivement Univers des Gadgets pour tous vos projets !",
    image: "/images/temoignage-1.jpg",
  },
  {
    name: "Jean-Pierre N.",
    role: "Responsable marketing",
    comment: "Le meilleur partenaire d'impression à Douala. Nos bâches et roll-up ont fait sensation lors du salon.",
    image: "/images/temoignage-2.jpg",
  },
  {
    name: "Sarah M.",
    role: "Artisan",
    comment: "Personnalisation parfaite sur nos articles. Équipe à l'écoute et résultats au-delà de nos attentes.",
    image: "/images/temoignage-3.jpg",
  },
  {
    name: "David K.",
    role: "Chef d'entreprise",
    comment: "Depuis 3 ans, nous collaborons pour nos cartes de visite et supports marketing. Toujours professionnel.",
    image: "/images/temoignage-4.jpg",
  },
] as const;

// Logos partenaires — section « Ils nous font confiance »
// À placer dans: public/images/partners/partner-1.png … partner-8.png
export const PARTNER_LOGOS = [
  { id: "partner-1", name: "Partenaire 1", logo: "/images/partners/partner-1.png" },
  { id: "partner-2", name: "Partenaire 2", logo: "/images/partners/partner-2.png" },
  { id: "partner-3", name: "Partenaire 3", logo: "/images/partners/partner-3.png" },
  { id: "partner-4", name: "Partenaire 4", logo: "/images/partners/partner-4.png" },
  { id: "partner-5", name: "Partenaire 5", logo: "/images/partners/partner-5.png" },
  { id: "partner-6", name: "Partenaire 6", logo: "/images/partners/partner-6.png" },
  { id: "partner-7", name: "Partenaire 7", logo: "/images/partners/partner-7.png" },
  { id: "partner-8", name: "Partenaire 8", logo: "/images/partners/partner-8.png" },
] as const;

// Image de fond pour la section Témoignages
// À placer dans: public/images/temoignages-bg.jpg
export const TESTIMONIALS_BG = "/images/temoignages-bg.jpeg";

// Image de fond pour la section Contact
// À placer dans: public/images/contact-bg.jpg
export const CONTACT_BG = "/images/contact-bg.jpg";

// Image de fond pour la page À propos
// À placer dans: public/images/a-propos-bg.jpg
export const ABOUT_BG = "/images/a-propos-bg.jpeg";
