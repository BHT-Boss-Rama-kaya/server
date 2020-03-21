import { Sequelize } from 'sequelize';

export const database = new Sequelize({
    database: process.env.MYSQL_DATABASE,
    dialect: 'mysql',
    storage: ':memory:',
    host: '127.0.0.1',
    username: 'root',
    password: process.env.MYSQL_PASSWORD
});
