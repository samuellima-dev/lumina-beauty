import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-stone-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800">
            Histórias de Autoestima
          </h2>
          <p className="text-stone-500 mt-4 text-lg font-light">
            A satisfação de ver nossas clientes se sentindo bem consigo mesmas é o que nos move.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex text-rose-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-stone-600 italic mb-8 leading-relaxed text-lg font-light">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center mt-auto border-t border-stone-100 pt-6">
                <img 
                  src={testimonial.avatarUrl} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover ring-2 ring-rose-100"
                />
                <div>
                  <h4 className="font-bold text-stone-800 font-serif">{testimonial.name}</h4>
                  <p className="text-stone-400 text-xs uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;