const Router = require('@koa/router');
const userRouter = require('./userRoute');
const taskRouter = require('./taskRoute');
const productsRouter = require('./productsRoute')
const indexRouter = new Router({ prefix: '/api/v1' });

const nestedRoutes = [userRouter, taskRouter, productsRouter];


for (var router of nestedRoutes) {
    indexRouter.use(router.routes(), router.allowedMethods())
}

module.exports= indexRouter;