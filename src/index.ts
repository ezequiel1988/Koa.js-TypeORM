import "reflect-metadata";
import { createConnection } from "typeorm";
const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors');
const bodyparser = require('koa-bodyparser');
const Router = require('@koa/router');
const router = new Router();
const indexRouter = require('./routes/index.js');




export const ServerUp = () => {
    createConnection().then(() => {       

        app
            .use(cors())
            .use(bodyparser())
            .use(indexRouter.routes())
            .use(router.allowedMethods())

            
        app.listen(4000, ()=> console.log('Servidor en puerto: 4000'));

 
            
        console.log('Conectado a postgresql')

    }).catch(error => console.log(error));
}