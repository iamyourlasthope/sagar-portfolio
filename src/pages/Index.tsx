import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import MerchSection from "@/components/portfolio/MerchSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO 
        title="Sagar Singh - Meme Marketer & Digital Creator | 100K+ Followers"
        description="Professional meme marketer and digital content creator with 100K+ followers. Expert in viral content creation, video editing, and social media management. Collaborated with Samsung, Amazon, and more."
                  keywords="Sagar Edits, Sagar Singh, meme marketer, digital creator, viral content, video editing, social media management, content creator, Instagram, YouTube, Adobe Premiere Pro, After Effects, Photoshop"
        url="https://sagaredits.in/"
        type="website"
                  tags={["Sagar Edits", "meme marketing", "digital content", "social media", "video editing", "content creation"]}
      />
      <div className="min-h-screen scroll-smooth">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <MerchSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
