const authenticated = require('../helpers/auth');
const { getUsers, createUsers, login } = require('../controllers/UserController');
const Router = require('@koa/router');
const userRouter = new Router({ prefix: '/user' });

userRouter.get('/', authenticated, getUsers);
userRouter.post('/', createUsers);
userRouter.get('/login', login)

module.exports = userRouter;