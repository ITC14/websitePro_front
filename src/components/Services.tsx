import { Globe, Users, Search, BarChart3, Smartphone, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Création de Sites Web",
      description: "Sites vitrines, e-commerce et applications web sur mesure avec design moderne et responsive.",
      features: ["Design responsive", "Optimisation SEO", "Sécurité renforcée", "Performance optimale"],
      color: "blue"
    },
    {
      icon: Users,
      title: "Gestion des Réseaux Sociaux",
      description: "Stratégie de contenu, community management et campagnes publicitaires ciblées.",
      features: ["Stratégie de contenu", "Community management", "Publicité ciblée", "Analyse d'engagement"],
      color: "emerald"
    },
    {
      icon: Search,
      title: "Référencement SEO",
      description: "Optimisation pour les moteurs de recherche et référencement local Google Maps.",
      features: ["SEO technique", "Référencement local", "Audit SEO", "Suivi de positions"],
      color: "orange"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Suivi des performances et analyses détaillées pour optimiser votre ROI.",
      features: ["Google Analytics", "Rapports détaillés", "KPI personnalisés", "Recommandations"],
      color: "purple"
    },
    {
      icon: Smartphone,
      title: "Applications Mobile",
      description: "Développement d'applications iOS et Android pour étendre votre présence digitale.",
      features: ["Applications natives", "Design intuitif", "Notifications push", "Synchronisation cloud"],
      color: "indigo"
    },
    {
      icon: Shield,
      title: "Sécurité & Maintenance",
      description: "Protection de vos données, sauvegardes automatiques et maintenance technique.",
      features: ["Sécurité SSL", "Sauvegardes automatiques", "Monitoring 24/7", "Support technique"],
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600 hover:bg-blue-100",
      emerald: "bg-emerald-50 text-emerald-600 hover:bg-emerald-100",
      orange: "bg-orange-50 text-orange-600 hover:bg-orange-100",
      purple: "bg-purple-50 text-purple-600 hover:bg-purple-100",
      indigo: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100",
      red: "bg-red-50 text-red-600 hover:bg-red-100"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes pour développer votre présence digitale et 
            atteindre vos objectifs de croissance au Mali et au-delà.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 rounded-lg ${getColorClasses(service.color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <IconComponent size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="text-teal-600 hover:text-green-800 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                    En savoir plus →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-400 to-emerald-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à transformer votre présence digitale ?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contactez-nous dès aujourd'hui pour un audit gratuit et un devis personnalisé.
            </p>
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
              Demander un audit gratuit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;