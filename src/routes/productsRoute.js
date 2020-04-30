const authenticated = require('../helpers/auth');
const { createProduct } = require('../controllers/ProductsController');
const Router = require('@koa/router');
const productRouter = new Router({ prefix: '/products' });

//productRouter.get('/', authenticated, );
productRouter.post('/', authenticated, createProduct);


module.exports = productRouter;