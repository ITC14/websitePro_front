import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import StatsTestimonial from './stats_testimonials';
import QuoteForm from './QuoteForm';
import CTAButton from './CTAButton';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Mariam Diepkile",
      position: "Directrice",
      company: "Boutique Wax & Co",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "DigitalGenius a transformé notre boutique en ligne. Nos ventes ont augmenté de 250% en 6 mois grâce à leur expertise en e-commerce et leur compréhension du marché malien.",
      sector: "E-commerce"
    },
    {
      id: 2,
      name: "Dr. Moustapha Niambélé",
      position: "Médecin",
      company: "Cabinet Médical Kalaban_City",
      image: "https://images.pexels.com/photos//8376196/pexels-photo-8376196.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Grâce à leur stratégie SEO local, mon cabinet apparaît en première position sur Google Maps. Le nombre de nouveaux patients a doublé depuis notre collaboration.",
      sector: "Santé"
    },
    {
      id: 3,
      name: "Amina Traoré",
      position: "Fondatrice",
      company: "Restaurant Saveurs d'Afrique",
      image: "https://images.pexels.com/photos/29852895/pexels-photo-29852895.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Leur gestion de nos réseaux sociaux est exceptionnelle. Notre communauté Instagram a grandi de 800% et nos réservations en ligne ont explosé !",
      sector: "Restauration"
    },
    {
      id: 4,
      name: "Kawhi Leonard",
      position: "CEO",
      company: "KL2 Consulting",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Une équipe professionnelle qui comprend les enjeux du business en Afrique. Leur approche personnalisée nous a permis de nous démarquer de la concurrence.",
      sector: "Consulting"
    },
    {
      id: 5,
      name: "Fatou Bamba",
      position: "Directrice Marketing",
      company: "École Internationale d'Abidjan",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Le nouveau site web et la stratégie digitale ont considérablement amélioré notre image de marque. Les inscriptions ont augmenté de 80% cette année.",
      sector: "Éducation"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  const handleStartProject = () => {
    setIsQuoteFormOpen(true);
  };

  return (
    <section id="temoignages" className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits et les résultats 
            concrets obtenus grâce à nos solutions digitales.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="bg-gradient-to-r from-emerald-400 to-emerald-700 p-4 rounded-full">
                <Quote size={24} className="text-white" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="md:col-span-2 space-y-6">
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg text-gray-700 leading-relaxed">
                  "{currentTestimonial.text}"
                </p>

                {/* Author Info */}
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-gray-900">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-600">
                    {currentTestimonial.position} • {currentTestimonial.company}
                  </p>
                  <span className="inline-block bg-teal-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {currentTestimonial.sector}
                  </span>
                </div>
              </div>

              {/* Author Image */}
              <div className="text-center">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-32 h-32 p-2 rounded-full mx-auto object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-teal-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <StatsTestimonial/>
        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Rejoignez nos clients satisfaits
          </h3>
          <p className="text-gray-600 mb-8">
            Faites confiance à notre expertise pour développer votre activité en ligne.
          </p>
          <CTAButton
            onClick={handleStartProject}
            size="lg"
            showSparkles={true}
          >
            Commencer mon projet
          </CTAButton>
        </div>
      </div>

      {/* Quote Form Modal */}
      <QuoteForm
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
      />
    </section>
  );
};

export default Testimonials;