export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  results: string;
  client: string;
  duration: string;
  team: string;
  challenges: string[];
  solutions: string[];
  technologies: string[];
  gallery: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Agence de Voyage Mali Tours",
    category: "site-web",
    image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Site web complet avec système de réservation et paiement en ligne",
    tags: ["E-commerce", "Responsive", "SEO"],
    results: "+300% de réservations en ligne",
    client: "Mali Tours",
    duration: "8 semaines",
    team: "4 développeurs + 1 designer",
    challenges: [
      "Intégration de multiples systèmes de paiement",
      "Gestion des réservations en temps réel",
      "Optimisation pour les connexions lentes"
    ],
    solutions: [
      "API de paiement unifiée avec fallback",
      "Système de cache intelligent",
      "Interface progressive web app (PWA)"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    gallery: [
      "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3155726/pexels-photo-3155726.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    testimonial: {
      text: "Le nouveau site web a transformé notre activité. Les réservations en ligne ont explosé et nos clients adorent la simplicité d'utilisation.",
      author: "Fatoumata Diallo",
      position: "Directrice Mali Tours"
    }
  },
  {
    id: 2,
    title: "Restaurant Le Palmier",
    category: "reseaux-sociaux",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Stratégie social media et campagnes publicitaires ciblées",
    tags: ["Instagram", "Facebook", "Community Management"],
    results: "+150% d'engagement",
    client: "Le Palmier",
    duration: "6 mois",
    team: "2 community managers + 1 photographe",
    challenges: [
      "Faible présence sur les réseaux sociaux",
      "Concurrence forte dans le secteur",
      "Budget publicitaire limité"
    ],
    solutions: [
      "Stratégie de contenu authentique et local",
      "Partenariats avec influenceurs locaux",
      "Campagnes publicitaires ciblées par géolocalisation"
    ],
    technologies: ["Instagram Ads", "Facebook Business", "Canva Pro", "Later"],
    gallery: [
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    testimonial: {
      text: "Notre restaurant est maintenant connu dans toute la ville grâce aux réseaux sociaux. Les clients viennent spécifiquement pour nos plats Instagram !",
      author: "Chef Moussa Koné",
      position: "Propriétaire Le Palmier"
    }
  },
  {
    id: 3,
    title: "Boutique Mode Africaine",
    category: "site-web",
    image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "E-commerce moderne avec paiement mobile money intégré",
    tags: ["E-commerce", "Mobile Money", "UX/UI"],
    results: "+250% de ventes en ligne",
    client: "Mode Africaine",
    duration: "10 semaines",
    team: "3 développeurs + 2 designers",
    challenges: [
      "Intégration des paiements mobile money",
      "Gestion des stocks en temps réel",
      "Expérience utilisateur sur mobile"
    ],
    solutions: [
      "API mobile money (Orange Money, MTN)",
      "Système de gestion d'inventaire automatisé",
      "Design mobile-first avec PWA"
    ],
    technologies: ["Vue.js", "Laravel", "MySQL", "Mobile Money APIs", "Vercel"],
    gallery: [
      "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    testimonial: {
      text: "L'intégration du mobile money a été un game-changer. Nos clients peuvent maintenant payer facilement et nos ventes ont doublé !",
      author: "Aissata Traoré",
      position: "Fondatrice Mode Africaine"
    }
  },
  {
    id: 4,
    title: "Cabinet Médical Bamako",
    category: "seo",
    image: "https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Optimisation SEO local et présence Google Maps",
    tags: ["SEO Local", "Google Maps", "Santé"],
    results: "1ère position Google Maps",
    client: "Cabinet Dr. Keita",
    duration: "4 mois",
    team: "1 SEO specialist + 1 content writer",
    challenges: [
      "Aucune présence en ligne",
      "Concurrence forte dans le secteur médical",
      "Confiance des patients en ligne"
    ],
    solutions: [
      "Optimisation SEO local ciblée",
      "Gestion des avis Google et réputation",
      "Contenu médical de qualité et éthique"
    ],
    technologies: ["Google My Business", "Google Analytics", "SEMrush", "WordPress"],
    gallery: [
      "https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    testimonial: {
      text: "Nous sommes maintenant la première référence sur Google pour notre spécialité. Les patients nous trouvent facilement !",
      author: "Dr. Mariam Keita",
      position: "Médecin Cardiologue"
    }
  },
  {
    id: 5,
    title: "Startup FinTech MLI",
    category: "reseaux-sociaux",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Lancement sur les réseaux sociaux et acquisition de leads",
    tags: ["LinkedIn", "Lead Generation", "B2B"],
    results: "+500 leads qualifiés",
    client: "FinTech MLI",
    duration: "3 mois",
    team: "1 marketing manager + 1 content creator",
    challenges: [
      "Startup inconnue dans le secteur",
      "Cible B2B difficile à atteindre",
      "Budget marketing limité"
    ],
    solutions: [
      "Stratégie LinkedIn ciblée par secteur",
      "Content marketing technique et éducatif",
      "Webinaires et événements virtuels"
    ],
    technologies: ["LinkedIn Ads", "HubSpot", "Zoom", "Canva", "Buffer"],
    gallery: [
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    testimonial: {
      text: "En seulement 3 mois, nous avons généré plus de leads qualifiés que prévu. Notre pipeline de vente est maintenant plein !",
      author: "Ibrahim Diallo",
      position: "CEO FinTech MLI"
    }
  },
  {
    id: 6,
    title: "École Internationale",
    category: "site-web",
    image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Portail éducatif avec espace parents et élèves",
    tags: ["Éducation", "Portail", "Multi-utilisateurs"],
    results: "+80% d'inscriptions",
    client: "École Internationale de Bamako",
    duration: "12 semaines",
    team: "5 développeurs + 2 designers + 1 UX",
    challenges: [
      "Gestion de multiples types d'utilisateurs",
      "Sécurité des données sensibles",
      "Interface intuitive pour tous les âges"
    ],
    solutions: [
      "Système de rôles et permissions avancé",
      "Chiffrement des données et conformité RGPD",
      "Design adaptatif avec accessibilité"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
    gallery: [
      "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5905708/pexels-photo-5905708.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5905708/pexels-photo-5905708.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    testimonial: {
      text: "Le portail a révolutionné notre communication avec les parents. Les inscriptions ont augmenté de 80% grâce à la transparence !",
      author: "Directrice Aminata Coulibaly",
      position: "Directrice École Internationale"
    }
  }
]; 