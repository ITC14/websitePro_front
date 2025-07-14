import { TrendingUp, Users, Calendar, Target, Award } from 'lucide-react';

interface ProjectStatsProps {
  results: string;
  duration: string;
  team: string;
  client: string;
  category: string;
}

const ProjectStats = ({ results, duration, team, client, category }: ProjectStatsProps) => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'site-web':
        return 'bg-blue-100 text-blue-800';
      case 'reseaux-sociaux':
        return 'bg-purple-100 text-purple-800';
      case 'seo':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'site-web':
        return 'Site Web';
      case 'reseaux-sociaux':
        return 'Réseaux Sociaux';
      case 'seo':
        return 'SEO';
      default:
        return cat;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistiques du projet</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {/* Results */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
          <div className="flex items-center mb-2">
            <TrendingUp className="text-green-600 mr-2" size={20} />
            <span className="text-sm font-medium text-green-700">Résultats</span>
          </div>
          <p className="text-xl font-bold text-green-800">{results}</p>
        </div>

        {/* Duration */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
          <div className="flex items-center mb-2">
            <Calendar className="text-blue-600 mr-2" size={20} />
            <span className="text-sm font-medium text-blue-700">Durée</span>
          </div>
          <p className="text-xl font-bold text-blue-800">{duration}</p>
        </div>

        {/* Team */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
          <div className="flex items-center mb-2">
            <Users className="text-purple-600 mr-2" size={20} />
            <span className="text-sm font-medium text-purple-700">Équipe</span>
          </div>
          <p className="text-sm font-semibold text-purple-800">{team}</p>
        </div>

        {/* Client */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-4 border border-orange-200">
          <div className="flex items-center mb-2">
            <Target className="text-orange-600 mr-2" size={20} />
            <span className="text-sm font-medium text-orange-700">Client</span>
          </div>
          <p className="text-sm font-semibold text-orange-800">{client}</p>
        </div>
      </div>

      {/* Category Badge */}
      <div className="mt-4 flex items-center justify-center">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
          <Award className="mr-1" size={16} />
          {getCategoryLabel(category)}
        </span>
      </div>

      {/* Success Indicator */}
      <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          <span className="text-sm text-green-700 font-medium">Projet terminé avec succès</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectStats; 