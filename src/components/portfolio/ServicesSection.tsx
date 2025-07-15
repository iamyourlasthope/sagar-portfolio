import { useState } from "react";
import { Zap, TrendingUp, Video, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import CampaignSection from "./CampaignSection";

const ServicesSection = () => {
  const [isCampaignOpen, setIsCampaignOpen] = useState(false);
  return (
    <section id="services" className="section-services py-20 px-6 relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's create content that resonates, engages, and converts your audience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="modern-card rounded-2xl p-8 mb-8">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  🔥 Meme Marketing
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Creating trend-based, relatable meme content to promote your brand or project across digital platforms. Let's make your next campaign go viral.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <span>Viral Content Strategy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Video className="w-5 h-5 text-accent" />
                    <span>Reels & Short Videos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Palette className="w-5 h-5 text-accent" />
                    <span>Custom Meme Design</span>
                  </div>
                </div>
                <Button 
                  onClick={() => setIsCampaignOpen(true)}
                  className="glow-effect bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-2 rounded-lg"
                >
                  Start Your Campaign
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="modern-card rounded-xl p-6">
              <Video className="w-12 h-12 text-accent mb-4" />
              <h4 className="text-xl font-bold mb-3">Video Editing</h4>
              <p className="text-muted-foreground">
                Professional video editing with Adobe Premiere Pro and After Effects for your brand content and campaigns.
              </p>
            </div>
            <div className="modern-card rounded-xl p-6">
              <TrendingUp className="w-12 h-12 text-accent mb-4" />
              <h4 className="text-xl font-bold mb-3">Social Media Management</h4>
              <p className="text-muted-foreground">
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