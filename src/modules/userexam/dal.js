import UserExam from "./model";

const createExam = payload => {
  return UserExam.create(payload)
    .then(doc => doc)
    .catch(err => err);
};

const getDataById = async _id => {
  return UserExam.find({ _id })
    .then(docs => docs)
    .catch(err => err);
};

module.exports = { createExam, getDataById };
