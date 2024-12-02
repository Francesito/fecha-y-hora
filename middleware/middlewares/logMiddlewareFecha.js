// middlewares/logMiddlewareFecha.js
module.exports = (req, res, next) => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');  // Asegura dos dígitos para minutos
    console.log(`Has entrado a la ruta FECHA a las ${hours}:${minutes}`);
    next(); // Pasar al siguiente middleware o ruta
  };
  