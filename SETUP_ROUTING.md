# Configuration du Routage - Guide d'Installation

## 🚀 Installation des Dépendances

Pour que le routage fonctionne correctement, vous devez installer React Router DOM :

### Option 1: Via PowerShell (si les permissions le permettent)
```bash
npm install react-router-dom @types/react-router-dom
```

### Option 2: Via le script batch
Double-cliquez sur le fichier `install-dependencies.bat` dans le dossier racine.

### Option 3: Manuellement
1. Ouvrez un terminal dans le dossier du projet
2. Exécutez : `npm install react-router-dom @types/react-router-dom`

## ✅ Vérification de l'Installation

Après l'installation, vérifiez que les dépendances sont présentes dans `package.json` :

```json
{
  "dependencies": {
    "react-router-dom": "^6.x.x",
    "@types/react-router-dom": "^5.x.x"
  }
}
```

## 🔧 Configuration

### 1. Vite Config (déjà configuré)
Le fichier `vite.config.ts` contient déjà la configuration nécessaire :

```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
});
```

### 2. Fichier _redirects (déjà créé)
Le fichier `public/_redirects` gère le routage côté client :

```
/*    /index.html   200
```

## 🎯 Fonctionnalités Disponibles

### Routes Configurées
- **Page d'accueil** : `/` - Portfolio complet
- **Pages de projets** : `/project/{id}` - Détails d'un projet

### Navigation
- **Bouton "Lien externe"** : Ouvre `/project/{id}` dans un nouvel onglet
- **Bouton "Voir le projet"** : Ouvre le modal avec détails
- **Navigation entre projets** : Flèches précédent/suivant

## 🧪 Test du Routage

1. **Démarrez le serveur de développement** :
   ```bash
   npm run dev
   ```

2. **Testez les URLs** :
   - `http://localhost:5173/` - Page d'accueil
   - `http://localhost:5173/project/1` - Projet Mali Tours
   - `http://localhost:5173/project/2` - Projet Le Palmier
   - etc.

3. **Testez les boutons** :
   - Cliquez sur l'icône "lien externe" (↗️) dans le portfolio
   - L'URL devrait s'ouvrir dans un nouvel onglet

## 🔍 Dépannage

### Problème : "Cannot find module 'react-router-dom'"
**Solution** : Installez les dépendances avec `npm install react-router-dom @types/react-router-dom`

### Problème : Erreur 404 sur les routes
**Solution** : Vérifiez que le fichier `public/_redirects` existe et contient `/*    /index.html   200`

### Problème : Navigation ne fonctionne pas
**Solution** : Vérifiez que `BrowserRouter` est bien configuré dans `App.tsx`

## 📁 Fichiers Modifiés

- `src/App.tsx` - Configuration du routage
- `src/components/Header.tsx` - Navigation adaptative
- `src/components/ProjectDetail.tsx` - Page de projet individuelle
- `src/components/ProjectNavigation.tsx` - Navigation entre projets
- `vite.config.ts` - Configuration serveur
- `public/_redirects` - Redirection côté client

## 🎨 Fonctionnalités Avancées

### Navigation Intelligente
- Le header s'adapte selon la page (accueil vs projet)
- Bouton "Retour à l'accueil" sur les pages de projets
- Navigation entre projets avec indicateur de progression

### URLs SEO-Friendly
- URLs descriptives : `/project/1` pour Mali Tours
- Navigation directe par URL
- Support des boutons précédent/suivant du navigateur

---

*Configuration terminée ! Le routage devrait maintenant fonctionner correctement.* 