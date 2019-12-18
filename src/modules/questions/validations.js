import Joi from 'joi';

const createSchemaQuestion = Joi.object().keys({
    question: Joi.string().required(),
    answer: Joi.number().min(1).max(16).required(),
    type: Joi.string().valid('mcq', 'problem').required(),
    options: Joi.array().items(Joi.object().keys({
        option: Joi.string().required(),
        option_id: Joi.number().min(1).max(16).required()
    })).when('type', { is: 'mcq', then: Joi.required(), otherwise: Joi.optional() }),
    testCases: Joi.array().items(Joi.object().keys({
        input: Joi.alternatives().try(Joi.string(), Joi.number(), Joi.object(), Joi.array()).required(),
        output: Joi.alternatives().try(Joi.string(), Joi.number(), Joi.object(), Joi.array()).required(),
        timeComplexity: Joi.number().optional(),
    })).when('type', { is: 'problem', then: Joi.required(), otherwise: Joi.optional() })
});

const validateCreateQuestion = async (payload) => {
    return await Joi.validate(payload, createSchemaQuestion, (err, value) => [value, err]);
}

module.exports = {
    validateCreateQuestion
}