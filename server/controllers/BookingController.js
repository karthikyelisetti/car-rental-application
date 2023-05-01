const BookingModel = require("../models/BookingModel");
const CarModel = require("../models/CarsModel");

const addBookingController = async (req, res) => {
  const { userid, carid, carname, bookingid, booking_price, booked_by, booking_date } = req.body;  
  let bookingobj = {
    userid: userid,
    carid: carid,
    carname: carname,
    bookingid: bookingid,
    booking_price: booking_price,
    booked_by: booked_by,
    booking_date: booking_date,
  };

  CarModel.find({ carname: req.params.carname }).then(async (data) => {
    if (data.length !== 0 && data[0].booking_status == "Open") {
      BookingModel(bookingobj)
        .save()
        .then((data) =>
          res.send({
            message: `Selected car(${data[0].carname}) is booked successfully`,
            data,
          })
        )
        .catch((error) =>
          res.send({
            message: `Error while booking the car(${data[0].carname}}) for rental`,
            error,
          })
        );
        let filter = {"carname": data[0].carname}
        const car = await CarModel.updateOne(filter, {"booking_status": "Booked"});
    } else {
      res.send({ message: `Selected Car(${carid}) is not available for booking!` });
    }
  });
};

const updateBookingController = async(req, res) => {  
  BookingModel.find({ carname: req.params.carname }).then(async (data) => {
    try{
      let filter = {"carname": data[0].carname}
      const car = await CarModel.updateOne(filter, req.body);
      res.send({ data: car });
    }catch(error){
      res.send({message: "Please provide a valid car name to proceed with the booking!"});
    }
  });
};

module.exports = {
  addBookingController,
  updateBookingController
};
