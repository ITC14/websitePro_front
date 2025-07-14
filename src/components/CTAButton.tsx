import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTAButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showIcon?: boolean;
  showSparkles?: boolean;
}

const CTAButton = ({ 
  onClick, 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  showIcon = true,
  showSparkles = false
}: CTAButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 transform focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-emerald-400 to-emerald-700 text-white hover:from-emerald-600 hover:to-emerald-800 focus:ring-emerald-500 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-emerald-700 border-2 border-emerald-700 hover:bg-emerald-700 hover:text-white focus:ring-emerald-500 shadow-md hover:shadow-lg"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const animationClasses = isHovered 
    ? "hover:scale-105 hover:-translate-y-0.5" 
    : "hover:scale-105";

  const pressClasses = isPressed ? "scale-95" : "";

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${animationClasses}
        ${pressClasses}
        ${className}
        relative overflow-hidden
      `}
    >
      {/* Sparkles effect */}
      {showSparkles && isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles 
            className="absolute top-2 left-2 text-yellow-300 animate-pulse" 
            size={16} 
          />
          <Sparkles 
            className="absolute top-4 right-4 text-yellow-300 animate-pulse delay-100" 
            size={12} 
          />
          <Sparkles 
            className="absolute bottom-2 left-1/2 text-yellow-300 animate-pulse delay-200" 
            size={14} 
          />
        </div>
      )}

      {/* Button content */}
      <span className="relative z-10 flex items-center">
        {children}
        {showIcon && (
          <ArrowRight 
            className={`ml-2 transition-transform duration-200 ${
              isHovered ? 'translate-x-1' : ''
            }`} 
            size={size === 'lg' ? 20 : 16} 
          />
        )}
      </span>

      {/* Ripple effect */}
      <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-200 rounded-lg" />
    </button>
  );
};

export default CTAButton; 