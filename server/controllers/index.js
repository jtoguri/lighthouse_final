const queries = require("../services");

const getApiHome = async (req, res) => {
  const users = await queries.getUsers();
  res.json(...users);
};

const userLogin = require("./userLogin");

const userRegistration = require("./userRegistration");

const getListing = require("./getListing");

module.exports = {
  getApiHome,
  userLogin,
  userRegistration,
  getListing,
};
