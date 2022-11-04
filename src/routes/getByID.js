const router = require("express").Router(); // requerimos express y lo nombramos router
const axios = require("axios"); // requerimos axios

const { Pokemon, Type } = require("../db"); // requerimos las listas del la db

router.get("/:id", async (req, res) => {
  const { id } = req.params; // validamos que nos pasen esos datos por params

  try {
    const dbPokes = await Pokemon.findOne({
      where: { id: id },
      include: {
        model: Type,
        attribute: ["name"],
        through: {
          types: [],
        },
      },
    });

    if (dbPokes) {
      let dbTipo = dbPokes.types.map((tipo) => {
        return tipo.name;
      });

      const pokeId = {
        id: dbPokes.id,
        name: dbPokes.name,
        img: dbPokes.img,
        health: dbPokes.health,
        strength: dbPokes.strength,
        defense: dbPokes.defense,
        speed: dbPokes.speed,
        height: dbPokes.height,
        weight: dbPokes.weight,
        types: dbTipo,
      };

      return res.status(200).json(pokeId);
    } else {
      const allPokeId = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );

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