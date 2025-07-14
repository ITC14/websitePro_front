import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/MyLogo_x2A_BV.png';
import QuoteForm from './QuoteForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef} className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-gradient-to-r from-white-200 to-white-800  rounded-lg">
                <span className="text-white font-bold text-xl">
                  <img 
                    src={logo} 
                    alt="Machallahou Dev" 
                    className="h-12 w-auto sm:h-16 md:h-20 max-w-[160px] sm:max-w-[200px] md:max-w-[240px] object-contain" 
                  />
                </span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">Machallahou Dev</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {isHomePage ? (
              <>
                <a href="#accueil" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Accueil
                </a>
                <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Services
                </a>
                <a href="#realisations" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Réalisations
                </a>
                <a href="#temoignages" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Témoignages
                </a>
                <a href="#blog" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Blog
                </a>
                <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Contact
                </a>
              </>
            ) : (
              <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                ← Retour à l'accueil
              </Link>
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => setIsQuoteFormOpen(true), 600);
              }}
              className="bg-gradient-to-r from-emerald-400 to-emerald-700 text-white px-6 py-2 rounded-lg hover:from-emerald-600 hover:to-emerald-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Devis Gratuit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <nav className="flex flex-col py-4">
              {isHomePage ? (
                <>
                  <a href="#accueil" className="px-4 py-2 text-emerald-600 hover:bg-gray-50 transition-colors">
                    Accueil
                  </a>
                  <a href="#services" className="px-4 py-2 text-emerald-600 hover:bg-gray-50 transition-colors">
                    Services
                  </a>
                  <a href="#realisations" className="px-4 py-2 text-emerald-600 hover:bg-gray-50 transition-colors">
                    Réalisations
                  </a>
                  <a href="#temoignages" className="px-4 py-2 text-emerald-600 hover:bg-gray-50 transition-colors">
                    Témoignages
                  </a>
                  <a href="#blog" className="px-4 py-2 text-emerald-600 hover:bg-gray-50 transition-colors">
                    Blog
                  </a>
                  <a href="#contact" className="px-4 py-2 text-emerald-600 hover:bg-gray-50 transition-colors">
                    Contact
                  </a>
                </>
              ) : (
                <Link to="/" className="px-4 py-2 text-emerald-600 hover:bg-gray-50 transition-colors">
                  ← Retour à l'accueil
                </Link>
              )}
              <div className="px-4 py-2">
                <button 
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setTimeout(() => {
                      setIsQuoteFormOpen(true);
                      setIsMenuOpen(false);
                    }, 600);
                  }}
                  className="w-full bg-gradient-to-r from-emerald-400 to-emerald-700 text-white px-6 py-2 rounded-lg hover:from-emerald-600 hover:to-emerald-800 transition-all duration-200"
                >
                  Devis Gratuit
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      {/* Quote Form Modal */}
      <QuoteForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)} 
      />
    </header>
  );
};

export default Header;