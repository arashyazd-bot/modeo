import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoreServicesSection from "@/components/CoreServicesSection";
import ServicesDetailSection from "@/components/ServicesDetailSection";
import FocusAreasSection from "@/components/FocusAreasSection";
import IndustriesSection from "@/components/IndustriesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CoreServicesSection />
        <ServicesDetailSection />
        <FocusAreasSection />
        <IndustriesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
