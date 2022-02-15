const MongoDB = require('./MongoDB');

module.exports = {
  User: new MongoDB('users'),
  Task: new MongoDB('tasks'),
};
