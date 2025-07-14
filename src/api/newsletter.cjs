const SibApiV3Sdk = require('sib-api-v3-sdk');

// Utilise la clé API Brevo depuis les variables d'environnement
const apiKey = process.env.BREVO_API_KEY;

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Email invalide' });
  }

  try {
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKeyInstance = defaultClient.authentications['api-key'];
    apiKeyInstance.apiKey = apiKey;

    const apiInstance = new SibApiV3Sdk.ContactsApi();
    const createContact = new SibApiV3Sdk.CreateContact();
    createContact.email = email;
    // Ajoutez ici d'autres champs si besoin (nom, etc.)

    await apiInstance.createContact(createContact);
    return res.status(200).json({ message: 'Inscription réussie !' });
  } catch (error) {
    if (error.response && error.response.body && error.response.body.code === 'duplicate_parameter') {
      return res.status(200).json({ message: 'Vous êtes déjà inscrit.' });
    }
    return res.status(500).json({ error: 'Erreur lors de l’inscription.' });
  }
};

module.exports = handler; 