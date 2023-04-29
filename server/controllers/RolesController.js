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
};

// controller to fetch the user data based on the id provided
const userbyroleController = async(req, res) => {
    const{ id } = req.body;
    const userroledata = await RoleModel.find({ _id: id }).populate(user_id);
    res.send(userroledata);
}

module.exports = {
    RolesController,
    userbyroleController
}