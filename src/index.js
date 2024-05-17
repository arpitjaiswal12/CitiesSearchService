const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig.js");

const CityRepository = require("./repository/city-repository.js");

const setupAndStartServer = async () => {
  // create express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });

  const obj = new CityRepository();
  obj.deleteCity(1)
};

setupAndStartServer();
