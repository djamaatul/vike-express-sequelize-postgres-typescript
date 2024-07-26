import { Sequelize, Dialect } from "sequelize";
import connection from './database.config';

const database = new Sequelize({
	...connection.development,
	dialect: connection.development.dialect as Dialect,
	port: +(process.env.DB_PORT ?? 5432),
	logging: false
})

database.validate().then(async () => {
	console.log('DATABASE CONNECTED')
});

export default database;