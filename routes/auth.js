const express = require("express");
const router = express.Router();
const {
  checkAuthenticated,
  checkNotAuthenticated,
} = require("../db/db-functions");
const {
  getHome,
  getLogin,
  postLogin,
  getRegister,
  postRegister,
  postLogout,
} = require("../controllers/auth");

// __________________________________________________________________
// __________________________routes__________________________________
// __________________________________________________________________
router.route("/").get(checkAuthenticated, getHome);

router
  .route("/login")
  .get(checkNotAuthenticated, getLogin)
  .post(checkNotAuthenticated, postLogin);

router
  .route("/register")
  .get(checkNotAuthenticated, getRegister)
  .post(checkNotAuthenticated, postRegister);

router.route("/logout").post(postLogout);

module.exports = router;
