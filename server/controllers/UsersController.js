const UserModel = require("../models/UserModel");
const bcrypt = require('bcrypt');
const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

const addUserController = async(req, res) => {
    const { name, password, email } = req.body;
    const hash = await bcrypt.hash(password, saltRounds);
    console.log(name, hash, email);
    let userobj = {
        name: name,
        password: hash,
        email: email,
        role: role
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
    addUserController
}