const express = require("express");
const UserRouter = express.Router();

const { addUserController } = require("../controllers/UsersController");

UserRouter.post("/adduser", addUserController);

module.exports = UserRouter;
