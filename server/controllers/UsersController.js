const UserModel = require("../models/UserModel");
const bcrypt = require('bcrypt');
const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

const UserRegisterController = async(req, res) => {
    const { name, password, email } = req.body;
    console.log(name, password, email);
    let userobj = {
        name: name,
        password: bcrypt.hash(password, saltRounds, function(err, hash) {
            return hash;
        }),
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
                res.send({ message: "User registration unsuccessful!", error })
            );
        }
    });
}

module.exports = {
    UserRegisterController
}