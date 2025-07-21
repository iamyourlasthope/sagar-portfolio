import { Instagram, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const PortfolioSection = () => {
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    {
      title: "Samsung Z Fold 6 Promo",
      postId: "C_ncuShy80p",
      description: "Creative meme content showcasing Samsung's latest foldable technology with viral appeal.",
      platform: "Instagram",
      type: "Brand Collaboration"
    },
    {
      title: "Hip Hop India on Amazon Mini TV",
      postId: "CvhADjnMVmZ",
      description: "Promotional content for Hip Hop India series on Amazon Mini TV platform.",
      platform: "Instagram", 
      type: "Entertainment Marketing"
    },
    {
      title: "XYXX Underwear Promo", 
      postId: "C8l4BZ-SqAu",
      description: "Humorous brand promotion for XYXX underwear leveraging meme culture.",
      platform: "Instagram",
      type: "Fashion Marketing"
    },
    {
      title: "Leaked on Amazon Mini TV",
      postId: "Cww-tOHyYQl", 
      description: "Promotional content for 'Leaked' series on Amazon Mini TV platform.",
      platform: "Instagram",
      type: "Series Launch"
    },
    {
      title: "Kisi ka Bhai Kisi ki Jaan Promo",
      postId: "Crn9A3LOM7X",
      description: "Promotional content for the Bollywood movie featuring Salman Khan.",
      platform: "Instagram",
      type: "Entertainment"
    },
    {
      title: "Hip Hop Promo on Amazon Mini TV",
      postId: "CwnNDY0yaPv",
      description: "Follow-up promotional campaign for Hip Hop content on Amazon Mini TV.",
      platform: "Instagram",
      type: "Series Promotion"
    }
  ];

  const displayedProjects = showAll 
    ? projects 
    : projects.slice(0, 3);

  return (
    <section id="portfolio" className="section-portfolio py-12 sm:py-16 lg:py-24 px-2 sm:px-6 lg:px-8 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 tracking-tight text-foreground px-2 sm:px-0">
            Featured <span className="hero-gradient">Projects</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            From viral memes to brand campaigns, here's how I've helped brands connect with millions of users
          </p>
        </div>

        {/* Project Grid - Mobile First */}
        <div className={`grid gap-6 sm:gap-8 ${showAll ? 'sm:grid-cols-2 xl:grid-cols-3' : 'sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {displayedProjects.map((project, index) => (
            <div key={index} className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 group h-full flex flex-col hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-card">
              {/* Video Container - Mobile Optimized */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl mb-4 sm:mb-6 bg-muted/20 aspect-[4/5]">
                <iframe
                  src={`https://www.instagram.com/p/${project.postId}/embed/`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  className="rounded-xl sm:rounded-2xl"
                  title={project.title}
                  loading="lazy"
                  allow="autoplay; encrypted-media"
                />
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-accent/20 backdrop-blur-sm rounded-full p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 border border-accent/30">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
              </div>

              {/* Content - Mobile Optimized */}
              <div className="space-y-4 sm:space-y-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 leading-tight">{project.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-3">{project.description}</p>
                </div>

                {/* Metadata - Mobile Optimized */}
                <div className="space-y-2 sm:space-y-3 py-3 sm:py-4 border-t border-accent/20">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-muted-foreground font-medium">Platform:</span>
                    <span className="text-accent font-semibold">{project.platform}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-muted-foreground font-medium">Type:</span>
                    <span className="text-foreground font-semibold">{project.type}</span>
                  </div>
                </div>

                {/* CTA Button - Mobile Optimized */}
                <Button 
                  onClick={() => window.open(`https://www.instagram.com/p/${project.postId}/`, '_blank')}
                  variant="outline" 
                  className="w-full border-2 border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground rounded-xl py-3 sm:py-3 font-semibold transition-all duration-300 shadow-lg hover:shadow-glow bg-accent/5 touch-manipulation min-h-[44px] text-sm sm:text-base"
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  View on Instagram
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button - Mobile Optimized */}
        {projects.length > 3 && (
          <div className="text-center mt-12 sm:mt-16 px-4 sm:px-0">
            <Button 
              onClick={() => setShowAll(!showAll)}
              className="glow-effect bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg shadow-glow hover:shadow-neon transition-all duration-300 touch-manipulation min-h-[48px] w-full sm:w-auto"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Show Top Projects
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Show More Projects
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;