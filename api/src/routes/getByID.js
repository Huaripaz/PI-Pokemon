const router = require("express").Router();   // Requerimos Router de express
const axios = require("axios");   // Requerimos axios

const { Pokemon, Type } = require("../db");   // Destructuring de las tablas

router.get("/:id", async (req, res) => {    // Creamos la ruta
  const { id } = req.params;    // Vamos a recir id por params

  try {
    const dbPokes = await Pokemon.findOne({
      where: { id: id },    // Cuando recibo id, va abuscar el mismo id que yo tengo en mi tabla Pokemon
      include: {    //  Incluime el nombre del Type del Pokemon que busco
        model: Type,
        attribute: ["name"],
        through: {
          types: [],
        },
      },
    });

    if (dbPokes) {    // Vamos a buscar el pokemon en mi db

      let dbTipo = dbPokes.types.map((tipo) => {    // Recorre mis tipos en busca de los que matcheen  
        return tipo.name;   // Busco el nombre de los tipos de Type segun el id
      });

      const pokeId = {    // Creo el obj 
        id: dbPokes.id,
        name: dbPokes.name,
        img: dbPokes.img,
        health: dbPokes.health,
        strength: dbPokes.strength,
        defense: dbPokes.defense,
        speed: dbPokes.speed,
        height: dbPokes.height,
        weight: dbPokes.weight,
        types: dbTipo,    // Vincular un array con los tipos especificos 
      };

      return res.status(200).json(pokeId);    // Retornamos el obj

    } else {    // Si no encuentra el pokemon en mi db lo busca en la api

      const allPokeId = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);   // Hacemos la peticion a la api

      const superData = allPokeId.data;

      const pokeId = {
        id: superData.id,
        name: superData.name,
        img: superData.sprites.front_default,
        health: superData.stats[0].base_stat,
        strength: superData.stats[1].base_stat,
        defense: superData.stats[2].base_stat,
        speed: superData.stats[5].base_stat,
        height: superData.height,
        weight: superData.weight,
        types: superData.types.map((el) => el.type.name),
      };
      return res.status(200).send(pokeId);
    }
  } catch (error) {
    res.status(404).json('Error', error);
    // console.log(error);
  }
});

module.exports = router;