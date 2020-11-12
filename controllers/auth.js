const mongodb = require('mongodb');
const Reservation = require('../models/reservation');
const User = require('../models/user');

exports.getSignup = (req,res) =>{
    res.render('auth/signup');
    
};
exports.postSignup = (req,res) =>{
    res.render('auth/signup');
    
};