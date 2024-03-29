const { verifyAccessToken, verifyRefreshToken } = require("../helpers");

const isAuth = (req, res, next) => {
  const nonSecurePaths = [
    "/",
    "/api/users/login",
    "/api/users/register",
    "/refresh_token",
    "/api/booking",
  ];

  if (nonSecurePaths.includes(req.path)) return next();

  if (
    req.path.split("/")[2] === "listings" ||
    req.path.split("/")[2] === "search" ||
    req.path.split("/")[2] === "images"
    //req.path.split("/")[2] === "bookings"
  ) {
    return next();
  }

  const authorization = req.headers["authorization"];

  if (!authorization) {
    return res.json({ error: "this is a restricted route" });
  }

  try {
    const token = authorization.split(" ")[1];

    let payload = verifyAccessToken(token);
    
    if (payload.name === 'TokenExpiredError' ) {
      const refreshToken = req.cookies.jid;
      payload = verifyRefreshToken(refreshToken)
    }

    req.userID = payload.userID;

    next();
  } catch (err) {
    return res.send(err);
  }
};

module.exports = {
  isAuth,
};
