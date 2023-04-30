const express = require("express");
const UserRouter = express.Router();

const { addUserController } = require("../controllers/UsersController");
const { addCarsController } = require("../controllers/CarsController");

UserRouter.post("/adduser", addUserController);
UserRouter.post("/addcars", addCarsController); 

module.exports = UserRouter;