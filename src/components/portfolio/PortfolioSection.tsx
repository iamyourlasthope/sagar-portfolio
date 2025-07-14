import { ExternalLink, Eye, Heart, Share } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Amazon Mini TV Promotions",
      description: "Created viral meme content that boosted engagement for Amazon Mini TV campaigns",
      platform: "Instagram & YouTube",
      role: "Meme Marketing Specialist",
      type: "Brand Campaign",
      engagement: "2.5M+ Views",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop"
    },
    {
      title: "Song Launch Campaigns",
      description: "Viral reels and memes for music artists that generated massive social buzz",
      platform: "Instagram Reels",
      role: "Content Creator",
      type: "Music Promotion",
      engagement: "1.8M+ Views",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
    },
    {
      title: "Mobile Product Campaigns",
      description: "Funny, relatable content for smartphone launches that increased brand visibility",
      platform: "Multi-Platform",
      role: "Creative Director",
      type: "Product Marketing",
      engagement: "3.2M+ Views",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop"
    }
  ];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card rounded-xl p-6 group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
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
                    <span className="text-muted-foreground">Role:</span>
                    <span>{project.role}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Type:</span>
                    <span>{project.type}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{project.engagement}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-muted-foreground hover:text-red-500 cursor-pointer transition-colors" />
                    <Share className="w-4 h-4 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="glow-effect bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-xl">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;