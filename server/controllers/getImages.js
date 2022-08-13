const queries = require("../services");

module.exports = async (req, res) => {
  const listingId = req.params.id;
  const images = await queries.getImages(listingId);
  res.json(images);
};
