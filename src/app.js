const express = require('express');
const app = express();
const routes = require('./routes/taskRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(express.json());
app.use(routes);
app.use(errorMiddleware);

module.exports = app;