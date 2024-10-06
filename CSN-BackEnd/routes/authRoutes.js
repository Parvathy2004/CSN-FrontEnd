const express = require('express');
const { registerVolunteer, loginVolunteer, loginOrganization, loginUser, loginAdmin } = require('../controllers/authController');
const router = express.Router();

// Register Route
router.post('/registerVolunteer', registerVolunteer);

// Login Route
router.post('/loginVolunteer', loginVolunteer);

router.post('/loginOrganization', loginOrganization);

router.post('/loginUser', loginUser);

router.post('/loginAdmin', loginAdmin);

module.exports = router;
