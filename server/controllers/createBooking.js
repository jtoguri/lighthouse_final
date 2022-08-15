const { createBooking } = require("../services");

module.exports = async (req, res) => {
  const bookingData = {
    owner_id: req.body.owner_id,
    renter_id: req.body.renter_id,
    vehicle_id: req.body.vehicle_id,
  };
  const booking = await createBooking(bookingData);
  console.log("new booking:", booking);
  return res.redirect("/");
};
