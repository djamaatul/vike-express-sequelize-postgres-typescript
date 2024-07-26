import { Code } from "../interface/response.interface";

export class ThrowResponse extends Error {
	code: number;
	constructor(message: any, code: Code = Code.InternalServerError) {
		super(message);
		this.message = message;
		this.code = code;
	}
}