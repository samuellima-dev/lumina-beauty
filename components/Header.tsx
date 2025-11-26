import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className={`text-3xl font-bold tracking-tighter font-serif italic ${isScrolled ? 'text-stone-800' : 'text-stone-800 md:text-white'}`}>
              Lumina<span className="text-rose-500">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-rose-500 tracking-wide ${
                  isScrolled ? 'text-stone-600' : 'text-stone-100'
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant={isScrolled ? 'primary' : 'white'}
              className="px-6 py-2 text-sm"
              onClick={() => window.location.href = '#contact'}
            >
              Agendar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled || isMobileMenuOpen ? 'text-stone-800' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-stone-100 py-6 px-6 flex flex-col space-y-4 animate-fade-in-down">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-serif italic text-stone-600 hover:text-rose-500 py-2 border-b border-stone-50 last:border-none"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button 
            variant="primary" 
            className="w-full justify-center mt-4"
             onClick={() => {
               window.location.href = '#contact';
               setIsMobileMenuOpen(false);
             }}
          >
            Agendar Horário
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;