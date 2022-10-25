const router = require("express").Router();
const getApiTypes = require("../Controllers/Type/getApiType");  // ruta api

router.get("/", async (req, res) => {
  try {
    const allTypes = await getApiTypes();
    return res.send(allTypes);
  } catch (error) {
    return res.status(404).json(error);
  };
});

module.exports = router;