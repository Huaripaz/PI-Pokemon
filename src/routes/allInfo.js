const router = require("express").Router();   // Requerimos Router de express

const allInfo = require("../Controllers/Pokemon/allInfo.js");   // Requerimos los controllers(allInfo)
const getByName = require("../Controllers/Pokemon/getByName.js");   // Requerimos los controllers(getByName)

router.get("/", async (req, res) => {   // Creamos la ruta
  const { name } = req.query;   // Vamos a recibir name por query 

  try {
    if (name) {   // Preguntamos si name=true
      const byName = await getByName(name);   // Creamos una variable para guardar el nombre que recibimos 
      return res.status(200).json([byName]);    // Retornamos 
    } else {    // Sino 
      const allPoke = await allInfo();    // Guardamos los pokemons en allPoke 
      return res.status(200).json(allPoke);   // Retornamos
    };
  } catch (error) {   // O
    return res.status(400).json({ msg: "No se encontro el pokemon solicitado" });   // Mensaje de Error
  };
});

module.exports = router;