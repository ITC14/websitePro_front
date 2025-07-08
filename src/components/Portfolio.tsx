import { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Agence de Voyage Mali Tours",
      category: "site-web",
      image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Site web complet avec système de réservation et paiement en ligne",
      tags: ["E-commerce", "Responsive", "SEO"],
      results: "+300% de réservations en ligne"
    },
    {
      id: 2,
      title: "Restaurant Le Palmier",
      category: "reseaux-sociaux",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Stratégie social media et campagnes publicitaires ciblées",
      tags: ["Instagram", "Facebook", "Community Management"],
      results: "+150% d'engagement"
    },
    {
      id: 3,
      title: "Boutique Mode Africaine",
      category: "site-web",
      image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "E-commerce moderne avec paiement mobile money intégré",
      tags: ["E-commerce", "Mobile Money", "UX/UI"],
      results: "+250% de ventes en ligne"
    },
    {
      id: 4,
      title: "Cabinet Médical Bamako",
      category: "seo",
      image: "https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Optimisation SEO local et présence Google Maps",
      tags: ["SEO Local", "Google Maps", "Santé"],
      results: "1ère position Google Maps"
    },
    {
      id: 5,
      title: "Startup FinTech MLI",
      category: "reseaux-sociaux",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Lancement sur les réseaux sociaux et acquisition de leads",
      tags: ["LinkedIn", "Lead Generation", "B2B"],
      results: "+500 leads qualifiés"
    },
    {
      id: 6,
      title: "École Internationale",
      category: "site-web",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Portail éducatif avec espace parents et élèves",
      tags: ["Éducation", "Portail", "Multi-utilisateurs"],
      results: "+80% d'inscriptions"
    }
  ];

  const filters = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'site-web', label: 'Sites Web' },
    { id: 'reseaux-sociaux', label: 'Réseaux Sociaux' },
    { id: 'seo', label: 'SEO' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="realisations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-uns de nos projets récents et les résultats obtenus 
            pour nos clients partout dans le Monde.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                      <Eye size={20} />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-teal-200 text-green-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-teal-600">
                      {project.results}
                    </span>
                    <button className="text-green-600 hover:text-teal-700 font-medium text-sm">
                      Voir le projet →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Votre projet sera le prochain succès ?
          </h3>
          <p className="text-gray-600 mb-8">
            Discutons de vos objectifs et créons ensemble votre stratégie digitale.
          </p>
          <button className="bg-gradient-to-r from-emerald-400 to-emerald-700 text-white px-8 py-4 rounded-lg hover:from-emerald-600 hover:to-emerald-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
            Démarrer mon projet
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;