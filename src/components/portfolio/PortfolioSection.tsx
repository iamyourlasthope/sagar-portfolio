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

  // Top 4 projects to show initially
  const topProjects = ["Samsung Z Fold 6 Promo", "Hip Hop India on Amazon Mini TV", "XYXX Underwear Promo", "Leaked on Amazon Mini TV"];
  
  const displayedProjects = showAll 
    ? projects 
    : projects.filter(project => topProjects.includes(project.title));

  return (
    <section id="portfolio" className="py-20 px-6 bg-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From viral memes to brand campaigns, here's how I've helped brands connect with millions of users
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <div key={index} className="project-card rounded-xl p-6 group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <iframe
                  src={`https://www.instagram.com/p/${project.postId}/embed/`}
                  width="100%"
                  height="480"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  className="rounded-lg"
                  title={project.title}
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Platform:</span>
                    <span className="text-accent">{project.platform}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Type:</span>
                    <span>{project.type}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center pt-4 border-t border-border">
                  <Button 
                    onClick={() => window.open(`https://www.instagram.com/p/${project.postId}/`, '_blank')}
                    variant="outline" 
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on Instagram
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => setShowAll(!showAll)}
            className="glow-effect bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-xl"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                Show Top Projects
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                View All Projects
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;