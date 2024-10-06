const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  // You can add more fields as needed
});

module.exports = mongoose.model('Admin', AdminSchema);
