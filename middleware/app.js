const express = require('express');
const app = express();
const port = 3000;

// Importamos los middlewares
const logMiddlewareHome = require('./middlewares/logMiddlewareHome');
const logMiddlewareFecha = require('./middlewares/logMiddlewareFecha');

// Importamos las rutas
const homeRoute = require('./routes/home');
const fechaRoute = require('./routes/fecha');

// Usamos los middlewares para las rutas correspondientes
app.use('/home', logMiddlewareHome);
app.use('/fecha', logMiddlewareFecha);

// Usamos las rutas
app.use('/home', homeRoute);
app.use('/fecha', fechaRoute);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
