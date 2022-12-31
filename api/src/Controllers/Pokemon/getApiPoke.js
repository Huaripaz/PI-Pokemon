const axios = require("axios");

const getApiPoke = async (url) => {
  try {
    // aca me traigo los primeros 20 pokemones, sino explota todo y la peticion se hace larguisima
    const apiResults = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`, { //https://pokeapi.co/api/v2/pokemon?limit=151
      headers: { "Accept-Encoding": "gzip,deflate,compress" }
    });
    
    const allPokemons = apiResults.data.results;

    for (let p of allPokemons) {
      let url = await axios.get(p.url, {
        headers: { "Accept-Encoding": "gzip,deflate,compress" }
      });
      delete p.url;
      p.id = url.data.id;
      p.img = url.data.sprites.front_default;
      p.health = url.data.stats[0].base_stat;
      p.strength = url.data.stats[1].base_stat;
      p.defense = url.data.stats[2].base_stat;
      p.speed = url.data.stats[5].base_stat;
      p.height = url.data.height;
      p.weight = url.data.weight;
      p.types = url.data.types.map((el) => el.type.name);
    } // p = {p1 {id, img, hp, etc}, p2 {id, img, hp, etc}, p3 {id, img, hp, etc}, p4 {id, img, hp, etc}}
    return allPokemons;
  } catch (error) {
    console.log(error);
  }
};
module.exports = getApiPoke;