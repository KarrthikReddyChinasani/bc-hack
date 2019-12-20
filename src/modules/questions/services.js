import {
  addQuestion,
  getQuestions,
  updateQuestion,
  deleteQuestion
} from "./dal";

const createQuestion = async payload => {
  return addQuestion(payload)
    .then(res => res)
    .catch(err => {
      return err;
    });
};

const fetchQuestions = async (payload = "") => {
  return getQuestions(payload)
    .then(res => res)
    .catch(err => {
      return err;
    });
};

const updateQuestionData = async payload => {
  return updateQuestion(payload)
    .then(res => res)
    .catch(err => err);
};

const deleteQuestionById = async payload =>
  deleteQuestion(payload)
    .then(res => res)
    .catch(err => err);

module.exports = {
  createQuestion,
  fetchQuestions,
  updateQuestionData,
  deleteQuestionById
};
