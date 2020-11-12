const mongodb = require('mongodb');
const Reservation = require('../models/reservation');

exports.getReservations = (req,res) =>{
    Reservation.find()
    .then(reservations=>{
        res.render('index',{reservations:reservations});
    })
    
};

exports.getNewReservation = (req,res) =>{
    res.render('reservation/reservation');
};

exports.postNewReservation = (req,res) =>{
    var name = req.body.name;
    var contact = req.body.contact;
    var table = req.body.table;
    var reservation = new Reservation({name,contact,table});
    reservation.save()
    .then(result=>{
        console.log("reservation done");
        res.redirect('/reservations');
    })
    .catch(err=>console.log(err));
   
}