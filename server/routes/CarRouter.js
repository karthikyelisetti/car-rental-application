const express = require("express");
const CarRouter = express.Router();
const { addCarController } = require("../controllers/CarsController");

CarRouter.post("/addcar", addCarController);

module.exports = CarRouter;
