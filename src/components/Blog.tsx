import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFeaturedPost, getOtherPosts } from '../data/blogPosts';
import NewsletterSignup from './NewsletterSignup';

const Blog = () => {
  const featuredPost = getFeaturedPost();
  const otherPosts = getOtherPosts();

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
        {featuredPost && (
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
                        {featuredPost.readTime} de lecture
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <User size={16} />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{featuredPost.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="bg-gradient-to-r from-emerald-400 to-emerald-700 text-white px-6 py-3 rounded-lg hover:from-emerald-600 hover:to-emerald-800 transition-all duration-200 flex items-center space-x-2 group w-fit"
                    >
                      <span>Lire l'article</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Articles */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {otherPosts.map((post) => (
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
                    {post.tags.slice(0, 2).map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-green-600 hover:font-bold font-medium text-sm flex items-center space-x-1 group"
                  >
                    <span>Lire plus</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <NewsletterSignup />
      </div>
    </section>
  );
};

export default Blog;