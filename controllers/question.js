const { Question, Exercise } = require("../db/models");
const { questions, exercises } = require("../db/exercises/raw-data");
const {
  prepareMultiChoice,
  prepareListening,
  prepareNormalQuestions,
} = require("../db/exercises/functions");

const getQuestions = async (req, res) => {
  const ex = exercises.filter((e) => e.id === parseInt(req.params.exid))[0];

  let qu = questions.filter((q) => q.exid === parseInt(req.params.exid));
  if (ex) {
    if (ex.type === "multi-choice") {
      res.send(prepareMultiChoice(qu));
    } else if (ex.type === "listening") {
      res.send(prepareListening(qu));
    } else {
      res.send(prepareNormalQuestions(qu));
    }
  } else {
    res.send("NO RESULT");
  }
};

// req.params : should be exid
// req.body : should be id, title, body
const insertQuestion = async (req, res) => {
  let newQ = {
    id: req.body.id,
    exid: req.params.exid,
    title: req.body.title,
    body: req.body.body,
  };
  try {
    const result = await Question.create(newQ);
    res.send("Done");
  } catch (e) {
    res.status(400).send(e.message);
  }
};

// req.params : should be correct exid
// req.body.id : should be correct id
// new data in req.body : including -> exid, title, body
const updateQuestion = async (req, res) => {
  try {
    const qu = await Question.findByPk(req.body.id);
    qu.exid = req.body.exid;
    qu.title = req.body.title;
    qu.body = req.body.body;
    await qu.save();
    res.status(200).send("done");
  } catch (e) {
    res.status(400).send(e.message);
  }
};

// req.params : should be correct exid
// req.body.id : should be correct id
const deleteQuestion = async (req, res) => {
  try {
    const qu = await Question.findByPk(req.body.id);
    await qu.destroy();
    res.status(200).send("done");
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = {
  getQuestions,
  insertQuestion,
  updateQuestion,
  deleteQuestion,
};

/* 

--------->>>>>>>>>>>>>        insert to database: 
const results = await questions.map(async (q) => {
       const newUser = await Question.create(q);
});

--------->>>>>>>>>>>>>        find from database:
const exercise = await Exercise.findByPk(parseInt(req.params.exid));

const questions = await Question.findAll({
     where: { exid: parseInt(req.params.exid) },
});

  */
