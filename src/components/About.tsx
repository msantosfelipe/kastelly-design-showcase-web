
import { CheckCircle } from "lucide-react";

export const About = () => {
  const services = [
    "Cozinhas Planejadas",
    "Guarda-Roupas Sob Medida",
    "Painéis, Estantes e Móveis para Sala",
    "Ambientes para Home Office",
    "Dormitórios Sob Medida",
    "Banheiros Planejados",
    "Closets Personalizados",
    "Mobiliário Comercial"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
              Sobre a Kastelly Design
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <p className="text-lg text-stone-600 leading-relaxed mb-8 font-light">
              Com mais de 15 anos de experiência no mercado, nossa loja é especializada em móveis planejados que unem qualidade, funcionalidade e bom gosto. Ao longo desses anos, ajudamos diversos clientes a transformarem seus lares com ambientes personalizados, feitos sob medida para atender às suas necessidades e estilo de vida.
              </p>
              
              <p className="text-lg text-stone-600 leading-relaxed mb-8 font-light">
              Nosso compromisso é entregar soluções completas, desde o projeto até a instalação, com atenção aos detalhes, ótimos materiais e atendimento humanizado. Seja para cozinha, quarto, sala, banheiro, closet ou qualquer outro espaço, criamos móveis que valorizam cada ambiente e tornam sua casa ainda mais especial.
              </p>
            </div>
            
            <div className="animate-fade-in">
              <h3 className="text-2xl font-light text-stone-800 mb-8">Nossos Serviços</h3>
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
