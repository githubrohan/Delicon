var express = require('express');
var router = express.Router();
var reservationController = require('../controllers/reservation');
const isAuth = require('../middleware/is-auth');

router.get('/',isAuth,reservationController.getReservations);
router.get('/new-reservation',isAuth,reservationController.getNewReservation);
router.post('/new-reservation',isAuth,reservationController.postNewReservation);
router.get('/edit-reservation/:reservationId',reservationController.getEditReservation);
router.post('/edit-reservation',reservationController.postEditReservation);
router.post('/delete-reservation',reservationController.postDeleteReservation);

module.exports = router;