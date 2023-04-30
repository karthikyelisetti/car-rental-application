const express = require("express");
const UserRouter = express.Router();

const { UserRegisterController } = require("../controllers/UsersController");
const { RolesController, userbyroleController } = require("../controllers/RolesController");
const { addCarDetailsController, getCarDetailsController } = require("../controllers/CarsController");

UserRouter.post("/register", UserRegisterController);
UserRouter.post("/roles", RolesController);
UserRouter.post("/getuserbyrole", userbyroleController);
UserRouter.post("/addcardetails", addCarDetailsController);
UserRouter.post("/getusercardetails", getCarDetailsController);

module.exports = UserRouter;