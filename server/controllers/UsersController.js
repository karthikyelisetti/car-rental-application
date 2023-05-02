const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const addUserController = async (req, res) => {
  const { name, password, email, role } = req.body;
  // const hash = await bcrypt.hash(password, saltRounds);
  console.log(name, password, email, role);
  let userobj = {
    name: name,
    password: password,
    email: email,
    role: role,
  };

  UserModel.find({ name }).then((data) => {
    if (data.length !== 0) {
      res.json({ message: `User (${name}) already exists!` });
    } else {
      UserModel(userobj)
        .save()
        .then((data) =>
          res.send({ message: `User (${name}) registered successfully`, data })
        )
        .catch((error) =>
          res.send({ message: "User registration unsuccessful!", error })
        );
    }
  });
};

const updateUserController = async(req, res) => {  
  UserModel.find({ name: req.params.name }).then(async (data) => {
    try{
      let filter = {"name": data[0].name};
      const user = await UserModel.updateOne(filter, req.body);
      res.send({ message: user });
    }catch(error){
      res.send({message: "Please provide a valid username to update the details!"});
    }
    
  });
};

module.exports = {
  addUserController,
  updateUserController
};
