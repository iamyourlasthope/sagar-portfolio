import { useState } from "react";
import { X, Send, Loader2, TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

interface CampaignSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const CampaignSection = ({ isOpen, onClose }: CampaignSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    campaignType: "",
    budget: "",
    timeline: "",
    description: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        campaign_type: formData.campaignType,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.description,
        to_name: "Sagar Singh",
        subject: `New Campaign Request from ${formData.name}`,
      };

      await emailjs.send(
        'service_gf7dqzg',
        'template_s09g5vp',
        templateParams,
        '4_w4oVfKG-0YfJE-v'
      );

      toast({
        title: "Campaign request sent!",
        description: "I'll get back to you within 24 hours to discuss your campaign.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        campaignType: "",
        budget: "",
        timeline: "",
        description: ""
      });
      onClose();
    } catch (error) {
      toast({
        title: "Error sending request",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background border rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Start Your Campaign</h2>
              <p className="text-muted-foreground">Let's create something viral together</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Campaign Types */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 rounded-lg border bg-card">
              <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold">Meme Marketing</h3>
              <p className="text-sm text-muted-foreground">Viral content creation</p>
            </div>
            <div className="text-center p-4 rounded-lg border bg-card">
              <Users className="w-8 h-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold">Brand Collaboration</h3>
              <p className="text-sm text-muted-foreground">Sponsored content</p>
            </div>
            <div className="text-center p-4 rounded-lg border bg-card">
              <Target className="w-8 h-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold">Product Promotion</h3>
              <p className="text-sm text-muted-foreground">Targeted campaigns</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Company/Brand</label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Campaign Type *</label>
                <select
                  name="campaignType"
                  value={formData.campaignType}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent"
                >
                  <option value="">Select campaign type</option>
                  <option value="meme-marketing">Meme Marketing</option>
                  <option value="brand-collaboration">Brand Collaboration</option>
                  <option value="product-promotion">Product Promotion</option>
                  <option value="social-media-management">Social Media Management</option>
                  <option value="video-editing">Video Editing</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full p-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-plus">$50,000+</option>
                  <option value="discuss">Let's discuss</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full p-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-week">Within 1 week</option>
                  <option value="2-weeks">Within 2 weeks</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Campaign Description *</label>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Tell me about your campaign goals, target audience, and any specific requirements..."
                rows={4}
              />
            </div>

            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full glow-effect bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 text-lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Submit Campaign Request
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CampaignSection;