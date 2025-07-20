import { useState, useEffect } from "react";
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
    description: "",
    platform: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        company_name: formData.company,
        campaign_type: formData.campaignType,
        campaign_description: formData.description,
        platform: formData.platform
      };

      await emailjs.send(
        'service_vs8acf1',
        'template_axt6eki',
        templateParams,
        'AzPSYZyGpuQPCEpjd'
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
        description: "",
        platform: ""
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

  // Clear platform if campaignType is set to video-editing
  const handleCampaignTypeSelect = (key: string) => {
    setFormData(prev => ({
      ...prev,
      campaignType: key,
      platform: key === 'video-editing' ? '' : prev.platform
    }));
  };

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99999] flex items-center justify-center p-2 sm:p-4 overflow-hidden"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-background border shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative rounded-none sm:rounded-2xl h-[100dvh] sm:h-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="campaign-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h2 id="campaign-modal-title" className="text-2xl font-bold">Start Your Campaign</h2>
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
          <div className="grid grid-cols-2 gap-3 mb-8 justify-center sm:flex sm:flex-row sm:gap-3">
            {[
              {
                key: "video-editing",
                icon: <TrendingUp className="w-7 h-7 text-accent mx-auto mb-1" />,
                title: "Video Editing",
                desc: (
                  <span className="block text-sm text-muted-foreground leading-tight">Professional<br/>video services</span>
                )
              },
              {
                key: "brand-collaboration",
                icon: <Users className="w-7 h-7 text-accent mx-auto mb-1" />,
                title: "Brand Collaboration",
                desc: <span className="block text-sm text-muted-foreground leading-tight">Sponsored content</span>
              },
              {
                key: "product-promotion",
                icon: <Target className="w-7 h-7 text-accent mx-auto mb-1" />,
                title: "Product Promotion",
                desc: <span className="block text-sm text-muted-foreground leading-tight">Targeted campaigns</span>
              },
              {
                key: "other",
                icon: <TrendingUp className="w-7 h-7 text-accent mx-auto mb-1" />,
                title: "Other",
                desc: <span className="block text-sm text-muted-foreground leading-tight">Custom campaign type</span>
              }
            ].map(box => (
              <button
                key={box.key}
                type="button"
                onClick={() => handleCampaignTypeSelect(box.key)}
                className={`w-36 h-36 flex flex-col items-center justify-center text-center p-2 rounded-lg border bg-card transition-colors focus:outline-none ${formData.campaignType === box.key ? 'border-accent ring-2 ring-accent' : 'hover:border-accent/60'}`}
                aria-pressed={formData.campaignType === box.key}
              >
                {box.icon}
                <h3 className="font-semibold text-base mb-1 mt-1">{box.title}</h3>
                {box.desc}
              </button>
            ))}
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
                  className="w-full p-4 min-h-[56px] border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent text-base"
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
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  title="Please enter a valid email address."
                  placeholder="your@email.com"
                  className="w-full p-4 min-h-[56px] border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent text-base"
                />
              </div>
            </div>

            {/* Platform and Company/Brand Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Platform *</label>
                <select
                  name="platform"
                  value={formData.platform || ''}
                  onChange={handleChange}
                  required={formData.campaignType !== 'video-editing'}
                  disabled={formData.campaignType === 'video-editing'}
                  className={`w-full p-4 min-h-[56px] border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent text-base ${formData.campaignType === 'video-editing' ? 'opacity-60 cursor-not-allowed' : ''}`}
                >
                  <option value="" disabled>Select platform</option>
                  <option value="instagram">Instagram</option>
                  <option value="youtube">YouTube</option>
                  <option value="instagram-youtube">Instagram and YouTube combined</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company/Brand</label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full p-4 min-h-[56px] border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent text-base"
                />
              </div>
            </div>

            {/* Campaign Type - Full width, large box */}
            <div>
              <label className="block text-sm font-medium mb-2">Campaign Type *</label>
              <select
                name="campaignType"
                value={formData.campaignType}
                onChange={handleChange}
                required
                className="w-full p-4 min-h-[56px] border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent text-base"
              >
                <option value="" disabled>Select campaign type</option>
                <option value="brand-collaboration">Brand Collaboration</option>
                <option value="product-promotion">Product Promotion</option>
                <option value="video-editing">Video Editing</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Campaign Description - Full width, large box */}
            <div>
              <label className="block text-sm font-medium mb-2">Campaign Description *</label>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Tell me about your campaign goals, target audience, and any specific requirements..."
                rows={5}
                className="w-full p-4 min-h-[120px] border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent text-base"
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
                  Submit Your Request
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