// routes/fecha.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const currentDate = new Date();
  
  // Formateamos la fecha
  const dayNames = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  const monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  
  const dayOfWeek = dayNames[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = monthNames[currentDate.getMonth()];
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');  // Asegura dos dígitos para minutos

  // Construimos el string con el formato solicitado
  const formattedDate = `${dayOfWeek} ${dayOfMonth} de ${month} a las ${hours}:${minutes}`;

  res.send(`La fecha y hora actual es: ${formattedDate}`);
});

module.exports = router;
