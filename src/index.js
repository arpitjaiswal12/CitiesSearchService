const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig.js");

const ApiRoutes = require("./routes/index.js");

const setupAndStartServer = async () => {
  // create express object
  const app = express();

  app.use(bodyParser.json());  // app.use() is applied to all incoming request 
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });

};

setupAndStartServer();
