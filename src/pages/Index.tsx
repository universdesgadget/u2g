import { lazy, Suspense, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import Services from "@/components/Services";
import SEOHead from "@/components/SEOHead";

const Gallery = lazy(() => import("@/components/Gallery"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const TrustedPartners = lazy(() => import("@/components/TrustedPartners"));
const RequestForm = lazy(() => import("@/components/RequestForm"));
const MapSection = lazy(() => import("@/components/MapSection"));
const Footer = lazy(() => import("@/components/Footer"));

const sectionIds: Record<string, string> = {
  services: "#services",
  gallery: "#gallery",
  temoignages: "#temoignages",
  contact: "#contact",
  location: "#location",
};

const Index = ({ scrollTo }: { scrollTo?: keyof typeof sectionIds }) => {
  useEffect(() => {
    if (scrollTo && sectionIds[scrollTo]) {
      const el = document.querySelector(sectionIds[scrollTo]);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [scrollTo]);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Gadgets technologiques et objets publicitaires au Cameroun | Univers des Gadgets"
        description="Univers des Gadgets propose gadgets technologiques au Cameroun, objets publicitaires personnalisés à Yaoundé, impression sur gourdes et cadeaux d'entreprise personnalisés. Livraison et service local au Cameroun."
        keywords="gadgets technologiques au Cameroun, objets publicitaires personnalisés à Yaoundé, impression sur gourdes, cadeaux d'entreprise personnalisés, accessoires informatiques à Yaoundé, cadeaux promotionnels Cameroun"
      />
      <Navbar />
      <HeroCarousel />
      <Services />
      <Suspense fallback={<div className="min-h-[300px] flex items-center justify-center text-muted-foreground">Chargement de la galerie...</div>}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<div className="min-h-[300px] flex items-center justify-center text-muted-foreground">Chargement des témoignages...</div>}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div className="min-h-[300px] flex items-center justify-center text-muted-foreground">Chargement des partenaires...</div>}>
        <TrustedPartners />
      </Suspense>
      <Suspense fallback={<div className="min-h-[300px] flex items-center justify-center text-muted-foreground">Chargement du formulaire...</div>}>
        <RequestForm />
      </Suspense>
      <Suspense fallback={<div className="min-h-[300px] flex items-center justify-center text-muted-foreground">Chargement de la carte...</div>}>
        <MapSection />
      </Suspense>
      <Suspense fallback={<div className="py-20 flex items-center justify-center text-muted-foreground">Chargement du pied de page...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
