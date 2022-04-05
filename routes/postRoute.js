const rescue = require('express-rescue');
const router = require('express').Router();
const postController = require('../controllers/post');

router.post('/', rescue(postController.validatePost), rescue(postController.create));

router.get('/', rescue(postController.getAll));

module.exports = router;