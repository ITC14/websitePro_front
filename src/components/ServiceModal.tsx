import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import QuoteForm from './QuoteForm';
import { Phone, Mail } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    icon: any;
    title: string;
    description: string;
    features: string[];
    color: string;
    detailedDescription?: string;
    pricing?: string;
    duration?: string;
    technologies?: string[];
  } | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Animation d'entrée
      gsap.fromTo('.modal-overlay', 
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo('.modal-content', 
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.7)' }
      );
    } else {
      // Animation de sortie
      gsap.to('.modal-overlay', { opacity: 0, duration: 0.2 });
      gsap.to('.modal-content', { opacity: 0, y: 50, scale: 0.9, duration: 0.2 });
    }
  }, [isOpen]);

  const handleQuoteRequest = () => {
    setShowQuoteForm(true);
  };

  const handleAppointmentRequest = () => {
    setShowAppointmentForm(true);
  };

  const handleCloseQuoteForm = () => {
    setShowQuoteForm(false);
  };

  const handleCloseAppointmentForm = () => {
    setShowAppointmentForm(false);
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600",
      emerald: "bg-emerald-50 text-emerald-600",
      orange: "bg-orange-50 text-orange-600",
      purple: "bg-purple-50 text-purple-600",
      indigo: "bg-indigo-50 text-indigo-600",
      red: "bg-red-50 text-red-600"
    };
    return colors[color as keyof typeof colors];
  };

  if (!isOpen || !service) return null;

  const IconComponent = service.icon;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay">
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={onClose}
        ></div>
        
        {/* Modal Content */}
        <div className="relative bg-white rounded-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto modal-content">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-lg ${getColorClasses(service.color)} flex items-center justify-center`}>
                <IconComponent size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Description détaillée */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.detailedDescription || service.description}
              </p>
            </div>

            {/* Caractéristiques */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Caractéristiques</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies (si disponibles) */}
            {service.technologies && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Informations supplémentaires */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {service.duration && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">Durée estimée</h4>
                  <p className="text-gray-600">{service.duration}</p>
                </div>
              )}
              {service.pricing && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">Tarification</h4>
                  <p className="text-gray-600">{service.pricing}</p>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Prêt à commencer ?
              </h3>
              <p className="text-gray-600 mb-4">
                Contactez-nous pour un devis personnalisé et commencer votre projet dès aujourd'hui.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleQuoteRequest}
                  className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                >
                  Demander un devis
                </button>
                <button 
                  onClick={handleAppointmentRequest}
                  className="border border-teal-600 text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
                >
                  Prendre rendez-vous
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formulaire de devis */}
      <QuoteForm 
        isOpen={showQuoteForm} 
        onClose={handleCloseQuoteForm} 
      />

      {/* Formulaire de rendez-vous */}
      {showAppointmentForm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={handleCloseAppointmentForm}></div>
          <div className="relative bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Prendre rendez-vous</h3>
              <button
                onClick={handleCloseAppointmentForm}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                Pour prendre rendez-vous, contactez-nous directement :
              </p>
              
              <div className="space-y-3">
                <a 
                  href="tel:+22360442741"
                  className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Appeler</p>
                    <p className="text-sm text-gray-600">+223 60 44 27 41</p>
                  </div>
                </a>
                
                <a 
                  href={`mailto:machallahoudev@gmail.com?subject=Rendez-vous - ${service?.title}`}
                  className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
                >
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Mail size={16} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Envoyer un email</p>
                    <p className="text-sm text-gray-600">machallahoudev@gmail.com</p>
                  </div>
                </a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Horaires disponibles :</strong><br />
                  Lundi - Vendredi : 8h00 - 18h00<br />
                  Samedi : 9h00 - 13h00
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceModal; 