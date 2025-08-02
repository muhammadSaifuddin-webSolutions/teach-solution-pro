const express = require('express');
const { SingleUpload } = require('../middleware/multer');
const { createExpertStaff, updateExpertStaff, deleteStaff, getStaff } = require('../controllers/expertStaff');
const router = express.Router();


router.post('/', SingleUpload, createExpertStaff)
router.get('/getStaff', getStaff);
router.patch('/:id', updateExpertStaff);
router.delete('/:id', deleteStaff);

module.exports = router;