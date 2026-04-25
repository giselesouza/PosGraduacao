const express = require('express');
const router = express.Router();
const controller = require('../controllers/taskController');
const validateTask = require('../middlewares/validateTask');

router.get('/tasks', controller.findAll);
router.get('/tasks/overdue', controller.overdue);
router.get('/tasks/:id', controller.findById);
router.post('/tasks', validateTask, controller.create);
router.put('/tasks/:id', validateTask, controller.update);
router.delete('/tasks/:id', controller.remove);

module.exports = router;