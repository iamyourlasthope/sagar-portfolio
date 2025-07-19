import { CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
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

  const skills = [
    "Video Editing (Adobe Premiere Pro, After Effects)",
    "Meme Marketing",
    "Photoshop Design", 
    "Trend Research & Business Insights",
    "Social Media Management"
  ];

  return (
    <section id="about" className="section-about py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative z-10" role="region" aria-labelledby="about-heading">
      <div className="container mx-auto">
        <header className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="max-w-4xl mx-auto px-2 sm:px-0">
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Experienced digital content creator with over <span className="text-accent font-semibold">5 years of expertise</span> in video editing and social media management. Successfully grew Instagram and YouTube to <span className="text-accent font-semibold">100K+ each</span>, and collaborated on promo campaigns for <span className="text-accent font-semibold">Amazon Prime, Mini TV</span>, and more.
            </p>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Animated Image - Mobile First */}
          <div 
            ref={imageRef}
            className={`flex justify-center order-1 lg:order-1 transition-all duration-[800ms] ease-out ${
              isImageVisible
                ? 'translate-x-0 opacity-100 scale-100'
                : '-translate-x-16 opacity-0 scale-95'
            }`}
          >
            <div className="relative">
              <img
                src="https://i.postimg.cc/kXrFD6qw/ADLT-Artworkonly-10-removebg-preview.png"
                alt="Sagar Singh - Digital Content Creator artwork representing creative skills and expertise"
                className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-contain animate-float"
                loading="lazy"
              />
              {/* Modern floating elements - Responsive */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-accent/70 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 lg:-bottom-4 lg:-left-4 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-[hsl(var(--electric-blue))] rounded-full animate-pulse delay-1000 shadow-lg"></div>
              <div className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-8 w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 bg-accent/50 rounded-full animate-pulse delay-500 shadow-lg"></div>
            </div>
          </div>

          {/* Skills - Mobile Optimized */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-2 px-2 sm:px-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center lg:text-left">Skills & Expertise</h3>
            <ul className="space-y-3 sm:space-y-4" role="list">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start space-x-3 touch-manipulation">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm sm:text-base lg:text-lg leading-relaxed">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;