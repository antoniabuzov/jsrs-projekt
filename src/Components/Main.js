import BannerSection from "./BannerSection";
import FunFactsSection from "./FunFactsSection";
import TopPicksSection from "./TopPicksSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ContactSection from "./ContactSection";

function Main() {
  return (
      <div className="Main">
        <BannerSection />
        <FunFactsSection />
        <TopPicksSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </div>
  );
}

export default Main;
