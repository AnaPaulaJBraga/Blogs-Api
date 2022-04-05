const userService = require('../services/user');

// https://nodejs.org/pt-br/docs/guides/anatomy-of-an-http-transaction/

module.exports = async (req, _res, next) => {
    const { method, url } = req;
    const authFlag = !(method === 'POST' && ['/user', '/login'].includes(url)); // se não for na hora de logar ou add user, ainda não precisa ter token valido nessa parte
    if (authFlag) {
    const { authorization } = req.headers; // no authorization tem o token

    const validateUser = userService.authValidate(authorization);
     if (validateUser.error) return next(validateUser.error); // envia o erro para ser tratado pelo errorMiddleware
     req.userId = validateUser.id; // pra saber qual user é,todo blogpost tem userId
    }

    next();
};