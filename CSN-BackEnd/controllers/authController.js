const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Volunteer = require('../models/Volunteer');

require('dotenv').config();

// Register Volunteer
exports.registerVolunteer = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    let volunteer = await Volunteer.findOne({ email });
    if (volunteer) {
      return res.status(400).json({ msg: 'Volunteer already exists' });
    }

    volunteer = new Volunteer({ name, email, password, role });

    await volunteer.save();

    const payload = {
      volunteer: { id: volunteer.id }
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

// Login User
exports.loginVolunteer = async (req, res) => {
  const { email, password } = req.body;
  try {
    let volunteer = await Volunteer.findOne({email});
    if (!volunteer) {
      return res.status(400).json({ msg: 'Invalid email' });
    }
    const isMatch = await bcrypt.compare(password, volunteer.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid password' });
    }

    const payload = {
      volunteer: { id: volunteer.id }
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
