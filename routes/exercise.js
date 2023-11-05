const express = require("express");
const router = express.Router();
const {
  getExercises,
  insertExercise,
  updateExercise,
  deleteExercise,
} = require("../controllers/exercise");

router
  .route("/:level/:unit")
  .get(getExercises)
  .post(insertExercise)
  .put(updateExercise)
  .delete(deleteExercise);

module.exports = router;
