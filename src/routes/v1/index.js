const express = require('express');
const router = express.Router();

const CityControllers = require("../../controllers/city-controller.js")

router.post("/city",CityControllers.create);

module.exports = router;