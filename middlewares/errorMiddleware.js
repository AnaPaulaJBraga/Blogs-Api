const errorCode = {
    notFound: 404,
    alreadyExists: 409,
    'string.min': 400,
    'any.required': 400,
    'number.min': 422,
    'number.base': 422,
    'string.pattern.base': 400,
    'string.empty': 400,
    invalidFields: 400,
    unauthorized: 401,
  };

  module.exports = (error, _req, res, _next) => {
    if (error.isJoi) {
      const status = errorCode[error.details[0].type];
      return res.status(status).json({ message: error.details[0].message });
    }
  
    const status = errorCode[error.code] || 500;
  
    res.status(status).json({ message: error.message });
  }; 