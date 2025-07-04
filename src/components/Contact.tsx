import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Instagram, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
            Vamos Criar Juntos
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
          Pronto para transformar seu espaço com móveis planejados sob medida?<br />
          Conte com a Kastelly para dar vida ao projeto dos seus sonhos
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 animate-fade-in">
            <h3 className="text-2xl font-light text-stone-800 mb-8">Entre em Contato</h3>

            <div className="space-y-6">
              <Card className="border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-amber-600" />
                    <div>
                      <p className="font-medium text-stone-800">Email</p>
                      <a href="mailto:kastellydecoracoes@hotmail.com" className="text-stone-600 hover:text-amber-600 transition-colors">
                        kastellydecoracoes@hotmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-amber-600" />
                    <div>
                      <p className="font-medium text-stone-800">Telefone</p>
                      <a href="tel:+557133560278" className="text-stone-600 hover:text-amber-600 transition-colors">
                        (71) 3356-0278
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-amber-600" />
                    <div>
                      <p className="font-medium text-stone-800">Endereço</p>
                      <p className="text-stone-600">
                        Alameda das Cajazeiras, 517<br />
                        Caminho das Árvores<br />
                        CEP 41820-470<br />
                        Salvador, BA
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-amber-600" />
                    <div>
                      <p className="font-medium text-stone-800">Horários</p>
                      <p className="text-stone-600">
                        Seg-Sex: 9h às 18h<br />
                        Sábados: 9h às 13h<br />
                        Domingos e feriados: Fechado<br />
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Instagram className="h-6 w-6 text-amber-600" />
                    <div>
                      <p className="font-medium text-stone-800">Instagram</p>
                      <a href="https://instagram.com/kastellydecoracoes" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-amber-600 transition-colors">
                        @kastellydecoracoes
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-2 animate-fade-in">
            <h3 className="text-2xl font-light text-stone-800 mb-8">Visite nossa loja</h3>

            <p className="text-stone-600 font-light mb-6">
              Venha até a loja e converse com nossos projetistas sobre o seu projeto personalizado. Será um prazer te receber!
            </p>

            <div className="animate-fade-in">
              <div className="aspect-video bg-stone-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4807.635819292549!2d-38.46040834866429!3d-12.980884926553022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b19f5183023%3A0xc24a323bd4a00d53!2sKastelly%20Design!5e0!3m2!1spt-BR!2sbr!4v1751591188119!5m2!1spt-BR!2sbr"
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
