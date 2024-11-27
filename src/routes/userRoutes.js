// const express = require('express');
// const { isAuthenticated } = require('../middlewares/authMiddleware');
// const { getTickets, purchaseTicket } = require('../controllers/ticketController');

// const router = express.Router();

// // User: View available tickets
// router.get('/tickets', isAuthenticated, getTickets);

// // User: Purchase a ticket
// router.post('/tickets/purchase', isAuthenticated, purchaseTicket);

// module.exports = router;
const express = require('express');
const { getUsers, getUserById } = require('../controllers/userController'); // Ensure correct import paths
const router = express.Router();

router.get('/', getUsers); // Ensure 'getUsers' is defined and imported
router.get('/:id', getUserById); // Ensure 'getUserById' is defined and imported

module.exports = router;
