const CarModel = require("../models/CarsModel");

const addCarDetailsController = async(req, res) => {
    const { user_id, carname, company, type, rental_price, image } = req.body;

    let carobj = {
        user_id: user_id,
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
    const { id } = req.body;
    const usercardata = CarModel.find({ _id: id }).populate('user_id');
    res.send(usercardata);
}

module.exports = {
    addCarDetailsController,
    getCarDetailsController
}