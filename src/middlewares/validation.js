const { body, validationResult } = require('express-validator');

// Validation for user registration
const validateRegister = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];

// Validation for creating/updating tickets
const validateTicket = [
  body('busId').notEmpty().withMessage('Bus ID is required'),
  body('price').isFloat({ gt: 0 }).withMessage('Price must be greater than 0'),
  body('timeSlot').notEmpty().withMessage('Time slot is required'),
  body('availability').isInt({ min: 1 }).withMessage('Availability must be at least 1'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];

module.exports = { validateRegister, validateTicket };
