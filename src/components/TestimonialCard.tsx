import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  author: string;
  position: string;
  projectTitle: string;
}

const TestimonialCard = ({ text, author, position, projectTitle }: TestimonialCardProps) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm border border-gray-100 p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
      
      {/* Quote icon */}
      <div className="absolute top-4 left-4 text-green-200">
        <Quote size={24} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Project title */}
        <div className="mb-4">
          <span className="text-xs font-medium text-green-600 uppercase tracking-wide">
            Projet: {projectTitle}
          </span>
        </div>

        {/* Testimonial text */}
        <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
          "{text}"
        </blockquote>

        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className="text-yellow-400 fill-current"
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">5.0/5</span>
        </div>

        {/* Author info */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
            {getInitials(author)}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{author}</p>
            <p className="text-sm text-gray-600">{position}</p>
          </div>
        </div>

        {/* Success indicator */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="font-medium">Client satisfait</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 