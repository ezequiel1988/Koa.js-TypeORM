const HandleError = require('../handleError/HandleError');
const { getManager } = require('typeorm');
const { Task } = require("../entity/Task");
const { User } = require("../entity/User");


module.exports = {

    getTask: async ctx => {

        let err, task;
        const usersRepository = getManager().getRepository(Task);

        [err, task] = await HandleError(usersRepository.find(Task));
        if(!task) ctx.throw(500, `Error:${err}`);

        ctx.body = task;

    },

    createTask: async ctx => {

        let err, createdTask;
        let { id } = ctx.params;
        let { task } = ctx.request.body

        const tasksTable = getManager().getRepository(Task);
        const userTable = getManager().getRepository(User);


        let getuser = await userTable.findOne(id);

        const newTask = tasksTable.create({task:task, user:getuser});


        [err, createdTask] = await HandleError(tasksTable.save(newTask));
        if(!createdTask) ctx.throw(500, `Error:${err}`);

        ctx.body = createdTask;
    }

}