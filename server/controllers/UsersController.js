const UserModel = require("../models/UserModel");

const UserRegisterController = async(req, res) => {
    const { name, password, email } = req.body;
    console.log(name, password, email);
    let userobj = {
        name: name,
        password: password,
        email: email
    }

    UserModel.find({name}).then((data) => {
        if(data.length !== 0) {
            res.json({message: `User(${name}) already exists!`})
        }else {
            UserModel(userobj).save().then((data) =>
                res.send({ message: `User(${name}) registered successfully`, data })
            )
            .catch((error) =>
                res.send({ message: "User registration unsuccessful!" })
            );
        }
    });
}

modules.exports = {
    UserRegisterController
}