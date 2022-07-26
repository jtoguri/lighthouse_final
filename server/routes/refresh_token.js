const { verifyRefreshToken, generateAccessToken } = require('../helpers');
const { getUserById } = require('../services');

module.exports = async (req, res) => {
  const token = req.cookies.jid;

  if (!token) {
    return res.json({ ok: false, accessToken: '' });
  }

  let payload;

  try {
    payload = verifyRefreshToken(token);
    console.log(payload)
  } catch(err) {
    return res.send(err);
  }

  // token is valid, send back access token
  
  const user = await getUserById(payload.userID);

  if (!user) {
    return res.json({ ok: false, accessToken: '' });
  }

  const accessToken = generateAccessToken(user);

  res.json({ ok: true, accessToken });
};
