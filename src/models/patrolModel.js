const mongoose = require('mongoose');

const patrolSchema = new mongoose.Schema({
  name: String,
  availability: { type: Boolean, default: true },
  currentEmergency: { type: mongoose.Schema.Types.ObjectId, ref: 'Emergency' }
});

module.exports = mongoose.model('Patrol', patrolSchema);
