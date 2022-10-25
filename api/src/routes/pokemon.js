const { Router } = require("express");
const { Pokemon, Type } = require("../db");
const router = Router();

router.post("/", async (req, res) => {
    let { name, img, health, strength, defense, speed, height, weight, types } = req.body;
    let tiposEnArray = types.split(", ");

    try {
        if (!name || !health || !strength || !defense || !speed || !height || !weight || !types) {
            return res.status(400).send("Faltan parametros");
        };

        const findPokemon = await Pokemon.findOne({ where: { name: name } });

        if (findPokemon) {
            return res.status(400).send("El nombre ya esta en uso");
        };

        let id = Math.floor(Math.random() * 1234567);
        let [createPoke, exist] = await Pokemon.findOrCreate({
            where: {
                id: id,
                img,
                name,
                health,
                strength,
                defense,
                speed,
                height,
                weight,
            },
        });

        tiposEnArray.forEach(async (t) => {
            let postTypes = await Type.findAll({ where: { name: t } });
            await createPoke.addType(postTypes);
        });
        return res.status(200).json(createPoke);
    } catch (error) {
        return res.status(404).json('Error', error);
    };
});

module.exports = router;