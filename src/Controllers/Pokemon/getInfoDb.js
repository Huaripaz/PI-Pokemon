const { Type, Pokemon } = require("../../db");    // Destructuring de las tablas

const getInfoDB = async () => {   
  try {
    let dbData = await Pokemon.findAll({    // busco la info en la db
      include: {    // incluye 
        model: Type,    // modelo type (models/type)
        attributes: ["name"],   // traeme este atributo (nombre)
      },
    });

    let poke = [];    // Creamos un array vacio

    for (let i = 0; i < dbData.length; i++) {
      let tipos = dbData[i].types.map((tipo) => {
        return tipo.name;
      });

      let newPoke = {
        id: dbData[i].id,
        name: dbData[i].name,
        img: dbData[i].img,
        health: dbData[i].health,
        strength: dbData[i].strength,
        defense: dbData[i].defense,
        speed: dbData[i].speed,
        height: dbData[i].height,
        weight: dbData[i].weight,
        types: tipos,
        createdDB: true,
      };
      poke.push(newPoke);
    }

    return poke;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getInfoDB;
