import { useState } from 'react';
import { CheckCircle, AlertCircle, Mail } from 'lucide-react';

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  className?: string;
  variant?: 'default' | 'compact';
}

const NewsletterSignup = ({ 
  title = "Restez informé de nos dernières actualités",
  description = "Recevez nos conseils d'experts et les dernières tendances du marketing digital directement dans votre boîte mail.",
  className = "",
  variant = "default"
}: NewsletterSignupProps) => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Validation de l'email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Gestion de l'abonnement
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!email.trim()) {
      setErrorMessage('Veuillez saisir votre adresse email');
      setSubscriptionStatus('error');
      return;
    }
    
    if (!validateEmail(email)) {
      setErrorMessage('Veuillez saisir une adresse email valide');
      setSubscriptionStatus('error');
      return;
    }
    
    setIsSubscribing(true);
    setSubscriptionStatus('idle');
    setErrorMessage('');
    
    try {
      // Simulation d'un appel API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Ici, vous pouvez ajouter votre logique d'API réelle
      // const response = await fetch('/api/newsletter/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      
      // if (!response.ok) throw new Error('Erreur lors de l\'abonnement');
      
      setSubscriptionStatus('success');
      setEmail('');
      
      // Réinitialiser le statut après 5 secondes
      setTimeout(() => {
        setSubscriptionStatus('idle');
      }, 5000);
      
    } catch (error) {
      setSubscriptionStatus('error');
      setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubscribing(false);
    }
  };

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-emerald-400 to-emerald-700 rounded-xl p-6 text-white ${className}`}>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-sm opacity-90 mb-4">{description}</p>
        
        <form onSubmit={handleSubscribe}>
          <div className="flex gap-3 mb-3">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                className={`w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-sm transition-all ${
                  subscriptionStatus === 'error' ? 'ring-2 ring-red-300' : ''
                }`}
                disabled={isSubscribing}
              />
              <Mail size={14} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button 
              type="submit"
              disabled={isSubscribing}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center space-x-2 ${
                isSubscribing 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-white text-teal-600 hover:bg-gray-100 hover:scale-105'
              }`}
            >
              {isSubscribing ? (
                <>
                  <div className="w-3 h-3 border-2 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
                  <span>...</span>
                </>
              ) : (
                <span>S'abonner</span>
              )}
            </button>
          </div>
          
          {/* Messages de statut */}
          {subscriptionStatus === 'success' && (
            <div className="flex items-center space-x-2 text-green-100 bg-green-600/20 rounded-lg p-2 text-sm animate-fade-in">
              <CheckCircle size={16} />
              <span>Inscription réussie !</span>
            </div>
          )}
          
          {subscriptionStatus === 'error' && (
            <div className="flex items-center space-x-2 text-red-100 bg-red-600/20 rounded-lg p-2 text-sm animate-fade-in">
              <AlertCircle size={16} />
              <span>{errorMessage}</span>
            </div>
          )}
        </form>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-emerald-400 to-emerald-700 rounded-2xl p-8 text-white text-center ${className}`}>
      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>
      <p className="text-lg mb-6 opacity-90">
        {description}
      </p>
      
      <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              className={`w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all ${
                subscriptionStatus === 'error' ? 'ring-2 ring-red-300' : ''
              }`}
              disabled={isSubscribing}
            />
            <Mail size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button 
            type="submit"
            disabled={isSubscribing}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
              isSubscribing 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-white text-teal-600 hover:bg-gray-100 hover:scale-105'
            }`}
          >
            {isSubscribing ? (
              <>
                <div className="w-4 h-4 border-2 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
                <span>Inscription...</span>
              </>
            ) : (
              <span>S'abonner</span>
            )}
          </button>
        </div>
        
        {/* Messages de statut */}
        {subscriptionStatus === 'success' && (
          <div className="flex items-center justify-center space-x-2 text-green-100 bg-green-600/20 rounded-lg p-3 animate-fade-in">
            <CheckCircle size={20} />
            <span>Inscription réussie ! Vérifiez votre boîte mail.</span>
          </div>
        )}
        
        {subscriptionStatus === 'error' && (
          <div className="flex items-center justify-center space-x-2 text-red-100 bg-red-600/20 rounded-lg p-3 animate-fade-in">
            <AlertCircle size={20} />
            <span>{errorMessage}</span>
          </div>
        )}
      </form>
      
      <p className="text-sm opacity-75 mt-4">
        Nous respectons votre vie privée. Désabonnement possible à tout moment.
      </p>
    </div>
  );
};

export default NewsletterSignup; 