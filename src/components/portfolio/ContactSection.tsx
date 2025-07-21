import { useState } from "react";
import { Mail, Instagram, Youtube, Linkedin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_vs8acf1', // Service ID
        'template_p2m3w3q', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'AzPSYZyGpuQPCEpjd' // Public Key
      );

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/sagar.edits",
      handle: "@sagar.edits"
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://youtube.com/SagarEditsofficial",
      handle: "SagarEditsofficial"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sagarsingh12",
      handle: "sagarsingh12"
    }
  ];

  return (
    <section id="contact" className="section-contact py-12 sm:py-16 lg:py-20 px-2 sm:px-6 relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Ready to make your brand go viral? Drop me a message and let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form - Mobile Optimized */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-center lg:text-left">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 sm:h-12 bg-background border-border focus:border-accent text-base touch-manipulation"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 sm:h-12 bg-background border-border focus:border-accent text-base touch-manipulation"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background border-border focus:border-accent resize-none text-base touch-manipulation min-h-[120px]"
                />
              </div>
              <Button 
                type="submit"
                disabled={isLoading}
                className="glow-effect w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-4 rounded-xl disabled:opacity-50 touch-manipulation min-h-[52px] text-base"
              >
                {isLoading ? (
                  <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                ) : (
                  <Send className="mr-2 w-5 h-5" />
                )}
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info - Mobile Optimized */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl font-bold text-center lg:text-left">Get In Touch</h3>
            
            {/* Direct Contact - Mobile Optimized */}
            <div className="space-y-3 sm:space-y-4">
              <a 
                href="mailto:contactsagaredits@gmail.com" 
                className="modern-card flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl touch-manipulation hover:border-accent transition-colors group"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-sm sm:text-base">Email</p>
                  <p className="text-muted-foreground text-xs sm:text-sm truncate">contactsagaredits@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Social Links - Mobile Optimized */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-center lg:text-left">Follow Me</h4>
              <div className="space-y-2 sm:space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modern-card flex items-center space-x-3 sm:space-x-4 p-3 rounded-lg hover:border-accent transition-colors group touch-manipulation"
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold group-hover:text-accent transition-colors text-sm sm:text-base">{social.label}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground truncate">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;