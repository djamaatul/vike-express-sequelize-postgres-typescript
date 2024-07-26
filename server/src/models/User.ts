import { DataTypes } from "sequelize";
import { InferAttributes, InferCreationAttributes, Model } from "sequelize";
import database from "../configs/database.connection";

class Users extends Model<InferAttributes<Users>, InferCreationAttributes<Users>> {
	id?: number;
	name: string;
	username: string;
	password: string;
	createdAt?: Date;
	updatedAt?: Date;
}

Users.init({
	id: {
		primaryKey: true,
		autoIncrement: true,
		type: DataTypes.NUMBER
	},
	username: {
		type: DataTypes.STRING,
		unique: true
	},
	name: { type: DataTypes.STRING },
	password: DataTypes.STRING,
	createdAt: DataTypes.DATE,
	updatedAt: DataTypes.DATE,
}, { sequelize: database, freezeTableName: true, tableName: 'TM_USER' })

export type UsersTypes = InferAttributes<Users>

export default Users;