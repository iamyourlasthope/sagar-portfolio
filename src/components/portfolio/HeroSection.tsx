import { Instagram, Youtube, ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
import heroImage from "@/assets/Hero Page.webp";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isHeroImageVisible, setIsHeroImageVisible] = useState(false);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = FOG({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        zoom: 0.6,
        highlightColor: 0x3b82f6, // blue-500
        midtoneColor: 0x1e293b,   // slate-800
        lowlightColor: 0x0ea5e9,  // sky-500
        baseColor: 0x0f172a,      // slate-900
        blurFactor: 0.7,
        speed: 1.2,
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

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
    if (element) {
      const offset = window.innerWidth < 640 ? 60 : 0; // Mobile offset
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
      behavior: "smooth"
    });
    }
  };

  const handleGetInTouch = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = window.innerWidth < 640 ? 60 : 0; // Mobile offset
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
      behavior: "smooth"
    });
    }
  };
  return (
    <section
      id="home"
      ref={vantaRef}
      className="section-hero min-h-screen flex items-center justify-center pt-24 sm:pt-24 px-1 sm:px-6 lg:px-8 relative overflow-hidden"
      role="banner"
      aria-label="Hero Section"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-5 sm:space-y-8 lg:space-y-10 text-center lg:text-left order-2 lg:order-1 lg:-mt-12">
            <header className="space-y-4 sm:space-y-6">
              <p className="text-blue-200 text-base sm:text-lg font-medium tracking-wide" role="doc-subtitle">Hi, I'm</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[0.9] tracking-tight">
                <span className="text-white">Sagar Singh</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-blue-100 px-2 sm:px-0">
                Creative Mind behind many <span className="text-blue-400 font-bold">Viral Contents.</span>
              </h2>
            </header>

            {/* Social Stats - Mobile Optimized */}
            <nav
              className="flex flex-col sm:gap-4 justify-center lg:justify-start px-2 sm:px-0 sm:flex-col gap-3"
              role="navigation"
              aria-label="Social Media Profiles"
            >
              <div className="flex flex-row gap-2 sm:flex-col sm:gap-4 w-full">
                <a
                  href="https://www.instagram.com/sagar.edits/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-2xl p-2 sm:p-4 flex items-center space-x-2 sm:space-x-4 group cursor-pointer hover:bg-white/15 transition-all duration-300 touch-manipulation min-h-[38px] sm:min-h-[44px] max-w-[160px] sm:max-w-none mx-auto sm:mx-0"
                  aria-label="Follow Sagar Singh on Instagram - 100K+ followers"
                  title="Follow Sagar Singh on Instagram"
                >
                  <Instagram className="w-5 h-5 sm:w-7 sm:h-7 text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0" aria-hidden="true" />
                  <div className="text-left flex-1">
                    <p className="text-xs sm:text-sm text-blue-300">Instagram</p>
                    <p className="font-bold text-base sm:text-xl text-white">100K+</p>
                  </div>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" aria-hidden="true" />
                </a>
                <a
                  href="https://youtube.com/sagareditsofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-2xl p-2 sm:p-4 flex items-center space-x-2 sm:space-x-4 group cursor-pointer hover:bg-white/15 transition-all duration-300 touch-manipulation min-h-[38px] sm:min-h-[44px] max-w-[160px] sm:max-w-none mx-auto sm:mx-0"
                  aria-label="Subscribe to Sagar Singh on YouTube - 100K+ subscribers"
                  title="Subscribe to Sagar Singh on YouTube"
                >
                  <Youtube className="w-5 h-5 sm:w-7 sm:h-7 text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0" aria-hidden="true" />
                  <div className="text-left flex-1">
                    <p className="text-xs sm:text-sm text-blue-300">YouTube</p>
                    <p className="font-bold text-base sm:text-xl text-white">100K+</p>
                  </div>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" aria-hidden="true" />
                </a>
              </div>
            </nav>

            {/* CTA - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 lg:gap-5 justify-center lg:justify-start px-2 sm:px-0" role="group" aria-label="Call to Action Buttons">
              <Button 
                onClick={scrollToPortfolio} 
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 sm:px-8 lg:px-10 py-4 sm:py-6 lg:py-7 text-base sm:text-lg rounded-lg sm:rounded-2xl shadow-lg transition-all duration-300 touch-manipulation min-h-[52px] sm:min-h-[52px] w-full sm:w-auto"
                aria-label="View Sagar Singh's portfolio work"
              >
                View My Work
                <ArrowDown className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </Button>
              <Button 
                onClick={handleGetInTouch} 
                variant="outline" 
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-6 lg:py-7 text-base sm:text-lg rounded-lg sm:rounded-2xl transition-all duration-300 shadow-lg bg-transparent touch-manipulation min-h-[52px] sm:min-h-[52px] w-full sm:w-auto mb-4 sm:mb-0"
                aria-label="Contact Sagar Singh for collaborations"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image - Mobile Optimized */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-4 sm:mb-0">
            <div 
              ref={heroImageRef}
              className={`relative transition-all duration-[800ms] ease-out my-4 sm:my-0 ${
                isHeroImageVisible
                  ? 'translate-x-0 opacity-100 scale-100'
                  : '-translate-x-16 opacity-0 scale-95'
              }`}
            >
              <div className="profile-glow w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] rounded-full overflow-hidden animate-float shadow-2xl">
                <img 
                  src={heroImage}
                  alt="Sagar Singh - Professional Digital Content Creator and Meme Marketer with 100K+ followers" 
                  className="w-full h-full object-center object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              {/* Modern floating elements - Responsive */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-accent rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-electric-blue rounded-full animate-pulse delay-1000 shadow-lg"></div>
              <div className="absolute top-1/2 -left-6 sm:-left-8 lg:-left-10 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-accent/70 rounded-full animate-pulse delay-500 shadow-lg"></div>
              <div className="absolute top-1/4 -right-2 sm:-right-3 lg:-right-4 w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 bg-bright-blue rounded-full animate-pulse delay-700 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;