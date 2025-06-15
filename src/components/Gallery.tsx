
import { Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Gallery = () => {
  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      title: "Contemporary Living Suite",
      description: "Custom modular seating with Italian leather upholstery and solid walnut frames",
      category: "Living Room"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      title: "Executive Kitchen Design",
      description: "Handcrafted cabinetry featuring premium oak with integrated smart storage solutions",
      category: "Kitchen"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      title: "Master Bedroom Collection",
      description: "Bespoke bedroom suite with custom headboard and matching nightstands in rich mahogany",
      category: "Bedroom"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
      title: "Home Office Sanctuary",
      description: "Ergonomic workspace featuring built-in shelving and custom desk in sustainable bamboo",
      category: "Office"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      title: "Dining Room Elegance",
      description: "Artisan-crafted dining table with live-edge design and matching chairs in reclaimed wood",
      category: "Dining"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop",
      title: "Custom Wardrobe System",
      description: "Floor-to-ceiling wardrobe with personalized compartments and soft-close mechanisms",
      category: "Storage"
    }
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
            Explore our portfolio of custom furniture creations, each piece thoughtfully designed 
            and meticulously crafted to exceed our clients' expectations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer animate-fade-in">
              <div className="relative overflow-hidden bg-white rounded-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-600 text-white px-3 py-1 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light text-stone-800 mb-2">{project.title}</h3>
                  <p className="text-stone-600 font-light text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-stone-600 mb-6 font-light">
            Discover more inspiring projects and behind-the-scenes content on our Instagram
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white transition-all duration-300 group"
            >
              <Instagram className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Follow @KastellyDesign
            </Button>
            <Button 
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white transition-all duration-300 group"
            >
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
