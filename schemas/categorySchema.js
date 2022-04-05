const Joi = require('joi');
// define regras para cada um dos atributos e personaliza message
module.exports = Joi.object({
  name: Joi.string().required().messages({
    'string.base': '"name" should be a string',
    'any.required': '"name" is required',
  }),
});