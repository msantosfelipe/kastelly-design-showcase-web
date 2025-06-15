
import { CheckCircle } from "lucide-react";

export const About = () => {
  const services = [
    "Custom Kitchen Design",
    "Bespoke Wardrobes",
    "Living Room Furniture",
    "Home Office Solutions",
    "Dining Room Sets",
    "Bedroom Collections"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
              About Kastelly Design
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <p className="text-lg text-stone-600 leading-relaxed mb-8 font-light">
                At Kastelly Design, we believe every piece of custom furniture is an extension of your personality and lifestyle. With years of experience, we are dedicated to creating unique and functional environments, using high-quality materials and inspiring design.
              </p>
              
              <p className="text-lg text-stone-600 leading-relaxed mb-8 font-light">
                Our passion for craftsmanship and attention to detail ensures that each project reflects your vision while maintaining the highest standards of quality and functionality.
              </p>
            </div>
            
            <div className="animate-fade-in">
              <h3 className="text-2xl font-light text-stone-800 mb-8">Our Services</h3>
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span className="text-stone-700 font-light">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
