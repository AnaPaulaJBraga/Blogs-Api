const categoryService = require('../services/category');

const validateCategory = (req, _res, next) => {
    const { name } = req.body;
    const validation = categoryService.validateCategory({ name });

    if (validation.error) return next(validation.error);

    next();
};

const create = async (req, res) => {
    const { name } = req.body;
    const category = await categoryService.create({ name });

    res.status(201).json(category);
};

const getAll = async (_req, res) => {
    const categories = await categoryService.getAll();

    res.status(200).json(categories);
};

module.exports = {
    validateCategory,
    create,
    getAll,
};