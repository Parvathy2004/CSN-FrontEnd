const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Volunteer = require('../models/Volunteer');
const Organization = require('../models/Organization');

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

exports.loginOrganization = async (req, res) => {
  const { email, password } = req.body;
  try {
    let organization = await Organization.findOne({email});
    if (!organization) {
      return res.status(400).json({ msg: 'Invalid email' });
    }
    const isMatch = await bcrypt.compare(password, organization.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid password' });
    }

    const payload = {
      organization: { id: organization.id }
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

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({email});
    if (!user) {
      return res.status(400).json({ msg: 'Invalid email' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid password' });
    }

    const payload = {
      user: { id: user.id}
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


// Login Admin
exports.loginAdmin = async (req, res) => {
  const { email } = req.body;
  const fixedAdminId = 'your_fixed_admin_id_here'; // Define your fixed admin ID here

  try {
    // You can perform additional checks if necessary, e.g., validate the email format

    // If the email is valid, return the fixed admin ID
    const payload = {
      admin: { id: fixedAdminId },
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
