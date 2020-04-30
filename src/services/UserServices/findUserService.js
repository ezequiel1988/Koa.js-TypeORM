const HandleError = require('../../handleError/HandleError');
const { getManager } = require('typeorm');
const { User } = require("../../entity/User");

const FindUserService = async userId => {

    let err, user;
    const usersRepository = getManager().getRepository(User);

    [err, user] = await HandleError(usersRepository.findOne({id:userId, relations:['task', 'products']}));
    if(!user) throw new Error(500, `Error:${err}`);

    return user
}

module.exports = FindUserService;