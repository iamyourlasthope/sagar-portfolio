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
      title: "Hip Hop Promo on Amazon Mini TV",
      postId: "CwnNDY0yaPv",
      description: "Follow-up promotional campaign for Hip Hop content on Amazon Mini TV.",
      platform: "Instagram",
      type: "Series Promotion"
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
    }
  ];

  // Top 3 projects to show initially  
  const topProjects = ["Samsung Z Fold 6 Promo", "Hip Hop India on Amazon Mini TV", "XYXX Underwear Promo"];
  
  const displayedProjects = showAll 
    ? projects 
    : projects.filter(project => topProjects.includes(project.title));

  return (
    <section id="portfolio" className="py-24 px-6 lg:px-8 bg-card/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From viral memes to brand campaigns, here's how I've helped brands connect with millions of users
          </p>
        </div>

        {/* Project Grid - Modern uniform cards */}
        <div className={`grid gap-8 ${showAll ? 'md:grid-cols-2 xl:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'} ${!showAll && displayedProjects.length === 3 ? 'lg:grid-cols-3' : ''}`}>
          {displayedProjects.map((project, index) => (
            <div key={index} className="project-card rounded-3xl p-8 group h-full flex flex-col">
              {/* Video Container - Fixed aspect ratio */}
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-black/50 aspect-[4/5]">
                <iframe
                  src={`https://www.instagram.com/p/${project.postId}/embed/`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  className="rounded-2xl"
                  title={project.title}
                  loading="lazy"
                  allow="autoplay; encrypted-media"
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content - Flexible height */}
              <div className="space-y-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 leading-tight">{project.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed line-clamp-3">{project.description}</p>
                </div>

                {/* Metadata */}
                <div className="space-y-3 py-4 border-t border-border/50">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground font-medium">Platform:</span>
                    <span className="text-accent font-semibold">{project.platform}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground font-medium">Type:</span>
                    <span className="font-semibold">{project.type}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={() => window.open(`https://www.instagram.com/p/${project.postId}/`, '_blank')}
                  variant="outline" 
                  className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-xl py-3 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on Instagram
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {projects.length > 3 && (
          <div className="text-center mt-16">
            <Button 
              onClick={() => setShowAll(!showAll)}
              className="glow-effect bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-5 h-5 mr-3" />
                  Show Top Projects
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5 mr-3" />
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