import { useState, useEffect, useRef } from "react";
import { Zap, TrendingUp, Video, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import CampaignSection from "./CampaignSection";
import servicesImage from "@/assets/Services.webp";

const ServicesSection = () => {
  const [isCampaignOpen, setIsCampaignOpen] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isImageVisible) {
          setIsImageVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, [isImageVisible]);

  return (
    <section id="services" className="section-services py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Let's create content that resonates, engages, and converts your audience
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Service Card - Mobile Optimized */}
          <div className="modern-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border-2 border-accent shadow-glow relative">
            {/* Most Popular Badge - Centered over card */}
            <div className="flex justify-center w-full absolute -top-4 left-0">
              <span className="bg-accent text-accent-foreground text-xs sm:text-sm font-bold px-4 py-1 rounded-full shadow-lg z-10 animate-bounce">Most Popular</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Left Content - Text */}
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    MEME Marketing/Video Editing 🔥
                  </h3>
                </div>
                
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Creating trend-based, relatable meme content and providing professional video editing to promote your brand or project across digital platforms. Let's make your next campaign go viral.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base">Viral Content Strategy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Video className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base">Reels & Short Videos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base">Video Editing Service</span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => setIsCampaignOpen(true)}
                  className="glow-effect bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-4 sm:px-6 py-3 rounded-lg touch-manipulation min-h-[44px] w-full sm:w-auto text-sm sm:text-base"
                >
                  Start Your Campaign
                </Button>
              </div>

              {/* Right Content - Image */}
              <div 
                ref={imageRef}
                className={`flex justify-center lg:justify-end order-1 lg:order-2 transition-all duration-[800ms] ease-out ${
                  isImageVisible
                    ? 'translate-x-0 opacity-100 scale-100'
                    : 'translate-x-16 opacity-0 scale-95'
                }`}
              >
                <div className="relative">
                  <img
                    src={servicesImage}
                    alt="Meme Marketing creative artwork representing viral content creation"
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain animate-float"
                    loading="lazy"
                  />
                  {/* Modern floating elements - Responsive */}
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-accent/70 rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 lg:-bottom-4 lg:-left-4 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-[hsl(var(--electric-blue))] rounded-full animate-pulse delay-1000 shadow-lg"></div>
                  <div className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-8 w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 bg-accent/50 rounded-full animate-pulse delay-500 shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services - Mobile Optimized */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <div className="modern-card rounded-lg sm:rounded-xl p-4 sm:p-6">
              <Video className="w-10 h-10 sm:w-12 sm:h-12 text-accent mb-3 sm:mb-4 mx-auto sm:mx-0" />
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center sm:text-left">Video Editing</h4>
              <p className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">
                Professional video editing with Adobe Premiere Pro and After Effects for your brand content and campaigns.
              </p>
            </div>
            <div className="modern-card rounded-lg sm:rounded-xl p-4 sm:p-6">
              <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-accent mb-3 sm:mb-4 mx-auto sm:mx-0" />
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center sm:text-left">Viral Content Strategy</h4>
              <p className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">
                End-to-end strategy for creating viral, trend-based content that maximizes reach and engagement for your brand.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CampaignSection 
        isOpen={isCampaignOpen} 
        onClose={() => setIsCampaignOpen(false)} 
      />
    </section>
  );
};

export default ServicesSection;