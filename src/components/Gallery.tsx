
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Gallery = () => {
  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      title: "Modern Living Room",
      description: "Custom-designed furniture for contemporary living"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      title: "Elegant Kitchen",
      description: "Handcrafted cabinetry with premium finishes"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      title: "Luxury Bedroom",
      description: "Bespoke bedroom suite with attention to detail"
    }
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light">
            Discover some of our finest custom furniture creations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer animate-fade-in">
              <div className="relative overflow-hidden bg-white rounded-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-light text-stone-800 mb-2">{project.title}</h3>
                  <p className="text-stone-600 font-light">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-stone-600 mb-6 font-light">
            Check out more inspiring projects on our Instagram!
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white transition-all duration-300 group"
          >
            <Instagram className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Follow @KastellyDesign
          </Button>
        </div>
      </div>
    </section>
  );
};
