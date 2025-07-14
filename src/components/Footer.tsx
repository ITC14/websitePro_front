import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from "../assets/MyLogo_x2A_BV.png";

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("");

  const handleNewsletterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsletterEmail(e.target.value);
    setNewsletterStatus("");
  };

  const handleNewsletterSubmit = async (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      setNewsletterStatus("Veuillez entrer un email valide.");
      return;
    }
    setNewsletterStatus("Envoi en cours...");
    try {
      const response = await fetch("http://localhost:3001/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const data = await response.json();
      if (response.ok) {
        setNewsletterStatus(data.message || "Merci pour votre inscription !");
        setNewsletterEmail("");
      } else {
        setNewsletterStatus(data.error || "Erreur lors de l'inscription.");
      }
    } catch (err) {
      setNewsletterStatus("Erreur réseau. Veuillez réessayer.");
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-white-200 to-white-800 p-2 rounded-lg">
              <span className="text-white font-bold text-xl">
                <img 
                src={logo} 
                alt="Machallahou Dev" 
                className="h-16 sm:h-20 w-auto " 
                />
              </span>
            </div>
              <span className="ml-3 text-xl font-bold">Machallahou Dev</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Votre partenaire de confiance pour la transformation digitale au Mali. 
              Nous créons des solutions sur mesure pour valoriser votre marque.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Création de sites web
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Gestion des réseaux sociaux
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Référencement SEO
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Applications mobiles
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Maintenance & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <a href="#accueil" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#realisations" className="text-gray-300 hover:text-white transition-colors">
                  Nos réalisations
                </a>
              </li>
              <li>
                <a href="#temoignages" className="text-gray-300 hover:text-white transition-colors">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">faladiè Sema, Bamako</p>
                  <p className="text-gray-300">Mali</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-emerald-400 flex-shrink-0" />
                <p className="text-gray-300">+223 60 44 27 41</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-emerald-400 flex-shrink-0" />
                <p className="text-gray-300">machallahoudev@gmail.com</p>
              </div>
            </div>
            
            {/* Newsletter */}
            <form className="mt-8" onSubmit={handleNewsletterSubmit}>
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <p className="text-gray-300 text-sm mb-4">
                Recevez nos derniers conseils et actualités.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                  value={newsletterEmail}
                  onChange={handleNewsletterChange}
                  required
                />
                <button
                  type="submit"
                  className="bg-teal-600 px-4 py-2 rounded-r-lg hover:bg-green-600 transition-colors"
                >
                  OK
                </button>
              </div>
              {newsletterStatus && (
                <div className="mt-2 text-sm text-emerald-400">{newsletterStatus}</div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Machallahou Dev. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white transition-colors">
                CGV
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Politique de cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;