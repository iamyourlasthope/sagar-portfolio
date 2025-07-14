import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "Video Editing (Adobe Premiere Pro, After Effects)",
    "Meme Marketing",
    "Photoshop Design", 
    "Trend Research & Business Insights",
    "Social Media Management"
  ];

  const timeline = [
    {
      year: "2019",
      title: "Started Content Creation",
      description: "Began creating memes and video content"
    },
    {
      year: "2020",
      title: "First Brand Collaboration",
      description: "Worked with local brands on social campaigns"
    },
    {
      year: "2021",
      title: "50K Milestone",
      description: "Reached 50K followers across platforms"
    },
    {
      year: "2022",
      title: "Amazon Partnership",
      description: "Collaborated with Amazon Prime & Mini TV"
    },
    {
      year: "2024",
      title: "100K+ Community",
      description: "Built a thriving community of 100K+ followers"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Experienced digital content creator with over <span className="text-accent font-semibold">5 years of expertise</span> in video editing and social media management. Successfully grew Instagram and YouTube to <span className="text-accent font-semibold">100K+ each</span>, and collaborated on promo campaigns for <span className="text-accent font-semibold">Amazon Prime, Mini TV</span>, and more.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <span className="text-lg">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Career Journey</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-accent"></div>
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-6 pb-8">
                  <div className="relative z-10 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-background rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="text-accent font-bold">{item.year}</span>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;