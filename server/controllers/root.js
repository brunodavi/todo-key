const Router = require('./Router');

module.exports = {
  user: Router('user', 'User'),
  task: Router('task', 'Task'),
};
