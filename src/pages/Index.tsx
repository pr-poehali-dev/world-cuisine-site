import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import CountriesSection from "@/components/sections/CountriesSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <HeroSection />
      <StatsSection />
      <CountriesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
