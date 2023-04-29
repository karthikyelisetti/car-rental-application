const express = require("express");
const UserRouter = express.Router();

const { UserRegisterController } = require("../controllers/UsersController");
const { RolesController } = require("../controllers/RolesController");

UserRouter.post("/register", UserRegisterController);
UserRouter.post("/roles", RolesController);

module.exports = UserRouter;