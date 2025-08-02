const express = require('express');
const { createRoomType, getRoomType, updateRoomType, deleteRoomType } = require('../controllers/roomType');
const router = express.Router();


router.post('/', createRoomType);
router.get('/getRoomType', getRoomType);
router.patch('/:id', updateRoomType);
router.delete('/:id', deleteRoomType);

module.exports = router;