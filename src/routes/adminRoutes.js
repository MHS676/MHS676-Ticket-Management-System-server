const express = require('express');
const { addBus, updateBus, deleteBus } = require('../controllers/adminController'); // Correct path

const router = express.Router();

router.post('/bus', addBus); 
router.put('/bus/:id', updateBus); 
router.delete('/bus/:id', deleteBus); 

module.exports = router;
