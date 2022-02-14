const MongoDB = require('./MongoDB');

module.exports = {
  todo: new MongoDB('tasks'),
};
