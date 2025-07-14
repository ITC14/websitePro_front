import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

interface ProjectNavigationProps {
  currentProjectId: number;
}

const ProjectNavigation = ({ currentProjectId }: ProjectNavigationProps) => {
  const currentIndex = projects.findIndex(p => p.id === currentProjectId);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Projet précédent */}
          <div className="flex-1">
            {previousProject ? (
              <Link
                to={`/project/${previousProject.id}`}
                className="group flex items-center text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                <div className="text-left">
                  <p className="text-sm text-gray-500">Projet précédent</p>
                  <p className="font-medium">{previousProject.title}</p>
                </div>
              </Link>
            ) : (
              <div className="flex items-center text-gray-400">
                <ArrowLeft className="mr-2" size={20} />
                <div>
                  <p className="text-sm">Projet précédent</p>
                  <p className="font-medium">Aucun</p>
                </div>
              </div>
            )}
          </div>

          {/* Retour au portfolio */}
          <div className="flex-1 text-center">
            <Link
              to="/#realisations"
              className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Voir tous les projets
            </Link>
          </div>

          {/* Projet suivant */}
          <div className="flex-1 text-right">
            {nextProject ? (
              <Link
                to={`/project/${nextProject.id}`}
                className="group flex items-center justify-end text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <div className="text-right">
                  <p className="text-sm text-gray-500">Projet suivant</p>
                  <p className="font-medium">{nextProject.title}</p>
                </div>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            ) : (
              <div className="flex items-center justify-end text-gray-400">
                <div className="text-right">
                  <p className="text-sm">Projet suivant</p>
                  <p className="font-medium">Aucun</p>
                </div>
                <ArrowRight className="ml-2" size={20} />
              </div>
            )}
          </div>
        </div>

        {/* Indicateur de progression */}
        <div className="mt-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-sm text-gray-500">
              {currentIndex + 1} sur {projects.length}
            </span>
            <div className="flex space-x-1">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? 'bg-emerald-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectNavigation; 