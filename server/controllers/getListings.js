const queries = require("../services");

module.exports = async (req, res) => {
  const listingId = req.params.id;
  const listing = await queries.getListing(listingId);
  res.json(...listing);
};
