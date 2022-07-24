// Controller used by route /api/users/login

const { getUserByEmail } = require('../services');

const { comparePasswords, generateJWT } = require('../helpers');

module.exports = async (req, res) => {
  console.log("logging in");

  const email = req.body.email;

  const user = await getUserByEmail(email);

  let verified = false;
 
  if (user) {
    verified = await comparePasswords(
      req.body.password, 
      user.password
    );
  }

  let token = null;

  if (verified) {
    const userData = { ...user }; 
    console.log(userData)
    token = generateJWT(userData);
  }
  
  const msg = verified ? "successful login" : "invalid credentials";

  res.json({ result: verified, msg, token });
};
