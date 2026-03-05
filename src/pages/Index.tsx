import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import RequestForm from "@/components/RequestForm";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

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
      <Navbar />
      <HeroCarousel />
      <Services />
      <Gallery />
      <Testimonials />
      <RequestForm />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
