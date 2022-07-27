// Controller used by route /api/users/login

const { getUserByEmail } = require('../services');

const { 
  comparePasswords, 
  generateAccessToken, 
  generateRefreshToken,
  sendRefreshToken } = require('../helpers');

module.exports = async (req, res) => {
  console.log("logging in");

  const email = req.body.email;

  const user = await getUserByEmail(email);

  if (!user) {
    return res.json({ error: "Invalid credentials." });
  }

  const verified = await comparePasswords(
    req.body.password, 
    user.password
  );

  if (!verified) {
    return res.json({ error: "Invalid credentials." });
  }

  //Successful login

  sendRefreshToken(res, generateRefreshToken(user));

  const accessToken = generateAccessToken(user);
  
  const msg = "successful login";

  res.json({ result: verified, msg, accessToken });
};
