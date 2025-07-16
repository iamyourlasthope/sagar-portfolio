import { useState } from "react";
import { Zap, TrendingUp, Video, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import CampaignSection from "./CampaignSection";

const ServicesSection = () => {
  const [isCampaignOpen, setIsCampaignOpen] = useState(false);
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

        <div className="max-w-4xl mx-auto">
          {/* Main Service Card - Mobile Optimized */}
          <div className="modern-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center justify-center sm:justify-start">
                  🔥 Meme Marketing
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  Creating trend-based, relatable meme content to promote your brand or project across digital platforms. Let's make your next campaign go viral.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2 justify-center sm:justify-start">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base">Viral Content Strategy</span>
                  </div>
                  <div className="flex items-center space-x-2 justify-center sm:justify-start">
                    <Video className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base">Reels & Short Videos</span>
                  </div>
                  <div className="flex items-center space-x-2 justify-center sm:justify-start">
                    <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base">Custom Meme Design</span>
                  </div>
                </div>
                <Button 
                  onClick={() => setIsCampaignOpen(true)}
                  className="glow-effect bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-4 sm:px-6 py-3 rounded-lg touch-manipulation min-h-[44px] w-full sm:w-auto text-sm sm:text-base"
                >
                  Start Your Campaign
                </Button>
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
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center sm:text-left">Social Media Management</h4>
              <p className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">
                Complete social media strategy and management to grow your online presence and engage your audience.
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