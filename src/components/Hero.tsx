
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from 'react';

const carouselImages = [
  'images/hero/1.jpg',
  'images/hero/2.jpg',
  'images/hero/3.jpg',
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              zIndex: 0,
              transition: 'opacity 1s ease-in-out'
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 z-0"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center relative z-10 pt-8 md:pt-12 pb-24">
        <div id="section-hero" className="animate-fade-in">
          {/* Enhanced Logo */}
          <div className="mb-8 md:mb-12 flex flex-col items-center">
            <div className="p-6 rounded-2xl transform transition-all duration-500 hover:scale-105 overflow-hidden">
              <img 
                src="/images/logo-dark.jpg" 
                alt="Kastelly Logo" 
                className="object-contain h-36 md:h-44 rounded-lg"
              />
            </div>
          </div>
          
          {/* Simplified Text */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white leading-tight mb-6">
              Criando Móveis Sob Medida Que Refletem
              <span className="block text-amber-300 font-medium mt-2">Seu Estilo & Visão Únicos</span>
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-white/90 leading-relaxed mb-4">
                Transforme seus espaços com móveis planejados
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <Button 
              onClick={() => window.open('https://wa.me/5571992522386', '_blank')}
              size="lg" 
              className="bg-stone-800 hover:bg-stone-700 text-white px-8 py-6 text-lg rounded-none font-light transition-all duration-300 hover:scale-105 group">
               Inicie seu projeto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <img src="/images/whats.png" className="h-6 w-6 mr-2" />
            </Button>
            <Button 
              onClick={() => {
                const section = document.getElementById('section-gallery');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline"
              size="lg" 
              className="border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white px-8 py-6 text-lg rounded-none font-light transition-all duration-300"
            >
              Ver Portfólio
            </Button>
            <Button 
              onClick={() => window.open('https://www.instagram.com/kastellydecoracoes', '_blank')}
              size="lg" 
              className="bg-stone-800 hover:bg-stone-700 text-white px-8 py-6 text-lg rounded-none font-light transition-all duration-300 hover:scale-105 group">
               Visite nosso Instagram 
               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
               <img src="/images/instagram.png" className="h-6 w-6 mr-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
