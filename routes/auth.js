var express = require('express');
const passport = require('passport');
var router = express.Router();
var authController = require('../controllers/auth');

router.get('/signup',authController.getSignup);
router.post('/signup',authController.postSignup);
router.get('/login',authController.getLogin);
router.post('/login',passport.authenticate("local",
{
    successRedirect:"/",
    failureRedirect:"/login"
}),authController.postLogin);
router.get('/logout',authController.getLogout);


module.exports = router;