// Controller used by route /api/users/login

const { getUserByEmail } = require('../services');

const { comparePasswords, generateAcessToken, generateRefreshToken } = require('../helpers');

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

  res.cookie(
    "jid",
    generateRefreshToken({ userId: user.id })
  );

  const userData = { 
    userId: user.id,
    name: user.first_name
  }; 

  console.log(userData)

  token = generateAccessToken(userData);
  
  const msg = "successful login";

  res.json({ result: verified, msg, token });
};
