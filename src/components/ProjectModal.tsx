import { useState } from 'react';
import { X, ExternalLink, Calendar, Users, Target, TrendingUp, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { type Project } from '../data/projects';
import QuoteForm from './QuoteForm';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

const ProjectModal = ({ 
  project, 
  isOpen, 
  onClose, 
  onNext, 
  onPrevious, 
  hasNext = false, 
  hasPrevious = false 
}: ProjectModalProps) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          {/* Header */}
          <div className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                {project.category === 'site-web' ? 'Site Web' : 
                 project.category === 'reseaux-sociaux' ? 'Réseaux Sociaux' : 'SEO'}
              </span>
              <h2 className="text-xl font-bold text-gray-900">{project.title}</h2>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="max-h-[80vh] overflow-y-auto">
            <div className="px-6 py-6">
              {/* Hero Image */}
              <div className="mb-6">
                <img
                  src={project.gallery[activeImage]}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                {/* Image Navigation */}
                {project.gallery.length > 1 && (
                  <div className="mt-4 flex items-center justify-between">
                    <button
                      onClick={() => setActiveImage(Math.max(0, activeImage - 1))}
                      disabled={activeImage === 0}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ArrowLeft size={20} />
                    </button>
                    
                    <div className="flex space-x-2">
                      {project.gallery.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImage(index)}
                          className={`w-3 h-3 rounded-full ${
                            activeImage === index ? 'bg-green-600' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <button
                      onClick={() => setActiveImage(Math.min(project.gallery.length - 1, activeImage + 1))}
                      disabled={activeImage === project.gallery.length - 1}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                )}
              </div>

              {/* Project Info Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center">
                  <Users className="text-green-600 mr-3" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-medium">{project.client}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="text-green-600 mr-3" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Durée</p>
                    <p className="font-medium">{project.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Target className="text-green-600 mr-3" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Équipe</p>
                    <p className="font-medium">{project.team}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <TrendingUp className="text-green-600 mr-3" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Résultats</p>
                    <p className="font-medium text-green-600">{project.results}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Défis rencontrés</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2 mt-1">•</span>
                        <span className="text-gray-700 text-sm">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Solutions apportées</h3>
                  <ul className="space-y-2">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                        <span className="text-gray-700 text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-teal-200 text-green-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Témoignage client</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 italic mb-3 text-sm">"{project.testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {project.testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold text-gray-900 text-sm">{project.testimonial.author}</p>
                        <p className="text-xs text-gray-600">{project.testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
            <div className="flex space-x-2">
              {hasPrevious && (
                <button
                  onClick={onPrevious}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Projet précédent
                </button>
              )}
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Fermer
              </button>
              <button 
                onClick={() => setIsQuoteFormOpen(true)}
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-emerald-400 to-emerald-700 rounded-md hover:from-emerald-600 hover:to-emerald-800"
              >
                Démarrer un projet similaire
              </button>
            </div>
            
            <div className="flex space-x-2">
              {hasNext && (
                <button
                  onClick={onNext}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Projet suivant
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quote Form Modal */}
      <QuoteForm
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
      />
    </div>
  );
};

export default ProjectModal; 