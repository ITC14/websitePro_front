import { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import ProjectModal from './ProjectModal';
import { projects, type Project } from '../data/projects';
import QuoteForm from './QuoteForm';
import CTAButton from './CTAButton';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  

  const filters = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'site-web', label: 'Sites Web' },
    { id: 'reseaux-sociaux', label: 'Réseaux Sociaux' },
    { id: 'seo', label: 'SEO' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleViewProject = (projectId: number) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    if (selectedProject) {
      const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject);
      const nextIndex = (currentIndex + 1) % filteredProjects.length;
      setSelectedProject(filteredProjects[nextIndex].id);
    }
  };

  const handlePreviousProject = () => {
    if (selectedProject) {
      const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject);
      const previousIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
      setSelectedProject(filteredProjects[previousIndex].id);
    }
  };

  const currentProject = selectedProject ? projects.find(p => p.id === selectedProject) || null : null;
  const currentIndex = selectedProject ? filteredProjects.findIndex(p => p.id === selectedProject) : -1;
  const hasNext = currentIndex >= 0 && currentIndex < filteredProjects.length - 1;
  const hasPrevious = currentIndex > 0;

  const handleStartProject = () => {
    setIsQuoteFormOpen(true);
  };

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
                    <button 
                      onClick={() => handleViewProject(project.id)}
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <Eye size={20} />
                    </button>
                    <button 
                      onClick={() => window.open(`/project/${project.id}`, '_blank')}
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
                    >
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
                    <button 
                      onClick={() => handleViewProject(project.id)}
                      className="text-green-600 hover:text-teal-700 font-medium text-sm"
                    >
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
          <CTAButton
            onClick={handleStartProject}
            size="lg"
            showSparkles={true}
          >
            Démarrer mon projet
          </CTAButton>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={currentProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onNext={handleNextProject}
        onPrevious={handlePreviousProject}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
      />

      {/* Quote Form Modal */}
      <QuoteForm
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
      />
    </section>
  );
};

export default Portfolio;