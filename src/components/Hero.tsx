
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmNWY1ZjQiLz4KPC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8 flex flex-col items-center">
            <img 
              src="/images/logo-camada-dark.png" 
              alt="Kastelly Logo" 
              className="object-contain"
            />
          </div>
          
          <h2 className="text-2xl md:text-4xl font-light text-stone-700 mb-6 leading-relaxed max-w-4xl mx-auto">
            Criando Móveis Sob Medida Que Refletem<br />
            <span className="text-amber-700 font-medium">Seu Estilo & Visão Únicos</span>
          </h2>
          
          <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Transforme seus espaços com móveis personalizados artesanais.<br />
            Onde materiais premium encontram design excepcional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => window.open('https://wa.me/5571992522386', '_blank')}
              size="lg" 
              className="bg-stone-800 hover:bg-stone-700 text-white px-8 py-6 text-lg rounded-none font-light transition-all duration-300 hover:scale-105 group">
              <img src="/images/whats.png" /> Iniciar Seu Projeto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
          </div>
        </div>
      </div>
    </section>
  );
};
