const express = require('express');
const router = express.Router();
const patrolController = require('../controllers/patrolController');

router.post('/patrols', patrolController.createPatrol);
router.get('/patrols', patrolController.getAllPatrols);
router.get('/patrols/:id', patrolController.getPatrolById);
router.put('/patrols/:id', patrolController.updatePatrol);
router.delete('/patrols/:id', patrolController.deletePatrol);

module.exports = router;
