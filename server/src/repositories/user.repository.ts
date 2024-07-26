import { InferAttributes, Op } from 'sequelize';
import { Pagination } from '../interface/pagination.interface';
import User from "../models/User";

export default class UserRepository {
	static repository = User;
	static async getUsers({ limit = 5, offset = 0, username = '' }: Partial<Pagination> & { username?: string }) {
		return this.repository.findAll({
			where: {
				username: {
					[Op.like]: username
				}
			},
			limit,
			offset
		})
	}
	static async getUser({ username }: { username?: string | string[] }) {
		return this.repository.findOne({
			where: {
				username
			},
		})
	}
	static async saveUser(user: InferAttributes<User>) {
		return this.repository.create(user);
	}
}