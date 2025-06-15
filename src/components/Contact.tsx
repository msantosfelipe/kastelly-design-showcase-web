
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Instagram, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // For now, just log the form data
    // TODO: Integrate with Supabase for form submissions
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
            Let's Create Together
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
            Ready to transform your space with custom-designed furniture? 
            Share your vision with us and let's bring your dream project to life.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 animate-fade-in">
            <h3 className="text-2xl font-light text-stone-800 mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <Card className="border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-amber-600" />
                    <div>
                      <p className="font-medium text-stone-800">Email</p>
                      <a href="mailto:hello@kastellydesign.com" className="text-stone-600 hover:text-amber-600 transition-colors">
                        hello@kastellydesign.com
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
                    <MapPin className="h-6 w-6 text-amber-600" />
                    <div>
                      <p className="font-medium text-stone-800">Showroom</p>
                      <p className="text-stone-600">123 Design Avenue<br />New York, NY 10001</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-amber-600" />
                    <div>
                      <p className="font-medium text-stone-800">Hours</p>
                      <p className="text-stone-600">Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM</p>
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
          
          <div className="lg:col-span-2 animate-fade-in">
            <h3 className="text-2xl font-light text-stone-800 mb-8">Start Your Project</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Full Name *</label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name" 
                    className="border-stone-300 focus:border-amber-600 focus:ring-amber-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Email Address *</label>
                  <Input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com" 
                    className="border-stone-300 focus:border-amber-600 focus:ring-amber-600"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Phone Number</label>
                  <Input 
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567" 
                    className="border-stone-300 focus:border-amber-600 focus:ring-amber-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Project Type</label>
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-stone-300 bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
                  >
                    <option value="">Select project type</option>
                    <option value="kitchen">Kitchen Design</option>
                    <option value="living-room">Living Room</option>
                    <option value="bedroom">Bedroom</option>
                    <option value="office">Home Office</option>
                    <option value="dining">Dining Room</option>
                    <option value="storage">Custom Storage</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Budget Range</label>
                <select 
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-stone-300 bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
                >
                  <option value="">Select budget range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Project Description *</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your vision, space dimensions, style preferences, timeline, and any specific requirements..." 
                  rows={5}
                  className="border-stone-300 focus:border-amber-600 focus:ring-amber-600 resize-none" 
                  required
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-stone-800 hover:bg-stone-700 text-white py-6 text-lg font-light transition-all duration-300 hover:scale-105"
              >
                Send Project Inquiry
              </Button>

              <p className="text-sm text-stone-500 text-center">
                We typically respond within 24 hours and offer free initial consultations.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
