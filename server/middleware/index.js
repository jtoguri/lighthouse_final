const { verifyAccessToken } = require("../helpers");

const isAuth = (req, res, next) => {
  const nonSecurePaths = [
    "/",
    "/api/users/login",
    "/api/users/register",
    "/refresh_token",
  ];

  if (nonSecurePaths.includes(req.path)) return next();

  if (req.path.split("/")[2] === "listings" || req.path.split("/")[2]
  === "search") {
    //nonSecurePaths.push(req.path);
    return next();
  }

  const authorization = req.headers["authorization"];

  if (!authorization) {
    return res.json({ error: "this is a restricted route" });
  }

  try {
    const token = authorization.split(" ")[1];

    const payload = verifyAccessToken(token);

    req.userID = payload.userID;

    next();
  } catch (err) {
    return res.send(err);
  }
};

module.exports = {
  isAuth,
};
