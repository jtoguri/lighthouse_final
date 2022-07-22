// Controller used by route /api/users/login

const { getUserByEmail } = require('../services');

const { comparePasswords } = require('../helpers');

module.exports = async (req, res) => {
  console.log("logging in");

  const email = req.body.email;

  const user = await getUserByEmail(email);
  
  const verified = await comparePasswords(req.body.password, user.password);
  
  const msg = verified ? "successful login" : "invalid credentials";

  res.json({ result: verified, msg });
};
