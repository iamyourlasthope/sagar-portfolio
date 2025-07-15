import { useState, useEffect } from "react";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[hsl(var(--neon-green))] to-[hsl(var(--neon-orange))] flex items-center justify-center">
              <span className="text-background font-bold">S</span>
            </div>
            <span className="text-xl font-bold">Sagar Edits</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-muted-foreground hover:text-accent transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-accent transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-muted-foreground hover:text-accent transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-accent transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-accent transition-colors">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;