import { createQuestion } from "./services";
import { validateCreateQuestion } from "./validations";
const create = async (req, res) => {
  const [value, validation] = await validateCreateQuestion(req.body);
  if (validation == null) {
    await createQuestion(req.body)
      .then(response => {
        res.send({ statusCode: 201, data: response });
      })
      .catch(err => res.send({ statusCode: 201, data: err }));
  } else {
    res.send({ statusCode: 300, data: validation.details[0].message });
  }
};

module.exports = { create };
