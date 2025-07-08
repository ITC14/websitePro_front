import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex items-center relative overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <span className="bg-teal-200 text-green-800 mt-4 px-3 py-1 rounded-full text-sm font-medium">
                  🚀 Experts en Communication Digitale
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Boostez votre 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600"> présence digitale </span> 
                partout dans le Monde
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Création de sites web, gestion des réseaux sociaux et référencement SEO. 
                Nous valorisons l'authenticité de votre marque avec des solutions sur mesure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-emerald-400 to-emerald-700 text-white px-8 py-4 rounded-lg hover:from-emerald-600 hover:to-emerald-800 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 group">
                <span className="font-semibold">Demander un devis</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2 group">
                <Play size={20} className="text-teal-600" />
                <span className="font-semibold">Voir nos réalisations</span>
              </button>
            </div>
          </div>
          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gradient-to-r from-green-200 to-green-600 rounded"></div>
                    <div className="h-4 bg-gradient-to-r from-emerald-200 to-emerald-300 rounded w-4/5"></div>
                    <div className="h-4 bg-gradient-to-r from-teal-200 to-teal-300 rounded w-3/5"></div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="h-2 bg-green-500 rounded w-1/4"></div>
                      <div className="text-xs text-gray-500">Analytics</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-8 bg-green-200 rounded"></div>
                      <div className="h-12 bg-green-300 rounded"></div>
                      <div className="h-6 bg-green-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-green-500 rounded-lg transform rotate-12 animate-bounce"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-emerald-500 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -left-8 w-8 h-8 bg-teal-500 rounded-full transform -translate-y-1/2 animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;