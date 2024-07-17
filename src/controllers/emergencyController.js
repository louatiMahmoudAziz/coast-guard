const Emergency = require('../models/emergencyModel');
const Patrol = require('../models/patrolModel');

exports.createEmergency = async (req, res) => {
  try {
    const emergency = new Emergency(req.body);
    await emergency.save();
    res.status(201).json(emergency);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.assignEmergency = async (req, res) => {
  try {
    const { emergencyId, patrolId } = req.body;
    const patrol = await Patrol.findById(patrolId);
    if (patrol.availability) {
      const emergency = await Emergency.findById(emergencyId);
      emergency.assignedPatrol = patrolId;
      emergency.status = 'In Progress';
      patrol.availability = false;
      patrol.currentEmergency = emergencyId;
      await emergency.save();
      await patrol.save();
      res.status(200).json({ message: 'Emergency assigned to patrol', emergency });
    } else {
      res.status(400).json({ message: 'Patrol is not available' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllEmergencies = async (req, res) => {
  try {
    const emergencies = await Emergency.find();
    res.status(200).json(emergencies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEmergencyById = async (req, res) => {
  try {
    const emergency = await Emergency.findById(req.params.id);
    if (!emergency) {
      return res.status(404).json({ message: 'Emergency not found' });
    }
    res.status(200).json(emergency);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
