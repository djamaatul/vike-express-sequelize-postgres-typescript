import jwt from 'jsonwebtoken';
import { Code, Message } from "../interface/response.interface"
import handler from "../utils/handler.util"
import { ThrowResponse } from "../utils/error.util";
import UserRepository from "../repositories/user.repository";
import bcrypt from 'bcrypt';
import safe from "../utils/safe.util";

const authorization = handler(async (req) => {
	const session = req.session;

	if (session?.token) { //if using cookie
		const [error, data] = await safe(() => jwt.verify(session.token, `${process.env.SECRET_KEY}`));
		if (error) throw new ThrowResponse(Message.NoSession, Code.Unauthorized)
			
		req.user = data;
		return
	}

	const b64auth = (req.headers.authorization ?? '').split(/\s/)[1] || ''
	const [username, password] = Buffer.from(b64auth, 'base64').toString().split(':')

	if (!username || !password) throw new ThrowResponse(Message.NoSession, Code.Unauthorized);

	const exist = await UserRepository.getUser({ username });

	if (!exist) throw new ThrowResponse(Message.NoSession, Code.Forbidden)

	const valid = await bcrypt.compare(password, exist?.password ?? '?');

	if (!valid) throw new ThrowResponse(Message.NoSession, Code.Forbidden)

	req.user = exist;

	return
})

export default authorization