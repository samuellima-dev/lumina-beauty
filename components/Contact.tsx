import React, { useState } from 'react';
import Button from './Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', service: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Solicitação enviada! Nossa equipe entrará em contato para confirmar seu horário.');
    setFormState({ name: '', phone: '', service: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background blob */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-rose-50/50 rounded-l-[100px] z-0 hidden lg:block"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info */}
          <div>
            <span className="text-rose-500 font-medium tracking-widest uppercase text-xs">Contato</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mt-3 mb-6">
              Estamos Esperando por Você
            </h2>
            <p className="text-stone-600 text-lg mb-10 leading-relaxed font-light">
              Agende seu horário ou visite nosso espaço. Estamos prontos para te receber com um café quentinho e muita atenção.
            </p>

            <div className="space-y-8">
               <div className="flex items-start">
                <div className="bg-rose-100 p-3 rounded-full mr-5 text-rose-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 font-serif text-lg">Telefone & WhatsApp</h4>
                  <p className="text-stone-600 font-light">+55 (11) 99876-5432</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-rose-100 p-3 rounded-full mr-5 text-rose-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 font-serif text-lg">Endereço</h4>
                  <p className="text-stone-600 font-light">Rua das Acácias, 1000 - Jardins, SP</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-rose-100 p-3 rounded-full mr-5 text-rose-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 font-serif text-lg">Horário de Funcionamento</h4>
                  <p className="text-stone-600 font-light">Ter - Sáb: 09h às 20h</p>
                  <p className="text-stone-600 font-light">Dom e Seg: Fechado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-stone-100">
            <h3 className="text-2xl font-serif font-bold text-stone-800 mb-6">Agendar Visita</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-600 mb-2">Seu Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-full border border-stone-200 bg-stone-50 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white transition-all"
                  placeholder="Maria Silva"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-stone-600 mb-2">Seu WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-full border border-stone-200 bg-stone-50 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-stone-600 mb-2">Serviço de Interesse</label>
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-full border border-stone-200 bg-stone-50 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  <option value="">Selecione...</option>
                  <option value="corte">Corte & Styling</option>
                  <option value="coloracao">Coloração</option>
                  <option value="manicure">Manicure & Pedicure</option>
                  <option value="spa">Spa Facial</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <Button type="submit" className="w-full mt-2">
                Solicitar Agendamento
              </Button>
              <p className="text-center text-stone-400 text-xs mt-4">
                Entraremos em contato via WhatsApp para confirmar a disponibilidade.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;