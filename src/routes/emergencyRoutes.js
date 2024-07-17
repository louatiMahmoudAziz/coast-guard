const express = require('express');
const router = express.Router();
const emergencyController = require('../controllers/emergencyController');

// Create emergency
router.post('/emergencies', emergencyController.createEmergency);

// Assign emergency to patrol
router.post('/assign-emergency', emergencyController.assignEmergency);

// Get all emergencies
router.get('/emergencies', emergencyController.getAllEmergencies);

// Get emergency by ID
router.get('/emergencies/:id', emergencyController.getEmergencyById);

module.exports = router;
