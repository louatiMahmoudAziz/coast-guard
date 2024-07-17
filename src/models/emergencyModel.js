const mongoose = require('mongoose');

const emergencySchema = new mongoose.Schema({
  longitude: Number,
  latitude: Number,
  type: String,
  taille: String,
  age: String,
  niveau: Number,
  nbrpersonne: String,
  depart: String,
  nomprenom: String,
  distance: Number,
  status: String,
  tel: Number,
  communication: String,
  police: String,
  cloture: String,
  other: String,
  assignedPatrol: { type: mongoose.Schema.Types.ObjectId, ref: 'Patrol' }
}, { timestamps: true });

module.exports = mongoose.model('Emergency', emergencySchema);
