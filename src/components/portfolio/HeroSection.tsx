import { Instagram, Youtube, ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import sagarHeroImage from "@/assets/sagar-hero-new.png";
const HeroSection = () => {
  const [isHeroImageVisible, setIsHeroImageVisible] = useState(false);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isHeroImageVisible) {
          setIsHeroImageVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (heroImageRef.current) {
      observer.observe(heroImageRef.current);
    }

    return () => observer.disconnect();
  }, [isHeroImageVisible]);

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="section-hero min-h-screen flex items-center justify-center pt-20 px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-6">
              <p className="text-blue-200 text-lg font-medium tracking-wide">Hi, I'm</p>
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight">
                <span className="text-white">Sagar Singh</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-blue-100">
                Creative Mind behing many Viral Contents.
              </h2>
              <p className="text-xl lg:text-2xl text-blue-200">
                with <span className="text-blue-400 font-bold">100K+ Followers</span>
              </p>
            </div>

            {/* Social Stats - Now Clickable */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://www.instagram.com/sagar.edits/" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex items-center space-x-4 group cursor-pointer hover:bg-white/15 transition-all duration-300">
                <Instagram className="w-7 h-7 text-blue-400 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-sm text-blue-300">Instagram</p>
                  <p className="font-bold text-xl text-white">100K+</p>
                </div>
                <ExternalLink className="w-4 h-4 text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
              </a>
              <a href="https://youtube.com/sagareditsofficial" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex items-center space-x-4 group cursor-pointer hover:bg-white/15 transition-all duration-300">
                <Youtube className="w-7 h-7 text-blue-400 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-sm text-blue-300">YouTube</p>
                  <p className="font-bold text-xl text-white">100K+</p>
                </div>
                <ExternalLink className="w-4 h-4 text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
              </a>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Button onClick={scrollToPortfolio} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-10 py-7 text-lg rounded-2xl shadow-lg transition-all duration-300">
                View My Work
                <ArrowDown className="ml-3 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-10 py-7 text-lg rounded-2xl transition-all duration-300 shadow-lg bg-transparent">
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div 
              ref={heroImageRef}
              className={`relative transition-all duration-[800ms] ease-out ${
                isHeroImageVisible
                  ? 'translate-x-0 opacity-100 scale-100'
                  : '-translate-x-16 opacity-0 scale-95'
              }`}
            >
              <div className="profile-glow w-80 h-80 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] rounded-full overflow-hidden animate-float shadow-2xl">
                <img src={sagarHeroImage} alt="Sagar Singh - Digital Content Creator" className="w-full h-full object-center object-cover" />
              </div>
              {/* Modern floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-electric-blue rounded-full animate-pulse delay-1000 shadow-lg"></div>
              <div className="absolute top-1/2 -left-10 w-6 h-6 bg-accent/70 rounded-full animate-pulse delay-500 shadow-lg"></div>
              <div className="absolute top-1/4 -right-4 w-4 h-4 bg-bright-blue rounded-full animate-pulse delay-700 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;