const queries = require("../services");

module.exports = async (req, res) => {
  const userId = req.userID;   
  console.log(userId)
  const booking = await queries.getBooking(userId);
  res.json(booking);
};
