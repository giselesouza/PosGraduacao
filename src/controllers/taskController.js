const taskService = require('../services/taskService');

exports.create = async (req, res, next) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const tasks = await taskService.getTasks(req.query);
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

exports.findById = async (req, res, next) => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });

    res.json(task);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const task = await taskService.updateTask(req.params.id, req.body);
    if (!task) return res.status(404).json({ error: 'Task not found' });

    res.json(task);
  } catch (error) {
    next(error);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const result = await taskService.deleteTask(req.params.id);
    if (!result) return res.status(404).json({ error: 'Task not found' });

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

exports.overdue = async (req, res, next) => {
  try {
    const tasks = await taskService.getOverdueTasks();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};