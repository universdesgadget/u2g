import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import TrustedPartners from "@/components/TrustedPartners";
import RequestForm from "@/components/RequestForm";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

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
      <Gallery />
      <Testimonials />
      <TrustedPartners />
      <RequestForm />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
