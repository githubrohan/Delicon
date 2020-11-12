var express = require('express');
var router = express.Router();
var reservationController = require('../controllers/reservation');

router.get('/reservations',reservationController.getReservations);
router.get('/new-reservation',reservationController.getNewReservation);
router.post('/new-reservation',reservationController.postNewReservation);
// router.get('/edit-reservation/:reservationId',reservationController.getEditReservation);
// router.post('/edit-reservation',reservationController.postEditReservation);
// router.delete('/delete-reservation',reservationController.deleteReservation);

module.exports = router;