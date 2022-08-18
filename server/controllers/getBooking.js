const queries = require("../services");

module.exports = async (req, res) => {
  
  const booking = await queries.getBooking(ownerId);
  res.json(booking);
};
