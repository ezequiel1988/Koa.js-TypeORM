const HandleError = require('../../handleError/HandleError');
const { getManager } = require('typeorm');
const { Products } = require("../../entity/Products");

const CreateProductService = async (body, user) => {

    let err, createdProduct;
    let {category, price, stock, name  } = body

    const usersRepository = getManager().getRepository(Products);

    const newProduct = usersRepository.create({category, price, stock, name, user});

    [err, createdProduct] = await HandleError(usersRepository.save(newProduct));
    if(!createdProduct) throw new Error(`Error:${err}`);
    console.log(createdProduct)

    return createdProduct
}

module.exports = CreateProductService;