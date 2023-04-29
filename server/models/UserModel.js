const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new ({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);

// This model is used to interact with the database using APIs
const UserModel = mongoose.model('User', Schema);

module.exports = UserModel;