const Joi = require('joi');

const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const PASSWORD_PATTERN = /^\w{6}$/;
// define regras para cada um dos atributos e personaliza message
module.exports = Joi.object({
    displayName: Joi.string().min(8).optional().messages({
      'string.min': '"displayName" length must be at least 8 characters long',
      'string.base': '"displayName" should be a string',
      'any.required': '"displayName" is required',
    }),
    email: Joi.string().regex(EMAIL_PATTERN).not().empty()
      .required()
      .messages({
        'string.base': '"email" should be a string',
        'any.required': '"email" is required',
        'string.pattern.base': '"email" must be a valid email',
        'string.empty': '"email" is not allowed to be empty',
      }),
    password: Joi.string().regex(PASSWORD_PATTERN).not().empty()
      .required()
      .messages({
        'any.required': '"password" is required',
        'string.pattern.base': '"password" length must be 6 characters long',
        'string.empty': '"password" is not allowed to be empty',
      }),
  }); 