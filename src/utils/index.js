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

module.exports = {
  getJoiError,
  handleResponse
};
