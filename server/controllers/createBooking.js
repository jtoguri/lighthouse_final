const { createBooking } = require("../services");

module.exports = async (req, res) => {
  const bookingData = {
    owner_id: req.body.owner_id,
    renter_id: req.body.renter_id,
    vehicle_id: req.body.vehicle_id,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    total_price: req.body.total_price,
  };
  const booking = await createBooking(bookingData);
  console.log("new booking:", booking);
  return res.redirect("/");
};
