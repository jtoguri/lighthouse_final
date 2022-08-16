const queries = require("../services");

module.exports = async (req, res) => {
  const ownerId = req.params.id;
  console.log(ownerId);
  const booking = await queries.getBooking(ownerId);
  res.json(booking);
};
