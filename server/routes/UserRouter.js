const express = require("express");
const UserRouter = express.Router();

const { UserRegisterController } = require("../controllers/UsersController");

UserRouter.post("/register", UserRegisterController);

module.exports = UserRouter;