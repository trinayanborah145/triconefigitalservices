const express = require('express');
const { submitContactForm, getContacts } = require('../controllers/contactController');

const router = express.Router();

// Public routes
router.post('/', submitContactForm);

// Protected routes (in a real app, you would add authentication middleware here)
// router.use(requireAuth);
router.get('/', getContacts);

module.exports = router;
