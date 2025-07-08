import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Comment optimiser votre présence sur Google Maps au Mali",
      excerpt: "Découvrez les stratégies essentielles pour améliorer votre visibilité locale et attirer plus de clients grâce au référencement Google Maps.",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Marie Kouassi",
      date: "15 Mars 2024",
      category: "SEO Local",
      readTime: "5 min",
      tags: ["SEO", "Google Maps", "Local"]
    },
    {
      id: 2,
      title: "Les tendances du marketing digital en Afrique de l'Ouest",
      excerpt: "Analyse des dernières tendances du marketing digital qui transforment le paysage commercial en Afrique de l'Ouest et leurs implications pour les entreprises.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Kofi Asante",
      date: "12 Mars 2024",
      category: "Marketing Digital",
      readTime: "7 min",
      tags: ["Tendances", "Afrique", "Marketing"]
    },
    {
      id: 3,
      title: "Réseaux sociaux : Optimiser l'engagement de votre communauté",
      excerpt: "Stratégies éprouvées pour augmenter l'engagement sur vos réseaux sociaux et construire une communauté fidèle autour de votre marque.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Aicha Traoré",
      date: "10 Mars 2024",
      category: "Réseaux Sociaux",
      readTime: "6 min",
      tags: ["Social Media", "Engagement", "Community"]
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Blog & Actualités
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez informé des dernières tendances du marketing digital et découvrez 
            nos conseils d'experts pour développer votre activité en ligne.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="bg-teal-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Article en vedette
                    </span>
                    <span className="text-gray-500 text-sm">
                      {blogPosts[0].readTime} de lecture
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User size={16} />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{blogPosts[0].date}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {blogPosts[0].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="bg-gradient-to-r from-emerald-400 to-emerald-700 text-white px-6 py-3 rounded-lg hover:from-emerald-600 hover:to-emerald-800 transition-all duration-200 flex items-center space-x-2 group w-fit">
                    <span>Lire l'article</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Other Articles */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <span className="text-teal-600">{post.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-green-600 hover:text-teal-600  font-medium text-sm flex items-center space-x-1 group">
                    <span>Lire plus</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-emerald-400 to-emerald-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Restez informé de nos dernières actualités
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Recevez nos conseils d'experts et les dernières tendances du marketing digital directement dans votre boîte mail.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;