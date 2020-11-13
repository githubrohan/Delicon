const mongodb = require('mongodb');
const reservation = require('../models/reservation');
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
    var feedback=req.body.feedback;
    var reservation = new Reservation({name,contact,table,feedback});
    reservation.save()
    .then(result=>{
        console.log("reservation done");
        res.redirect('/');
    })
    .catch(err=>console.log(err));
   
};

exports.getEditReservation = (req,res) =>{
    var reservationId = req.params.reservationId;
    Reservation.findById(reservationId)
        .then(reservation => {
            if (!reservation) {
                res.redirect('/');
            }
            res.render('reservation/edit', {reservation:reservation});
        })
        .catch(err => console.log(err));
};
exports.postEditReservation = (req,res) =>{
    var updatedName = req.body.name;
    var updatedContact = req.body.contact;
    var updatedTable = req.body.table;
    var updatedFeedback = req.body.feedback;
    var reservationId = req.body.reservationId;
    
    Reservation.findById(reservationId)
        .then(reservation => {
            reservation.name=updatedName;
            reservation.contact=updatedContact;
            reservation.table=updatedTable;
            if(updatedFeedback)
            {
                reservation.feedback=updatedFeedback;
            }
            return reservation.save()
                .then(result => {
                    res.redirect('/')
                });
        })
        .catch(err => console.log(err));
};

exports.postDeleteReservation = (req, res) => {
    const reservationId = req.body.reservationId;
    Reservation.findById(reservationId)
        .then(reservation => {
            if (!reservation) {
                return next();
            }
            return Reservation.deleteOne({ _id: reservationId});
        })
        .then(() => {
            res.redirect('/');
        })
        .catch(err => console.log(err))
}