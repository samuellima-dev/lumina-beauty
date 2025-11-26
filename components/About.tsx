import React from 'react';
import { STATS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Hair stylist working" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-200 rounded-full z-[-1] opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-stone-300 rounded-full z-[-1]"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <span className="text-rose-500 font-medium tracking-widest uppercase text-xs">Sobre a Lumina</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mt-3 mb-6">
              Mais que um salão, um momento para você.
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              Acreditamos que a beleza vai muito além da estética: é sobre como você se sente. Na Lumina, criamos um ambiente onde você pode relaxar, desconectar do mundo e focar no seu autocuidado.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Nossa equipe de especialistas está constantemente atualizada com as tendências globais, mas nosso foco principal é entender e respeitar a sua individualidade, realçando o que você tem de melhor.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-8 border-t border-stone-200 pt-8">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="text-3xl md:text-4xl font-serif font-bold text-rose-500">{stat.value}</p>
                  <p className="text-stone-500 text-sm mt-1 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;