import React from 'react';
import { NAV_ITEMS } from '../constants';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#" className="text-3xl font-bold tracking-tighter font-serif italic text-white mb-4 block">
              Lumina<span className="text-rose-500">.</span>
            </a>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 font-light">
              Cuidando da sua beleza com excelência e carinho desde 2014.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {NAV_ITEMS.map((item) => (
                <a 
                    key={item.label} 
                    href={item.href} 
                    className="text-stone-400 hover:text-rose-400 transition-colors text-sm font-medium"
                >
                    {item.label}
                </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex space-x-6">
            <a href="#" className="bg-stone-800 p-3 rounded-full text-stone-400 hover:text-white hover:bg-rose-500 transition-all duration-300">
                <Instagram size={20} />
            </a>
            <a href="#" className="bg-stone-800 p-3 rounded-full text-stone-400 hover:text-white hover:bg-rose-500 transition-all duration-300">
                <Facebook size={20} />
            </a>
            <a href="#" className="bg-stone-800 p-3 rounded-full text-stone-400 hover:text-white hover:bg-rose-500 transition-all duration-300">
                <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center">
          <p className="text-stone-600 text-xs font-light">
            &copy; {new Date().getFullYear()} Lumina Beauty & Spa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;