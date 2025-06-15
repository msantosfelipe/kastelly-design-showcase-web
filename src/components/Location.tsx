
import { MapPin } from "lucide-react";

export const Location = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
            Visit Our Showroom
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium text-stone-800 mb-2">Our Address</h3>
                  <p className="text-stone-600 font-light leading-relaxed">
                    123 Design Avenue<br />
                    Furniture District<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
              
              <p className="text-stone-600 font-light mb-6">
                Visit our showroom to see our craftsmanship up close and discuss your custom furniture needs with our design team.
              </p>
              
              <div className="text-sm text-stone-500 font-light">
                <p><strong>Hours:</strong> Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: By appointment only</p>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="aspect-video bg-stone-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.75889797932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1635959996214!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kastelly Design Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
