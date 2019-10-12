import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import databaseConfig from './config/database';
import routerConfig from './config/routes';
import dotenv from 'dotenv'

const app = express();

// middlewares do express
app.use(cors({origin:['http://localhost:3000']}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('combined'));

//Demais configurações
routerConfig.config(app);
databaseConfig.config();
dotenv.config()
require('mongoose').Promise = global.Promise
