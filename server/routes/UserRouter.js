const express = require("express");
const UserRouter = express.Router();

const { UserRegisterController } = require("../controllers/UsersController");
const { RolesController , userbyroleController} = require("../controllers/RolesController");

UserRouter.post("/register", UserRegisterController);
UserRouter.post("/roles", RolesController);
UserRouter.post("/userbyrole", userbyroleController);

module.exports = UserRouter;