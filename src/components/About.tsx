
import { CheckCircle } from "lucide-react";

export const About = () => {
  const services = [
    "Cozinhas Personalizadas",
    "Guarda-roupas Sob Medida",
    "Móveis para Sala de Estar",
    "Soluções para Home Office",
    "Conjuntos para Sala de Jantar",
    "Coleções para Quarto"
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
                Na Kastelly Design, acreditamos que cada peça de móvel personalizado é uma extensão da sua personalidade e estilo de vida. Com anos de experiência, nos dedicamos a criar ambientes únicos e funcionais, utilizando materiais de alta qualidade e design inspirador.
              </p>
              
              <p className="text-lg text-stone-600 leading-relaxed mb-8 font-light">
                Nossa paixão pelo artesanato e atenção aos detalhes garantem que cada projeto reflita sua visão, mantendo os mais altos padrões de qualidade e funcionalidade.
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
