import { Instagram, Youtube, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import sagarProfile from "@/assets/sagar-real-profile.png";

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg">Hi, I'm</p>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient">Sagar Singh</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">
              Meme Marketer & Digital Creator
            </h2>
            <p className="text-xl text-muted-foreground">
              with <span className="text-accent font-bold">100K+ Followers</span>
            </p>
          </div>

          {/* Social Stats */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <div className="stats-card rounded-xl p-4 flex items-center space-x-3">
              <Instagram className="w-6 h-6 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Instagram</p>
                <p className="font-bold text-lg">100K+</p>
              </div>
            </div>
            <div className="stats-card rounded-xl p-4 flex items-center space-x-3">
              <Youtube className="w-6 h-6 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">YouTube</p>
                <p className="font-bold text-lg">100K+</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              onClick={scrollToPortfolio}
              className="glow-effect bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-xl"
            >
              View My Work
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg rounded-xl transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="profile-glow w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden animate-float">
              <img 
                src={sagarProfile}
                alt="Sagar Singh - Digital Content Creator"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[hsl(var(--neon-orange))] rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-accent rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;