import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = window.innerWidth < 640 ? 60 : 0; // Mobile offset
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
      behavior: "smooth"
    });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900/98 backdrop-blur-lg border-b-2 border-blue-500/40 shadow-xl" : "bg-gray-900/80 backdrop-blur-md border-b border-blue-400/20"}`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => scrollToSection("home")}
              className="text-lg sm:text-xl font-bold text-left bg-transparent border-none p-0 m-0 cursor-pointer hover:text-accent focus:outline-none"
              style={{ background: 'none' }}
              aria-label="Go to Home"
            >
              Sagar Edits
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-muted-foreground hover:text-accent transition-colors touch-manipulation">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-accent transition-colors touch-manipulation">
              About
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-muted-foreground hover:text-accent transition-colors touch-manipulation">
              Featured Projects
            </button>
            <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-accent transition-colors touch-manipulation">
              Services
            </button>
            <button onClick={() => scrollToSection("merch")} className="text-muted-foreground hover:text-accent transition-colors touch-manipulation">
              Merch
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-accent transition-colors touch-manipulation">
              Contact
            </button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="p-2 touch-manipulation">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background/95 backdrop-blur-lg">
              <div className="flex flex-col space-y-4 mt-12">
                <button 
                  onClick={() => scrollToSection("home")} 
                  className="text-left text-lg text-foreground hover:text-accent transition-colors py-4 px-4 touch-manipulation rounded-lg hover:bg-accent/10"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="text-left text-lg text-foreground hover:text-accent transition-colors py-4 px-4 touch-manipulation rounded-lg hover:bg-accent/10"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection("portfolio")} 
                  className="text-left text-lg text-foreground hover:text-accent transition-colors py-4 px-4 touch-manipulation rounded-lg hover:bg-accent/10"
                >
                  Featured Projects
                </button>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="text-left text-lg text-foreground hover:text-accent transition-colors py-4 px-4 touch-manipulation rounded-lg hover:bg-accent/10"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection("merch")} 
                  className="text-left text-lg text-foreground hover:text-accent transition-colors py-4 px-4 touch-manipulation rounded-lg hover:bg-accent/10"
                >
                  Merch
                </button>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="text-left text-lg text-foreground hover:text-accent transition-colors py-4 px-4 touch-manipulation rounded-lg hover:bg-accent/10"
                >
                  Contact
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;