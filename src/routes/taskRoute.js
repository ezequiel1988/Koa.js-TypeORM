const authenticated = require('../helpers/auth');
const { getTask, createTask } = require('../controllers/TaskController');
const Router = require('@koa/router');
const taskRouter = new Router({ prefix: '/tasks' });

taskRouter.get('/', authenticated, getTask);
taskRouter.post('/', authenticated, createTask);


module.exports = taskRouter;