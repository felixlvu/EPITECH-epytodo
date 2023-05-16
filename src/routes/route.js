const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Bienvenue sur la page d\'accueil !');
});

router.post('/signup', (req, res) => {
  res.send('Inscription réussie !');
});

router.post('/login', (req, res) => {
  res.send('Connexion réussie !');
});

module.exports = router;
