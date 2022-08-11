const queries = require("../services");

const axios = require("axios");

const getApiHome = async (req, res) => {
  const users = await queries.getUsers();
  res.json(...users);
};

const listAllListings = async (_req, res) => {
  const listings = await queries.getAllListings();
  res.json(listings);
}

const clientSearchLocation = async (req, res) => {
  const location = req.params.location.split(' ').join('+');

  const userAgent = "Equipshare";

  let coords = null;
  
  if (location) {
    const nominatimString =
      `https://nominatim.openstreetmap.org/search?q=${location}&limit=1&countrycodes=ca&format=json`;
  
    const nominatimRes = await axios.get(nominatimString, { headers: {
      "User-Agent": "Equipshare" } })

    const locationData = nominatimRes.data[0];

    console.log(locationData)

    return res.json({ ...locationData });
  }

  return res.json({ "lat": '43.6534817', "lon": '-79.3839347' });
  
}

const userLogin = require("./userLogin");

const userRegistration = require("./userRegistration");

const getListing = require("./getListings");

const refreshToken = require('./refresh_token');

module.exports = {
  getApiHome,
  userLogin,
  userRegistration,
  getListing,
  refreshToken,
  listAllListings,
  clientSearchLocation
};
