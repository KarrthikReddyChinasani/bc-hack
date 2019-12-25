const { OAuth2Client } = require("google-auth-library");

const oAuth2Client = new OAuth2Client(
  "184436333386-3053thg17jd8burgu5s1i0l83psfd28l.apps.googleusercontent.com",
  "uv5UTv9xjtd2V4mbByKLVtZG",
  "http://localhost:1763/api/auth/google/callback"
);

const isAuthenticated = async accessToken => {
  const tokenInfo = await oAuth2Client.getTokenInfo(accessToken);
  console.log("tokenInfo", tokenInfo);
  const { exp } = tokenInfo;
  const moment = Math.floor(Date.now() / 1000);
  if (moment < exp) {
    return true;
  }
  return false;
};

module.exports = function(req, res, next) {
  if (
    req.path !== "/api/auth/google" &&
    req.path !== "/api/auth/google/callback"
  ) {
    if (req.headers["authorization"]) {
      if (isAuthenticated(req.headers["authorization"])) {
        return next();
      } else {
        res.send({ statusCode: 401, data: "Unauthorized user, Please login" });
      }
    } else {
      res.send({ statusCode: 401, data: "Authorization header is required" });
    }
  } else {
    return next();
  }
};
