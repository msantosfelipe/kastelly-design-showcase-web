
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Instagram, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    // Por enquanto, apenas registra os dados do formulário
    // TODO: Integrar com Supabase para envio de formulários
    alert('Obrigado pelo seu interesse! Entraremos em contato em até 24 horas.');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
            Vamos Criar Juntos
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
            Pronto para transformar seu espaço com móveis projetados sob medida? 
            Compartilhe sua visão conosco e vamos dar vida ao projeto dos seus sonhos.
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
            <h3 className="text-2xl font-light text-stone-800 mb-8">Inicie Seu Projeto</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Nome Completo *</label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo" 
                    className="border-stone-300 focus:border-amber-600 focus:ring-amber-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Email *</label>
                  <Input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu.email@exemplo.com" 
                    className="border-stone-300 focus:border-amber-600 focus:ring-amber-600"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Telefone</label>
                  <Input 
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999" 
                    className="border-stone-300 focus:border-amber-600 focus:ring-amber-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Tipo de Projeto</label>
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-stone-300 bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
                  >
                    <option value="">Selecione o tipo de projeto</option>
                    <option value="cozinha">Cozinha</option>
                    <option value="sala-estar">Sala de Estar</option>
                    <option value="quarto">Quarto</option>
                    <option value="escritorio">Home Office</option>
                    <option value="jantar">Sala de Jantar</option>
                    <option value="armazenamento">Armazenamento Personalizado</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Faixa de Orçamento</label>
                <select 
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-stone-300 bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
                >
                  <option value="">Selecione a faixa de orçamento</option>
                  <option value="25k-50k">R$ 25.000 - R$ 50.000</option>
                  <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                  <option value="100k-250k">R$ 100.000 - R$ 250.000</option>
                  <option value="250k+">R$ 250.000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Descrição do Projeto *</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte-nos sobre sua visão, dimensões do espaço, preferências de estilo, cronograma e requisitos específicos..." 
                  rows={5}
                  className="border-stone-300 focus:border-amber-600 focus:ring-amber-600 resize-none" 
                  required
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-stone-800 hover:bg-stone-700 text-white py-6 text-lg font-light transition-all duration-300 hover:scale-105"
              >
                Enviar Consulta do Projeto
              </Button>

              <p className="text-sm text-stone-500 text-center">
                Normalmente respondemos em até 24 horas e oferecemos consultas iniciais gratuitas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
