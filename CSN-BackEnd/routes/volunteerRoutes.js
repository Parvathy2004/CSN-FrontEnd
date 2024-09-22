const express = require('express');
const { registerVolunteer, getVolunteerProfile } = require('../controllers/volunteerController');
const authMiddleware = require('../middleware/authMiddleWare');
const router = express.Router();

console.log("in routes");
// Register Volunteer
router.post('/registerVolunteer', registerVolunteer);

// Get Volunteer Profile (Protected)
router.get('/profile', authMiddleware, getVolunteerProfile);

module.exports = router;
