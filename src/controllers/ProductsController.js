const JwtHelper = require('../helpers/jwtHelper');
const CreateProductService = require('../services/ProductsServices/CreateProduct');

module.exports = {

    createProduct: async ctx => {
        
        if (!ctx.request.body) ctx.throw(402, 'Falta al menos un producto');

        const user = ctx.request.jwtPayload.sub;

        const product = await CreateProductService(ctx.request.body, user);

        ctx.body= product;
    }
}