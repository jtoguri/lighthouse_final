const queries = require("../services");

const axios = require("axios");

const getApiHome = async (req, res) => {
  const users = await queries.getUsers();
  res.json(...users);
};

const searchListings = async (req, res) => {
  const lat = req.params.lat;
  const lon = req.params.lon;

  const coordinates = { lat, lon };

  const listings = await queries.getNearbyListings(coordinates);

  res.json(listings);
};

const clientSearchLocation = async (req, res) => {
  const location = req.params.location.split(" ").join("+");

  const userAgent = "Equipshare";

  let coords = null;

  if (location) {
    const nominatimString = `https://nominatim.openstreetmap.org/search?q=${location}&limit=1&countrycodes=ca&format=json`;

    const nominatimRes = await axios.get(nominatimString, {
      headers: {
        "User-Agent": "Equipshare",
      },
    });

    const locationData = nominatimRes.data[0];

    console.log(locationData);

    return res.json({ ...locationData });
  }

  return res.json({ lat: "43.6534817", lon: "-79.3839347" });
};

const userLogin = require("./userLogin");

const userRegistration = require("./userRegistration");

const getListing = require("./getListings");

const refreshToken = require("./refresh_token");

const getImages = require("./getImages");

const createBooking = require("./createBooking");

const getBooking = require("./getBooking");

const deleteBooking = require("./deleteBooking");

const clientHomePageListings = async (_req, res) => {
  const listings = await queries.getHomePageListings();

  res.send(listings);
};

module.exports = {
  getApiHome,
  userLogin,
  userRegistration,
  getListing,
  refreshToken,
  searchListings,
  clientSearchLocation,
  getImages,
  createBooking,
  getBooking,
  clientHomePageListings,
  deleteBooking,
};
