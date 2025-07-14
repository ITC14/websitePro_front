import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    service: 'audit',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    const handleAuditRequest = () => {
      // Pre-fill the form for audit request
      setFormData(prev => ({
        ...prev,
        service: 'audit',
        message: `Bonjour,

Je souhaite bénéficier d'un audit gratuit de ma présence digitale.

Pouvez-vous analyser :
- Mon site web actuel (si applicable)
- Ma présence sur les réseaux sociaux
- Mon référencement SEO
- Mes performances marketing

Merci de me contacter pour planifier cet audit.

Cordialement.`
      }));
    };

    // Check if audit request was made
    const auditRequested = localStorage.getItem('auditRequest');
    if (auditRequested === 'true') {
      handleAuditRequest();
      localStorage.removeItem('auditRequest');
    }

    // Listen for audit request events
    window.addEventListener('auditRequest', handleAuditRequest);

    return () => {
      window.removeEventListener('auditRequest', handleAuditRequest);
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à transformer votre présence digitale ? Contactez-nous dès aujourd'hui 
            pour un devis personnalisé et gratuit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Parlons de votre projet
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre équipe d'experts est à votre disposition pour étudier vos besoins 
                et vous proposer les meilleures solutions adaptées à votre activité.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                  <p className="text-gray-600">+223 60 44 27 41</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Mail size={24} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">machallahoudev@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <MapPin size={24} className="text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                  <p className="text-gray-600">Faladiè Sema, Bamako</p>
                  <p className="text-gray-600">Mali</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Clock size={24} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Horaires</h4>
                  <p className="text-gray-600">Lun - Ven: 8h00 - 18h00</p>
                  <p className="text-gray-600">Sam: 9h00 - 13h00</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-teal-50 to-emerald-100 p-6 rounded-xl border border-teal-100">
              <h4 className="font-semibold text-gray-900 mb-2">
                🚀 Réactivité garantie
              </h4>
              <p className="text-gray-600 text-sm">
                Nous nous engageons à vous répondre dans les 24 heures pour toute demande de devis ou d'information.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Demande de devis gratuit
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="+223 XX XX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="entreprise" className="block text-sm font-medium text-gray-700 mb-2">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="entreprise"
                    name="entreprise"
                    value={formData.entreprise}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service souhaité *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="audit">Audit gratuit de présence digitale</option>
                    <option value="site-web">Création de site web</option>
                    <option value="reseaux-sociaux">Gestion des réseaux sociaux</option>
                    <option value="seo">Référencement SEO</option>
                    <option value="e-commerce">E-commerce</option>
                    <option value="mobile">Application mobile</option>
                    <option value="maintenance">Maintenance & Support</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget approximatif
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  >
                    <option value="">Sélectionnez votre budget</option>
                    <option value="moins-500k">Moins de 500 000 FCFA</option>
                    <option value="500k-1m">500 000 - 1 000 000 FCFA</option>
                    <option value="1m-2m">1 000 000 - 2 000 000 FCFA</option>
                    <option value="2m-5m">2 000 000 - 5 000 000 FCFA</option>
                    <option value="plus-5m">Plus de 5 000 000 FCFA</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Description du projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
                  placeholder="Décrivez votre projet, vos objectifs et vos attentes..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-teal-400 to-emerald-700 text-white hover:from-teal-600 hover:to-emerald-800 transform hover:scale-105'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <Check size={20} />
                    <span>Message envoyé !</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Envoyer ma demande</span>
                  </>
                )}
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              * Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;