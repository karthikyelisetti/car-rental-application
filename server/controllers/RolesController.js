const RoleModel = require("../models/RolesModel");

const RolesController = async(req, res) => {
    const{ user_id, role } = req.body;

    let roleobj = {
        user_id: user_id,
        role: role
    }
    RoleModel.find({ user_id }).then((data) => {
        RoleModel(roleobj).save().then((data) => 
            res.send({ message: `Role is added to the ${user_id}` })
        )
        .catch((error) =>
            res.send({ message: `Role is already assigned to ${user_id}`, data })
        );
    })
}

module.exports = {
    RolesController
}