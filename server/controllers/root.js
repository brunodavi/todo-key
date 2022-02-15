const express = require('express');

const cruder = require('./cruder');

const root = express.Router({ mergeParams: true });

root.use('/user', cruder('User'));
root.use('/task', cruder('Task'));

module.exports = root;
