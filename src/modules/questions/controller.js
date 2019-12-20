import {
  createQuestion,
  fetchQuestions,
  updateQuestionData,
  deleteQuestionById
} from "./services";
import {
  validateCreateQuestion,
  validateFetchQuestion,
  validateUpdateQuestion,
  validateDeleteQuestion
} from "./validations";
import { getJoiError, handleResponse } from "./../../utils";
import e from "express";

const create = async (req, res) => {
  const [value, validation] = await validateCreateQuestion(req.body);
  if (validation == null) {
    handleResponse(res, createQuestion, req.body);
  } else {
    res.send({ statusCode: 400, error: getJoiError(validation) });
  }
};

const retrieveQuestions = async (req, res) => {
  const {
    params: { type = "" }
  } = req;
  const [value, validation] = await validateFetchQuestion({ type });
  if (validation == null) {
    handleResponse(res, fetchQuestions, type);
  } else {
    res.send({ statusCode: 400, error: getJoiError(validation) });
  }
};

const updateQuestion = async (req, res) => {
  const {
    params: { id },
    body
  } = req;
  const [value, validation] = await validateUpdateQuestion({ id, body });
  if (validation == null) {
    handleResponse(res, updateQuestionData, { id, body });
  } else {
    res.send({ statusCode: 400, error: getJoiError(validation) });
  }
};

const deleteQuestion = async (req, res) => {
  const {
    params: { id }
  } = req;
  const [value, validation] = await validateDeleteQuestion(id);
  if (validation == null) {
    handleResponse(res, deleteQuestionById, id);
  } else {
    res.send({ statusCode: 400, error: getJoiError(validation) });
  }
};

module.exports = { create, retrieveQuestions, updateQuestion, deleteQuestion };
