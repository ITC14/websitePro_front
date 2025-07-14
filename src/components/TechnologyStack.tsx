import { Code, Database, Globe, Smartphone, Palette, Zap } from 'lucide-react';

interface TechnologyStackProps {
  technologies: string[];
}

const TechnologyStack = ({ technologies }: TechnologyStackProps) => {
  const getTechnologyIcon = (tech: string) => {
    const lowerTech = tech.toLowerCase();
    
    if (lowerTech.includes('react') || lowerTech.includes('vue') || lowerTech.includes('angular')) {
      return <Code className="text-blue-500" size={16} />;
    }
    if (lowerTech.includes('node') || lowerTech.includes('php') || lowerTech.includes('python')) {
      return <Zap className="text-green-500" size={16} />;
    }
    if (lowerTech.includes('mysql') || lowerTech.includes('mongo') || lowerTech.includes('postgres')) {
      return <Database className="text-orange-500" size={16} />;
    }
    if (lowerTech.includes('aws') || lowerTech.includes('vercel') || lowerTech.includes('netlify')) {
      return <Globe className="text-purple-500" size={16} />;
    }
    if (lowerTech.includes('mobile') || lowerTech.includes('pwa')) {
      return <Smartphone className="text-pink-500" size={16} />;
    }
    if (lowerTech.includes('canva') || lowerTech.includes('figma') || lowerTech.includes('design')) {
      return <Palette className="text-red-500" size={16} />;
    }
    
    return <Code className="text-gray-500" size={16} />;
  };

  const getTechnologyColor = (tech: string) => {
    const lowerTech = tech.toLowerCase();
    
    if (lowerTech.includes('react')) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (lowerTech.includes('vue')) return 'bg-green-100 text-green-800 border-green-200';
    if (lowerTech.includes('angular')) return 'bg-red-100 text-red-800 border-red-200';
    if (lowerTech.includes('node')) return 'bg-green-100 text-green-800 border-green-200';
    if (lowerTech.includes('php')) return 'bg-purple-100 text-purple-800 border-purple-200';
    if (lowerTech.includes('mysql')) return 'bg-orange-100 text-orange-800 border-orange-200';
    if (lowerTech.includes('mongo')) return 'bg-green-100 text-green-800 border-green-200';
    if (lowerTech.includes('aws')) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    if (lowerTech.includes('vercel')) return 'bg-black text-white border-gray-300';
    if (lowerTech.includes('stripe')) return 'bg-purple-100 text-purple-800 border-purple-200';
    if (lowerTech.includes('mobile money')) return 'bg-green-100 text-green-800 border-green-200';
    if (lowerTech.includes('instagram')) return 'bg-pink-100 text-pink-800 border-pink-200';
    if (lowerTech.includes('facebook')) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (lowerTech.includes('linkedin')) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (lowerTech.includes('google')) return 'bg-red-100 text-red-800 border-red-200';
    if (lowerTech.includes('wordpress')) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (lowerTech.includes('canva')) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (lowerTech.includes('hubspot')) return 'bg-orange-100 text-orange-800 border-orange-200';
    if (lowerTech.includes('zoom')) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (lowerTech.includes('buffer')) return 'bg-green-100 text-green-800 border-green-200';
    
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getTechnologyCategory = (tech: string) => {
    const lowerTech = tech.toLowerCase();
    
    if (lowerTech.includes('react') || lowerTech.includes('vue') || lowerTech.includes('angular')) {
      return 'Frontend';
    }
    if (lowerTech.includes('node') || lowerTech.includes('php') || lowerTech.includes('python') || lowerTech.includes('laravel')) {
      return 'Backend';
    }
    if (lowerTech.includes('mysql') || lowerTech.includes('mongo') || lowerTech.includes('postgres')) {
      return 'Base de données';
    }
    if (lowerTech.includes('aws') || lowerTech.includes('vercel') || lowerTech.includes('netlify')) {
      return 'Hébergement';
    }
    if (lowerTech.includes('stripe') || lowerTech.includes('mobile money')) {
      return 'Paiement';
    }
    if (lowerTech.includes('instagram') || lowerTech.includes('facebook') || lowerTech.includes('linkedin')) {
      return 'Réseaux sociaux';
    }
    if (lowerTech.includes('google') || lowerTech.includes('seo')) {
      return 'Marketing';
    }
    if (lowerTech.includes('canva') || lowerTech.includes('figma')) {
      return 'Design';
    }
    if (lowerTech.includes('hubspot') || lowerTech.includes('zoom') || lowerTech.includes('buffer')) {
      return 'Outils';
    }
    
    return 'Autre';
  };

  const groupedTechnologies = technologies.reduce((acc, tech) => {
    const category = getTechnologyCategory(tech);
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tech);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies utilisées</h3>
      
      <div className="space-y-4">
        {Object.entries(groupedTechnologies).map(([category, techs]) => (
          <div key={category}>
            <h4 className="text-sm font-medium text-gray-700 mb-2">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech, index) => (
                <div
                  key={index}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getTechnologyColor(tech)}`}
                >
                  {getTechnologyIcon(tech)}
                  <span className="ml-1">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Technology summary */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Total: {technologies.length} technologies</span>
          <span>{Object.keys(groupedTechnologies).length} catégories</span>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack; 