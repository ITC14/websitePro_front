import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Users, Target, TrendingUp, CheckCircle } from 'lucide-react';
import { projects, type Project } from '../data/projects';
import ProjectNavigation from './ProjectNavigation';
import QuoteForm from './QuoteForm';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === parseInt(id || '0'));
    setProject(foundProject || null);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Projet non trouvé</h2>
          <Link to="/" className="text-green-600 hover:text-green-700">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour au portfolio
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h1>
              <p className="text-gray-600">{project.description}</p>
            </div>
            <div className="mt-4 lg:mt-0">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                {project.category === 'site-web' ? 'Site Web' : 
                 project.category === 'reseaux-sociaux' ? 'Réseaux Sociaux' : 'SEO'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 lg:h-80 object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Détails du projet</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
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

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies utilisées</h3>
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
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Défis rencontrés</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Solutions apportées</h3>
                  <ul className="space-y-2">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Galerie</h2>
              
              {/* Main Image */}
              <div className="mb-4">
                <img
                  src={project.gallery[activeImage]}
                  alt={`${project.title} - Image ${activeImage + 1}`}
                  className="w-full h-64 lg:h-80 object-cover rounded-lg"
                />
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`rounded-lg overflow-hidden border-2 transition-all ${
                      activeImage === index ? 'border-green-500' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            {project.testimonial && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Témoignage client</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 italic mb-4">"{project.testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {project.testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">{project.testimonial.author}</p>
                      <p className="text-sm text-gray-600">{project.testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Résultats obtenus</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <TrendingUp className="text-green-600 mr-3" size={24} />
                  <div>
                    <p className="text-2xl font-bold text-green-600">{project.results}</p>
                    <p className="text-sm text-green-700">Amélioration significative</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Tags</h3>
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

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button 
                  onClick={() => setIsQuoteFormOpen(true)}
                  className="w-full bg-gradient-to-r from-emerald-400 to-emerald-700 text-white px-6 py-3 rounded-lg hover:from-emerald-600 hover:to-emerald-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Démarrer un projet similaire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation entre projets */}
      {project && <ProjectNavigation currentProjectId={project.id} />}

      {/* Quote Form Modal */}
      <QuoteForm
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
      />
    </div>
  );
};

export default ProjectDetail; 