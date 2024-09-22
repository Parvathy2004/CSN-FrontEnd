const mongoose = require('mongoose');

const OrganisationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  adminUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model (the admin user)
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Organisation', OrganisationSchema);
