
import { Instagram, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      id: 1,
      image: "images/gallery/cozinha/1.jpg",
      title: "Cozinha planejada com design moderno",
      description: "Ambientes otimizados para unir funcionalidade e estilo. Ideal para quem ama cozinhar com praticidade",
      category: "Cozinha"
    },
    {
      id: 2,
      image: "images/gallery/cozinha/2.jpg",
      title: "Elegância e organização",
      description: "Armários sob medida, acabamento premium e espaços inteligentes que valorizam cada centímetro",
      category: "Cozinha"
    },
    {
      id: 3,
      image: "images/gallery/closet/1.jpg",
      title: "Tudo no seu lugar",
      description: "Gavetas, nichos e cabideiros sob medida para facilitar sua rotina e manter tudo visível e acessível",
      category: "Closet"
    },
    {
      id: 4,
      image: "images/gallery/quarto/1.jpg",
      title: "Conforto que abraça",
      description: "Um ambiente acolhedor e planejado para garantir noites tranquilas e bem-estar",
      category: "Quarto"
    },
    {
      id: 5,
      image: "images/gallery/banheiro/1.jpg",
      title: "Banheiro com design inteligente",
      description: "Um banheiro pensado para oferecer conforto e beleza, do primeiro ao último momento do seu dia",
      category: "Banheiro"
    },
    {
      id: 6,
      image: "images/gallery/sala/1.jpg",
      title: "Sala aconchegante e sofisticada",
      description: "Um espaço pensado para receber bem, com móveis que trazem conforto e elegância ao ambiente",
      category: "Sala"
    },
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
