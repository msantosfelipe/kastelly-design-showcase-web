
import { Instagram, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      title: "Conjunto Contemporâneo para Sala",
      description: "Sofá modular personalizado com estofamento em couro italiano e estruturas em nogueira maciça",
      category: "Sala de Estar"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      title: "Cozinha Executiva",
      description: "Marcenaria artesanal em carvalho premium com soluções inteligentes de armazenamento integrado",
      category: "Cozinha"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      title: "Coleção Quarto Master",
      description: "Conjunto personalizado para quarto com cabeceira sob medida e criados-mudo em mogno nobre",
      category: "Quarto"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
      title: "Santuário Home Office",
      description: "Espaço de trabalho ergonômico com estantes integradas e mesa personalizada em bambu sustentável",
      category: "Escritório"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      title: "Elegância na Sala de Jantar",
      description: "Mesa artesanal com design de borda viva e cadeiras combinando em madeira de demolição",
      category: "Jantar"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop",
      title: "Sistema de Guarda-roupa Personalizado",
      description: "Guarda-roupa do chão ao teto com compartimentos personalizados e mecanismos de fechamento suave",
      category: "Armazenamento"
    }
  ];

  return (
    <section id="section-gallery" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
            Projetos em Destaque
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
            Explore nosso portfólio de criações em móveis personalizados, cada peça cuidadosamente 
            projetada e meticulosamente confeccionada para superar as expectativas dos nossos clientes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer animate-fade-in">
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
              </DialogTrigger>
              <DialogContent className="sm:max-w-4xl p-0 bg-transparent border-0 max-h-[90vh]">
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute -right-12 -top-12 text-white hover:bg-white/20 hover:text-white rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
                    }}
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Fechar</span>
                  </Button>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full max-h-[80vh] object-contain rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                    <h3 className="text-2xl font-light text-white mb-2">{project.title}</h3>
                    <p className="text-white/90 font-light">{project.description}</p>
                    <span className="inline-block mt-3 bg-amber-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-stone-600 mb-6 font-light">
            Descubra mais projetos inspiradores e conteúdo dos bastidores no nosso Instagram
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => window.open('https://www.instagram.com/kastellydecoracoes', '_blank')}
              variant="outline" 
              size="lg"
              className="border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white transition-all duration-300 group"
            >
              <Instagram className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Siga @kastellydecorações
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
