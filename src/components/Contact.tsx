
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light">
            Ready to transform your space? Let's bring your vision to life.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-light text-stone-800 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <Card className="border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-amber-600" />
                    <div>
                      <p className="font-medium text-stone-800">Email</p>
                      <a href="mailto:contact@kastellydesign.com" className="text-stone-600 hover:text-amber-600 transition-colors">
                        contact@kastellydesign.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-amber-600" />
                    <div>
                      <p className="font-medium text-stone-800">Phone</p>
                      <a href="tel:+1234567890" className="text-stone-600 hover:text-amber-600 transition-colors">
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Instagram className="h-6 w-6 text-amber-600" />
                    <div>
                      <p className="font-medium text-stone-800">Instagram</p>
                      <a href="https://instagram.com/kastellydesign" className="text-stone-600 hover:text-amber-600 transition-colors">
                        @KastellyDesign
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h3 className="text-2xl font-light text-stone-800 mb-8">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  className="border-stone-300 focus:border-amber-600 focus:ring-amber-600" 
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="border-stone-300 focus:border-amber-600 focus:ring-amber-600" 
                />
              </div>
              <Input 
                type="tel" 
                placeholder="Your Phone" 
                className="border-stone-300 focus:border-amber-600 focus:ring-amber-600" 
              />
              <Textarea 
                placeholder="Tell us about your project..." 
                rows={5}
                className="border-stone-300 focus:border-amber-600 focus:ring-amber-600 resize-none" 
              />
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-stone-800 hover:bg-stone-700 text-white py-6 text-lg font-light transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
