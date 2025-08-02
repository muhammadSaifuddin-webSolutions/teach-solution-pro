const express = require('express');
const { createBooking, getBooking, updateBooking, deleteBooking } = require('../controllers/booking');
const router = express.Router();

router.get('/getBooking', getBooking);
router.post('/', createBooking);
router.patch('/:id', updateBooking);
router.delete('/:id', deleteBooking);

module.exports = router;