import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Beauty Salon Atmosphere" 
          className="w-full h-full object-cover"
        />
        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-stone-900/30 bg-gradient-to-r from-stone-900/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left pt-20">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-rose-500/20 text-rose-100 backdrop-blur-sm text-sm font-semibold tracking-wider mb-6 border border-rose-500/30">
            SEU REFÚGIO DE BELEZA
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white leading-tight mb-6 drop-shadow-sm">
            Realce sua <span className="text-rose-300 italic">beleza</span> natural.
          </h1>
          <p className="text-lg md:text-xl text-stone-100 mb-10 font-light leading-relaxed max-w-xl">
            Um espaço pensado para o seu bem-estar, unindo técnicas modernas e atendimento acolhedor para revelar a sua melhor versão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
              Agendar Visita
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:border-white hover:text-rose-500" onClick={() => document.getElementById('services')?.scrollIntoView()}>
              Nossos Serviços <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;