const JwtHelper = require('../helpers/jwtHelper');
const FindUserByEmail = require('../services/UserServices/findUserByEmail');
const CreatedUserService = require('../services/UserServices/createUserService');
const FindUserService = require('../services/UserServices/findUserService');




module.exports = {
    
    getUsers: async ctx => {

        console.log(`Usuario: ${ctx.request.jwtPayload.sub.id}`);

        const userId = ctx.request.jwtPayload.sub.id

        const userFoundById = await FindUserService(userId) 

        ctx.body = userFoundById;

    },

    createUsers: async ctx => {

        let { email, password } = ctx.request.body;

        if (!email) ctx.throw(422, 'Email required.');
        if (!password) ctx.throw(422, 'Password required.');


        const hashPassword = JwtHelper.hashPassword(password);

        const createdUser = await CreatedUserService(email, hashPassword)
   

        ctx.body = {createdUser};

    },

    login: async ctx => {
        
        let { email, password } = ctx.query;

        if (!email) ctx.throw(422, 'Email required.');
        if (!password) ctx.throw(422, 'Password required.');

        const usersByEmail = await FindUserByEmail(email);
        

        if(!JwtHelper.comparePassword(usersByEmail.password, password)) ctx.throw(400, `Error: password no encontrado`);
        

        const token = JwtHelper.generateToken(usersByEmail);

        ctx.body = {token:token};

    }
}