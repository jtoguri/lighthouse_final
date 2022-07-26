const { verifyRefreshToken } = require('../helpers');

module.exports = (req, res) => {
  const token = req.cookies.jid;

  if (!token) {
    return res.json({ ok: false, accessToken: '' });
  }

  try {
    const payload = verifyRefreshToken(token);
  } catch(err) {
    return res.send(err);
  }

  // token is valid, send back access token
  
  //get user by id

  // create access token

  res.json({ ok: true, accessToken: 'access token here' });
};
