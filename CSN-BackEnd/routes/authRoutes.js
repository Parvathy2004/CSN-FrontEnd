const express = require('express');
const { registerVolunteer, loginVolunteer } = require('../controllers/authController');
const router = express.Router();

// Register Route
router.post('/registerVolunteer', registerVolunteer);

// Login Route
router.post('/loginVolunteer', loginVolunteer);

module.exports = router;
