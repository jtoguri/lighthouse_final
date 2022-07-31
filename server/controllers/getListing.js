const queries = require("../services");

module.exports = async (req, res) => {
  const listing = await queries.getVehicle();
  res.json(...listing);
};
