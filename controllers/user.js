const userService = require('../services/user');

const validateUser = (req, _res, next) => {
    const { displayName, email, password } = req.body;
    const validation = userService.validateUser({ displayName, email, password }); // valida usando joi(service)
    if (validation.error) return next(validation.error);
    next();
};

const create = async (req, res, next) => {
    const { displayName, email, password, image } = req.body;
    const newUser = await userService.create({ displayName, email, password, image });

    if (newUser.error) return next(newUser.error);

    res.status(201).json(newUser);
};

const login = async (req, res, next) => {
    const { email, password } = req.body;
    const loginToken = await userService.login({ email, password });

    if (loginToken.error) return next(loginToken.error);

    res.status(200).json(loginToken);
};

const getUsers = async (_req, res, _next) => {
    const users = await userService.getUsers();

    res.status(200).json(users);
};

const getById = async (req, res, next) => {
    const { id } = req.params;
    const user = await userService.getById(id);
    if (user.error) return next(user.error);
    res.status(200).json(user);
};

module.exports = {
    create, 
    validateUser,
    login,
    getUsers,
    getById,
};
