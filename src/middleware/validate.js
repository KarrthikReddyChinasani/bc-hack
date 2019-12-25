const { OAuth2Client } = require("google-auth-library");

const oAuth2Client = new OAuth2Client(
  "184436333386-3053thg17jd8burgu5s1i0l83psfd28l.apps.googleusercontent.com",
  "uv5UTv9xjtd2V4mbByKLVtZG",
  "http://localhost:1763/api/auth/google/callback"
);

const isAuthenticated = async accessToken => {
  return oAuth2Client
    .getTokenInfo(accessToken)
    .then(res => {
      const { exp } = res;
      const moment = Math.floor(Date.now() / 1000);
      if (moment < exp) {
        return true;
      }
      return false;
    })
    .catch(err => {
      console.log(err);
      return false;
    });
};

module.exports = async function(req, res, next) {
  const {
    headers: { authorization }
  } = req;
  try {
    if (
      req.path !== "/api/auth/google" &&
      req.path !== "/api/auth/google/callback" &&
      req.path !== "/api/api-docs"
    ) {
      const isValid = await isAuthenticated(authorization);
      console.log("is_valid", isValid);
      if (req.headers["authorization"]) {
        if (isValid) {
          return next();
        } else {
          res.send({
            statusCode: 401,
            data: "Unauthorized user, Please login"
          });
        }
      } else {
        res.send({ statusCode: 401, data: "Authorization header is required" });
      }
    } else {
      return next();
    }
  } catch (error) {
    res.send({
      statusCode: 401,
      data: "Unauthorized user, Please login"
    });
  }
};
