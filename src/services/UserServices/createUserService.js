const HandleError = require('../../handleError/HandleError');
const { getManager } = require('typeorm');
const { User } = require("../../entity/User");

const CreateUserService = async (email, hashPassword) => {

    let err, createdUser;
    const usersRepository = getManager().getRepository(User);

    const newUser = usersRepository.create({email:email, password:hashPassword});

    [err, createdUser] = await HandleError(usersRepository.save(newUser));
    if(!createdUser) throw new Error(500, `Error:${err}`);

    return createdUser
}

module.exports = CreateUserService;