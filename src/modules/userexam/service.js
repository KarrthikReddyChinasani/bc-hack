import { getDataById } from "./dal";
const getUserData = payload => {
  const { id } = payload;
  return getDataById(id)
    .then(data => data)
    .catch(err => err);
};

module.exports = { getUserData };
