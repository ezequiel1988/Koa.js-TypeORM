const HandleError = require('../../handleError/HandleError');
const { getManager } = require('typeorm');
const { User } = require("../../entity/User");


const FindUserByEmail = async email => {

const usersRepository = getManager().getRepository(User);

[err, user] = await HandleError(usersRepository.findOne({email:email}));
if(!user) throw new Error(`Error: Usuario no encontrado`);

return user;
}

module.exports = FindUserByEmail;