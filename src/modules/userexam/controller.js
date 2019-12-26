import { getJoiError, handleResponse } from "./../../utils";
import { getUserData } from "./service";
const get = (req, res) => {
  const {
    params: { id }
  } = req;
  handleResponse(res, getUserData, { id });
};

const update = (req, res) => {};

module.exports = { get, update };
