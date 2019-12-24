const authenticate = (req, res) => {
  passport.authenticate("google", { scope: ["profile", "email"] });
};

const redirect = (req, res) => {
  var token = req.user.token;
  console.log("token", token);
  res.redirect("http://localhost:3000?token=" + token);
};

module.exports = { authenticate, redirect };
