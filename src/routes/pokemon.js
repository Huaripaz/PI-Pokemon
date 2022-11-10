const router = require("express").Router();     // Requerimos Router de express
const { Pokemon, Type } = require("../db");     // Destructuring de las tablas

router.post("/", async (req, res) => {      // Creamos la ruta
    let { name, img, health, strength, defense, speed, height, weight, types } = req.body;      // Vamos a recibir estos parametros por body
    let tiposEnArray = types.split(", ");       // Me separa los tipos por ", "

    try {
        if (!name || !health || !strength || !defense || !speed || !height || !weight || !types) {      // Preguntamos negativamente
            return res.status(400).send("Faltan parametros");       // En caso de faltar algun parametro retornamos un Error
        };

        const findPokemon = await Pokemon.findOne({ where: { name: name } });       // Guardamos los nombres en la variable findPokemon

        if (findPokemon) {
            return res.status(400).send("El nombre ya esta en uso");        // En caso de que ese nombre se repita retornamos Error
        };

        let id = Math.floor(Math.random() * 1234567);       // Creamos un id aleatorio despues de hacer la verificacion de datos

        let createPoke = await Pokemon.create({     // Creamos un objeto con los parametros a recibir (en este caso para crear un pokemon)

            id: id,
            img,
            name,       // Nombre
            health,     // Vida
            strength,       // Fuerza
            defense,        // Defensa
            speed,      // Velocidad
            height,     // Altura
            weight,     // Peso
            
        });

        tiposEnArray.forEach(async (t) => {
            let postTypes = await Type.findAll({ where: { name: t } });     // En esta variable se va a guardar
            await createPoke.addTypes(postTypes);       // Agregamos los tipos al objeto de createPoke
        });
        return res.status(200).json(createPoke);        // Retornamos
    } catch (error) {       // O
        return res.status(404).json(error);     // Retornamos Error
    };
});

module.exports = router;