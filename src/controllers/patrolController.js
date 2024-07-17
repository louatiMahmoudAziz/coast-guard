const Patrol = require('../models/patrolModel');

exports.createPatrol = async (req, res) => {
  try {
    const patrol = new Patrol(req.body);
    await patrol.save();
    res.status(201).json(patrol);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllPatrols = async (req, res) => {
  try {
    const patrols = await Patrol.find();
    res.status(200).json(patrols);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPatrolById = async (req, res) => {
  try {
    const patrol = await Patrol.findById(req.params.id);
    if (!patrol) {
      return res.status(404).json({ message: 'Patrol not found' });
    }
    res.status(200).json(patrol);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePatrol = async (req, res) => {
  try {
    const patrol = await Patrol.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!patrol) {
      return res.status(404).json({ message: 'Patrol not found' });
    }
    res.status(200).json(patrol);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deletePatrol = async (req, res) => {
  try {
    const patrol = await Patrol.findByIdAndDelete(req.params.id);
    if (!patrol) {
      return res.status(404).json({ message: 'Patrol not found' });
    }
    res.status(200).json({ message: 'Patrol deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
