import Joi from "joi";
import _ from "loadsh";

const getJoiError = error => {
  if (error === null) {
    return "Something went wrong, Please try again";
  }
  return error.details[0].message;
};

const handleResponse = (res, callback, payload) => {
  callback(payload)
    .then(response => {
      res.send({ statusCode: 201, data: response });
    })
    .catch(err => {
      res.send({ statusCode: 422, error: err });
    });
};

const validateJoi = async (schema, payload) => {
  return await Joi.validate(payload, schema, (err, value) => [value, err]);
};

const findChild = (parent, key, value) => {
  return _.find(parent, [key, value]);
};

const combineObjects = async (obj1, obj2) => {
  return new Promise((resolve, reject) => {
    return resolve(Object.assign({}, obj1, obj2));
  });
};

module.exports = {
  getJoiError,
  handleResponse,
  validateJoi,
  findChild,
  combineObjects
};
