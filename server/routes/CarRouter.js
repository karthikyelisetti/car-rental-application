const express = require("express");
const CarRouter = express.Router();
const { addCarController, getAllCarsController, updateCarController } = require("../controllers/CarsController");

CarRouter.post("/addcar", addCarController);
CarRouter.post("/updatecar", updateCarController);
CarRouter.get("/getallcars", getAllCarsController);

module.exports = CarRouter;
