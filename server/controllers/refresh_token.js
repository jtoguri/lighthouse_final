const { 
  verifyRefreshToken, 
  generateAccessToken, 
  generateRefreshToken,
  sendRefreshToken } = require('../helpers');

const { getUserById } = require('../services');

module.exports = async (req, res) => {
  const token = req.cookies.jid;

  if (!token) {
    return res.json({ ok: false, accessToken: '' });
  }

  let payload;

  try {
    payload = verifyRefreshToken(token);
  } catch(err) {
    return res.send(err);
  }

  // token is valid, send back access token
  
  const user = await getUserById(payload.userID);

  if (!user || user.token_version !== payload.tokenVersion) {
    return res.json({ ok: false, accessToken: '' });
  }
  
  // add logic to generate new refresh token same as login

  sendRefreshToken(res, generateRefreshToken(user));

  const accessToken = generateAccessToken(user);

  res.json({ ok: true, accessToken });
};
