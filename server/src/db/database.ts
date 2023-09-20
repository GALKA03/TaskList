import { Sequelize }  from 'sequelize-typescript';
import * as dotenv from 'dotenv';
import User from '../models/userModel';
import TasksModel from '../models/tasksModel';
// Import the model

dotenv.config();

const sequelize = new Sequelize({
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    dialect: 'postgres',
    models: [User, TasksModel],  // Add all your models here
    logging: console.log,  // Logs SQL queries. Remove or set to false if you don't want to see logs.
});

export default sequelize;


