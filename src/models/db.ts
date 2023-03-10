import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { User } from './user.model';
import { Role } from './role.model';
import { Token } from './token.model';

const options: SequelizeOptions = {
  database: process.env.DB_NAME as string,
  username: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  models: [User, Role, Token],
  repositoryMode: true,
};

export const dbConfig = new Sequelize(options);
