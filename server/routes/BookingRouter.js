const express = require("express");
const BookingRouter = express.Router();
const { addBookingController, updateBookingController } = require("../controllers/BookingController");

BookingRouter.post("/addbooking/:carname", addBookingController);
BookingRouter.post("/updatebooking/:carname", updateBookingController);

module.exports = BookingRouter;
