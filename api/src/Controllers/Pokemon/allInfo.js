const getApiPoke = require("./getApiPoke");
const getInfoDB = require("./getInfoDb");

const allPoke = async () => {
  try {
    const api = await getApiPoke();
    const dbInfo = await getInfoDB();
    const allInfo = api.concat(dbInfo);
    return allInfo;
  } catch (error) {
    console.log(error);
  }
};

module.exports = allPoke;
