const rescue = require('express-rescue');
const router = require('express').Router();
const userController = require('../controllers/user');

router.post('/login', rescue(userController.validateUser), rescue(userController.login));

module.exports = router;