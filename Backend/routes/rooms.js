const express = require('express');
const { getRooms, createRoom, updateRoom, deleteRoom } = require('../controllers/rooms');
const { SingleUpload } = require('../middleware/multer');
const router = express.Router();

router.get('/getRoom', getRooms);
router.post('/', SingleUpload, createRoom);
router.patch('/:id', updateRoom);
router.delete('/:id', deleteRoom);

module.exports = router;