import { getJoiError, handleResponse } from "./../../utils";
import { createUser, getDetails } from "./service";

const create = (req, res) => {
  const {
    headers: { userid }
  } = req;
  handleResponse(res, createUser, { body: req.body, userid });
};

const get = (req, res) => {
  const {
    params: { id }
  } = req;
  handleResponse(res, getDetails, { id });
};

module.exports = { create, get };
