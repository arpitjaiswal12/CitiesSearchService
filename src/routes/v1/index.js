const express = require("express");
const router = express.Router();

const CityControllers = require("../../controllers/city-controller.js");

router.post("/city", CityControllers.create);
router.delete("/delete-city/:id", CityControllers.destroy);
router.get("/city/:id", CityControllers.get);
router.get("/city", CityControllers.getAll);
router.patch("/update-city/:id", CityControllers.update);

module.exports = router;