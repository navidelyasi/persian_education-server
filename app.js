if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const auth = require("./routes/auth");
const exercise = require("./routes/exercise");
const question = require("./routes/question");
const sequelizeDB = require("./db/db-init");
const { User, Exercise, Question } = require("./db/models");
const initPassport = require("./passport-config");

// __________________________________________________________________
// ______________    GENERAL       init    __________________________
// __________________________________________________________________
initPassport(
  passport,
  async (email2) => await User.findOne({ where: { email: email2 } }),
  async (id) => await User.findByPk(id)
);

app.set("view-engine", "ejs");
app.use(express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

// __________________________________________________________________
// ______________________________routes______________________________
// __________________________________________________________________
app.use("/", auth);
app.use("/exercise", exercise);
app.use("/question", question);

// __________________________________________________________________
// ______________________________listen______________________________
// __________________________________________________________________
const start = async () => {
  try {
    await sequelizeDB.authenticate();
    console.log("Connection has been established successfully.");
    // await Question.sync({ force: true });
    // console.log("The table for the User model was just (re)created!");
    app.listen(process.env.PORT, () =>
      console.log(`Server is listening on port ${process.env.PORT}...`)
    );
  } catch (error) {
    console.log(error);
    console.error("Unable to connect to the database:", error);
  }
};

start();
