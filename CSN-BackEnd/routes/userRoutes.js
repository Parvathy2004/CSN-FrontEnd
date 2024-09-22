const express = require('express');
const authMiddleware = require('../middleware/authMiddleWare');
const router = express.Router();

// Example protected route
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ msg: 'Welcome to the user profile', user: req.user });
});

module.exports = router;
