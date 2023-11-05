const prepareNormalQuestions = (questions) => {
  let result = [];
  questions.forEach((q, i) => {
    result.push({
      title: q.title,
      body: q.body,
    });
  });
  return result;
};

const prepareMultiChoice = (questions) => {
  let result = [];
  questions.forEach((q, i) => {
    const [choices, correct] = q.body.split("@@");
    result.push({
      title: q.title,
      body: choices.split("@"),
      correct: parseInt(correct),
    });
  });
  return result;
};

const prepareListening = (questions) => {
  let result = [];
  questions.forEach((q, i) => {
    const [newBody, song] = q.body.split("@@song@@");
    result.push({
      title: q.title,
      body: newBody,
      song: song,
    });
  });
  return result;
};

module.exports = {
  prepareMultiChoice,
  prepareListening,
  prepareNormalQuestions,
};
