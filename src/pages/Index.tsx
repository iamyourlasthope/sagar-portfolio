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
        title="Sagar Edits – Meme Marketer & Digital Creator"
        description="100K+ follower base | Viral content creator | Brand collaborations & meme marketing expert."
        keywords="Sagar Edits, Sagar Singh, Meme Marketer, Digital Creator, Content Creator, Instagram Influencer, YouTube Creator, Viral Memes, Brand Promotion, Video Editor, 100K YouTube Subscribers, 10K Instagram Followers, Social Media Marketing, Indian Meme Creator, Sagar Edits Portfolio, Influencer Marketing, Trending Reels, YouTube Shorts Creator, Instagram Reels Editor, Sagar Edits"
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
