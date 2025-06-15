
import { MapPin } from "lucide-react";

export const Location = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
            Visite Nosso Showroom
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium text-stone-800 mb-2">Nosso Endereço</h3>
                  <p className="text-stone-600 font-light leading-relaxed">
                    Rua do Design, 123<br />
                    Bairro Móveis<br />
                    São Paulo, SP 01234-567<br />
                    Brasil
                  </p>
                </div>
              </div>
              
              <p className="text-stone-600 font-light mb-6">
                Visite nosso showroom para ver nosso artesanato de perto e discutir suas necessidades de móveis personalizados com nossa equipe de design.
              </p>
              
              <div className="text-sm text-stone-500 font-light">
                <p><strong>Horários:</strong> Segunda - Sexta: 9h às 18h</p>
                <p>Sábado: 10h às 16h</p>
                <p>Domingo: Apenas com agendamento</p>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="aspect-video bg-stone-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1974782229!2d-46.653499684585626!3d-23.564720484682658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59541c6c79c3%3A0x36b2c6ce6e4b1e11!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1635959996214!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Kastelly Design"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
