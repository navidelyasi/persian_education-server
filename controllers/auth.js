const passport = require("passport");
const bcrypt = require("bcrypt");
const { User } = require("../db/models");

const getHome = (req, res) => {
  res.render("index.ejs", { name: req.user.name });
};

// __________________________________________________________________
// _____________________________login________________________________
// __________________________________________________________________
const getLogin = (req, res) => {
  res.render("login.ejs");
};

const postLogin = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
});

// __________________________________________________________________
// _____________________________register_____________________________
// __________________________________________________________________
var failureMessage = null;
const getRegister = (req, res) => {
  res.render("register.ejs", { failureMessage });
};

const postRegister = async (req, res) => {
  try {
    const hp = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hp,
    });
    failureMessage = null;
    res.redirect("/login");
  } catch (e) {
    failureMessage = e.message;
    res.status(400).redirect("/register");
  }
};

// __________________________________________________________________
// ___________________________log out   _____________________________
// __________________________________________________________________
const postLogout = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
};

module.exports = {
  getHome,
  getLogin,
  postLogin,
  getRegister,
  postRegister,
  postLogout,
};
