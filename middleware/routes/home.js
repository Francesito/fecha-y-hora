// routes/home.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('¡Aquí estoy en casa!');
});

module.exports = router;
