const { Category } = require('../models');
const categorySchema = require('../schemas/categorySchema');

const validateCategory = ({ name }) => {
    const validation = categorySchema.validate({ name });

    return validation;
};

const create = async ({ name }) => Category.create({ name });

const getAll = async () => Category.findAll();

module.exports = {
    validateCategory,
    create,
    getAll,
};