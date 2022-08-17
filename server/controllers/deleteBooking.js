const { deleteBooking } = require("../services");

module.exports = async (req, res) => {
  const renter_id = req.params.id;
  const deleted = await deleteBooking(renter_id);
  console.log("deleted:", deleted);
};
