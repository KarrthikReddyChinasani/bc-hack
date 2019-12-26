import User from "./model";

const insertUser = payload => {
  return User.create(payload)
    .then(doc => doc)
    .catch(err => {
      return err;
    });
};

const getUser = ({ id }) => {
  return User.find({ _id: id })
    .then(doc => doc)
    .catch(err => err);
};

module.exports = { insertUser, getUser };
