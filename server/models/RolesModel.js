const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    role: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);

const RoleModel = mongoose.model('Role', RoleSchema);

module.exports = RoleModel;
