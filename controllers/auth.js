const mongodb = require('mongodb');
const passport = require('passport');
const Reservation = require('../models/reservation');
const User = require('../models/user');

exports.getSignup = (req,res) =>{
    res.render('auth/signup');
    
};
exports.postSignup = (req,res) =>{
    var newUser = new User({username: req.body.username});
    User.register(newUser,req.body.password,function(err,user){
        if(err){
            console.log(err);
            return res.render("auth/signup");
        }
        passport.authenticate("local")(req,res,function(){
            res.redirect("/");
        })
    })
    
};
exports.getLogin = (req,res) =>{
    res.render('auth/login');
    
};
exports.postLogin = (req,res) =>{
    console.log("logged in");
};
exports.getLogout = (req,res) =>{
    req.logout();
    res.redirect('/login');
};