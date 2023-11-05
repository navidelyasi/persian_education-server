const express = require("express");
const router = express.Router();
const {
  getQuestions,
  insertQuestion,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/question");

router
  .route("/:exid")
  .get(getQuestions)
  .post(insertQuestion)
  .put(updateQuestion)
  .delete(deleteQuestion);

module.exports = router;
