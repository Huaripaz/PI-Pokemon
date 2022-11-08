const router = require("express").Router();
const allInfo = require("../Controllers/Pokemon/allInfo.js");
const getByName = require("../Controllers/Pokemon/getByName.js");

router.get("/", async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const byName = await getByName(name);
      return res.status(200).json([byName]);
    } else {
      const allPoke = await allInfo();
      return res.status(200).json(allPoke);
    };
  } catch (error) {
    return res.status(400).json({ msg: "No se encontro el pokemon solicitado" });
  };
});

module.exports = router;