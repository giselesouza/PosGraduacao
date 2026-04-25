const { Op } = require('sequelize');
const Task = require('../models/task');

exports.createTask = async (data) => {
  return await Task.create(data);
};

exports.getTasks = async (filters) => {
  const { status, keyword, limit = 10, offset = 0 } = filters;

  const where = {};

  if (status) where.status = status;

  if (keyword) {
    where.title = { [Op.iLike]: `%${keyword}%` };
  }

  return await Task.findAndCountAll({
    where,
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: [['createdAt', 'DESC']],
  });
};

exports.getTaskById = async (id) => {
  return await Task.findByPk(id);
};

exports.updateTask = async (id, data) => {
  const task = await Task.findByPk(id);
  if (!task) return null;

  return await task.update(data);
};

exports.deleteTask = async (id) => {
  const task = await Task.findByPk(id);
  if (!task) return null;

  await task.destroy();
  return true;
};

exports.getOverdueTasks = async () => {
  return await Task.findAll({
    where: {
      deadline: { [Op.lt]: new Date() },
      status: { [Op.ne]: 'done' },
    },
  });
};