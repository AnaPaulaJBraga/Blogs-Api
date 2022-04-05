const rescue = require('express-rescue');
const router = require('express').Router();
const userController = require('../controllers/user');

router.post('/', rescue(userController.validateUser), rescue(userController.create));

router.get('/', rescue(userController.getUsers));

router.get('/:id', rescue(userController.getById));

module.exports = router;