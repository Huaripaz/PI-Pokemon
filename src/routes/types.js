const router = require("express").Router();   // Requerimos Router de express
const getApiTypes = require("../Controllers/Type/getApiType");    // Requerimos el controller

router.get("/", async (req, res) => {   // Creamos la ruta
  try {
    const allTypes = await getApiTypes();   // Guardamos todos los tipos en allTypes
    return res.send(allTypes);    // Los retornamos 
  } catch (error) {   // O 
    return res.status(404).json(error);   // Error
  };
});

module.exports = router;