import { Handler } from "express";
import { Schema } from "zod";
import { ThrowResponse } from "../utils/error.util";
import { Code } from "../interface/response.interface";

type Key = 'body' | 'params' | 'query'

export default function validation(schemas: Partial<Record<Key, Schema>>): Handler {
	return async (req, res, next) => {
		try {
			for await (let e of Object.entries(schemas)) {
				const [key, schema]: [string, Schema] = e;
				const from = {
					body: req.body,
					params: req.params,
					query: req.query
				}[key]
				const validate = await schema.safeParseAsync(from);
				if (!validate.success) {
					const message = validate.error.errors.map(e => `${e.path.join(',')} ${e.message}`).join(',')
					throw new ThrowResponse(`${message}`, Code.BadRequest)
				};
			}
			next();
		} catch (error) {
			next(error)
		}
	}
}