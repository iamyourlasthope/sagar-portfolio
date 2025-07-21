import { Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border bg-gradient-to-r from-background to-card/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <p className="text-sm sm:text-base font-bold">Thank you, Come Again!</p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://instagram.com/sagar.edits"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/SagarEditsofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/sagarsingh12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© {currentYear} Sagar Singh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;