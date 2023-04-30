const CarModel = require("../models/CarsModel");

const addCarDetailsController = async(req, res) => {
    const { user_id, owner, carname, company, type, rental_price, image } = req.body;

    let carobj = {
        user_id: user_id,
        owner: owner,
        carname: carname,
        company: company,
        type: type,
        rental_price: rental_price,
        image: image
    }

    CarModel(carobj).save().then((data) => 
        res.send({message: `The car details are mapped to the user successfully`, data})
    )
    .catch((error) =>
        res.send({message: `The car details are not added to the user due to`, error})
    );
};

const getCarDetailsController = async(req, res) => {
    CarModel.find({ owner: req.params.owner }).then((data) => {
        if (data.length !== 0) {
            res.send(data);
        }else {
            res.json({ message: `User(${owner}) do not own cars!` });
        }
    });
};

module.exports = {
    addCarDetailsController,
    getCarDetailsController
}