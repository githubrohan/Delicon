var express = require('express');
var router = express.Router();
var authController = require('../controllers/auth');

router.get('/signup',authController.getSignup);
router.post('/signup',authController.postSignup);


module.exports = router;