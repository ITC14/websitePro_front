require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const newsletterHandler = require('./src/api/newsletter.cjs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

// Route API pour la newsletter
app.post('/api/newsletter', (req, res) => newsletterHandler(req, res));

// (optionnel) Servir le frontend statique si besoin
// const path = require('path');
// app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => {
  console.log(`Serveur Express lancé sur http://localhost:${PORT}`);
}); 