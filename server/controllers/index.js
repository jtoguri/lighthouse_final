const queries = require("../services");

const getApiHome = async (req, res) => {
  const users = await queries.getUsers();
  res.json(...users);
};

const listAllListings = async (_req, res) => {
  const listings = await queries.getAllListings();
  res.json(listings);
};

const clientSearchLocation = async (req, res) => {
  const location = req.params.location.split(" ").join("+");

  const userAgent = "Equipshare";

  let coords = null;

  if (location) {
    const nominatimString = `https://nominatim.openstreetmap.org/search?q=${location}&limit=1&countrycodes=ca&format=json`;

    console.log(nominatimString);
  }
};

const userLogin = require("./userLogin");

const userRegistration = require("./userRegistration");

const getListing = require("./getListings");

const refreshToken = require("./refresh_token");

const getImages = require("./getImages");

module.exports = {
  getApiHome,
  userLogin,
  userRegistration,
  getListing,
  refreshToken,
  listAllListings,
  clientSearchLocation,
  getImages,
};
