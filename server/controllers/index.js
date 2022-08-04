const queries = require("../services");

const getApiHome = async (req, res) => {
  const users = await queries.getUsers();
  res.json(...users);
};

const userLogin = require("./userLogin");

const userRegistration = require("./userRegistration");

const getListing = require("./getListings");

const refreshToken = require('./refresh_token');

module.exports = {
  getApiHome,
  userLogin,
  userRegistration,
  getListing,
  refreshToken
};
