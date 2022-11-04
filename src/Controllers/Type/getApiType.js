const axios = require("axios");   // requerimos axios
const { Type } = require("../../db");   // traemos la tabla de la db

const getApiTypes = async () => {
  try {
    let tipos = await Type.findAll({ attributes: ["name"] });   //  asi podemos lo traemos de la db
    if (!tipos.length) {                                        // en caso de no tener ese atributo en la db 
      let url = `https://pokeapi.co/api/v2/type`;               // lo traemos de la api
      tipos = await axios.get(url);                             // lo guardamos en la variable
      tipos = tipos.data.results.map((result) => ({             //  aca guardamos ese resultado en la propiedad name 
        name: result.name,
      }));
      await Type.bulkCreate(tipos);                             // y aca lo agregamos definitivamente a la tabla
    }
    return tipos;
  } catch (error) {
    console.log(error);
  }
};


module.exports = getApiTypes;