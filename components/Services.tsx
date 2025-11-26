import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-rose-500 font-medium tracking-widest uppercase text-xs">Menu de Serviços</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mt-3">
            Cuidados Exclusivos
          </h2>
          <p className="text-stone-500 mt-6 text-lg font-light">
            De tratamentos capilares a rituais de spa, oferecemos uma experiência completa de beleza e bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-stone-100 hover:border-rose-100"
              >
                <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-rose-500 transition-colors duration-500">
                  <Icon className="w-7 h-7 text-rose-500 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-800 mb-3">{service.title}</h3>
                <p className="text-stone-500 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;