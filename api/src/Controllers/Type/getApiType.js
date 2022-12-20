const axios = require("axios");   // Requerimos axios
const { Type } = require("../../db");   // Destructuring de la tabla Type

const getApiTypes = async () => {
  try {
    let tipos = await Type.findAll({ attributes: ["name"] });   // Nos guardamos los nombres de los Type de la db
    if (!tipos.length) {    // Si no hay tipos, anda al catch 
      let url = `https://pokeapi.co/api/v2/type`;   // Creamos una variable con los valores de la api
      tipos = await axios.get(url, {
        headers: { "Accept-Encoding": "gzip,deflate,compress" }
      });   // Hacemos la peticion a la api
      tipos = tipos.data.results.map((result) => ({   // Recorremos la api guardando sus valores
        name: result.name,
      }));
      await Type.bulkCreate(tipos);   // Creamos varias filas en la tabla de nuestra db 
    }
    return tipos;   // Retornamos
  } catch (error) {   // O
    console.log(error);   // Consologeamos el error
  }
};


module.exports = getApiTypes;