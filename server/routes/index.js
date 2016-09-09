'use strict';

const express = require('express');
const taskRoutes = require('./tasks');
const userRoutes = require('./users');

const router = express.Router(); // eslint-disable-line new-cap

const errorHandler = (err, req, res, next) => {
  console.error('request err', err);
  res.send({ message: 'error with request' });
};

router.use('/tasks', taskRoutes, errorHandler);
router.use('/users', userRoutes, errorHandler);

module.exports = router;
