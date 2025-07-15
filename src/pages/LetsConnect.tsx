import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const LetsConnect = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-6 py-20">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Ready to create viral content together? Let's discuss your project and bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-300">Email</p>
                      <p className="text-white font-medium">hello@sagaredits.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-300">Phone</p>
                      <p className="text-white font-medium">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-300">Location</p>
                      <p className="text-white font-medium">India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Why Work With Me?</h3>
                <ul className="space-y-2 text-blue-200">
                  <li>• 100K+ engaged followers</li>
                  <li>• Proven viral content creation</li>
                  <li>• Quick turnaround times</li>
                  <li>• Creative and original concepts</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-blue-200 mb-2">First Name</label>
                    <Input 
                      placeholder="John" 
                      className="bg-white/5 border-white/20 text-white placeholder:text-blue-300"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-200 mb-2">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-white/5 border-white/20 text-white placeholder:text-blue-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-blue-200 mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-white/5 border-white/20 text-white placeholder:text-blue-300"
                  />
                </div>
                
                <div>
                  <label className="block text-blue-200 mb-2">Project Type</label>
                  <Input 
                    placeholder="Meme marketing, Video editing, etc." 
                    className="bg-white/5 border-white/20 text-white placeholder:text-blue-300"
                  />
                </div>
                
                <div>
                  <label className="block text-blue-200 mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    rows={5}
                    className="bg-white/5 border-white/20 text-white placeholder:text-blue-300"
                  />
                </div>
                
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl">
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;