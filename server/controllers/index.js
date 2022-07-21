const queries = require('../services');

const getApiHome = async (req, res) => {
  const users = await queries.getUsers();
  res.json( ...users );
}

module.exports = {
  getApiHome
}
