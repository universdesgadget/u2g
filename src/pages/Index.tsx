import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import RequestForm from "@/components/RequestForm";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
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
