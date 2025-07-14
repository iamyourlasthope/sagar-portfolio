import { useState } from "react";
import { Mail, Phone, Instagram, Youtube, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
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
    <section id="contact" className="py-20 px-6 bg-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to make your brand go viral? Drop me a message and let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 bg-background border-border focus:border-accent"
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
                  className="h-12 bg-background border-border focus:border-accent"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background border-border focus:border-accent resize-none"
                />
              </div>
              <Button 
                type="submit"
                className="glow-effect w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-xl"
              >
                <Send className="mr-2 w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Get In Touch</h3>
            
            {/* Direct Contact */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-background border border-border">
                <Mail className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">contactsagaredits@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-background border border-border">
                <Phone className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-muted-foreground">+91 7042045361</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg bg-background border border-border hover:border-accent transition-colors group"
                  >
                    <social.icon className="w-6 h-6 text-accent" />
                    <div>
                      <p className="font-semibold group-hover:text-accent transition-colors">{social.label}</p>
                      <p className="text-sm text-muted-foreground">{social.handle}</p>
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