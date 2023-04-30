const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CarsSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    carname: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    rental_price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    }
},
    {
        timestamps: true
    }
);

const CarModel = mongoose.model('Car', CarsSchema);

module.exports = CarModel;