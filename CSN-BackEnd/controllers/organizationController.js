const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

// Register Organization
exports.registerOrganization = async (req, res) => {
  const { name, email, password, role = 'organization' } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'Organization already exists' });
    }

    user = new User({ name, email, password, role });

    await user.save();

    const payload = {
      user: { id: user.id, role: user.role }
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get Organization Profile
exports.getOrganizationProfile = async (req, res) => {
  try {
    const organization = await User.findById(req.user.id).select('-password');
    res.json(organization);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
