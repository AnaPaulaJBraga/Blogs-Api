const rescue = require('express-rescue');
const router = require('express').Router();
const categoryController = require('../controllers/category');

router.post('/', rescue(categoryController.validateCategory), rescue(categoryController.create));

router.get('/', rescue(categoryController.getAll));

module.exports = router;