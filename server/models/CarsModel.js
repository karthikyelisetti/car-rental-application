const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CarsSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    owner: {
      type: String,
      required: true,
    },
    carname: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    cartype: {
      type: String,
      required: true,
    },
    rental_price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    booking_status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CarModel = mongoose.model("Car", CarsSchema);

module.exports = CarModel;
