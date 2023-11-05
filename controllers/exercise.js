const { Exercise } = require("../db/models");
const { exercises } = require("../db/exercises/raw-data");

const getExercises = async (req, res) => {
  let results = exercises.filter((q) => q.level === req.params.level);
  results = results.filter((q) => q.unit === req.params.unit);
  res.send(results);
};

// req.params : should be level and unit
// req.body : should be id, number, title, type
const insertExercise = async (req, res) => {
  let newEx = {
    id: req.body.id,
    level: req.params.level,
    unit: req.params.unit,
    number: req.body.number,
    title: req.body.title,
    type: req.body.type,
  };
  try {
    const result = await Exercise.create(newEx);
    res.send("result");
  } catch (e) {
    res.status(400).send(e.message);
  }
};

// req.params : should be correct
// req.body.id : should be correct
// new data in req.body : including -> level, unit, number, title, type
const updateExercise = async (req, res) => {
  try {
    const ex = await Exercise.findByPk(req.body.id);
    ex.level = req.body.level;
    ex.unit = req.body.unit;
    ex.number = req.body.number;
    ex.title = req.body.title;
    ex.type = req.body.type;
    await ex.save();
    res.status(200).send("done");
  } catch (e) {
    res.status(400).send(e.message);
  }
};

// req.params : should be correct
// req.body.id : should be correct
const deleteExercise = async (req, res) => {
  try {
    const ex = await Exercise.findByPk(req.body.id);
    await ex.destroy();
    res.status(200).send("done");
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = {
  getExercises,
  insertExercise,
  updateExercise,
  deleteExercise,
};

/* 

insert to database: 
  //   const results = await questions.map(async (q) => {
  //     const newUser = await Question.create(q);
  //   });

find from database:
  //   const results = await Question.findAll({ where: { exid: 7 } });

  */
