import "dotenv/config"
import "./configs/database.connection";
import express from 'express';
import http from 'http';
import cors from 'cors';
import Session from 'cookie-session';

import { router } from "./modules";
import errorHandler from "./middlewares/error.middleware";
import { Code, Message } from "./interface/response.interface";

const app = express();
const server = http.createServer(app);

const port = process.env.PORT;

app.use(express.json());
app.use(cors({
	origin: [
		'http://localhost:3000'
	],
	credentials: true,
}))
app.use(Session({
	path: '/',
	name: '_',
	secret: process.env.SECRET_KEY,
	secure: false,
	sameSite: true,
	httpOnly: true,
	maxAge: 8 * 60 * 60 * 1000,
}))
app.use('/api', router);
app.use((_, res) => {
	res.status(Code.NotFound).json({
		message: Message.RouteNotFound
	})
})
app.use(errorHandler);

server.listen(port, () => {
	console.log(`server running on port ${port}`)
})

export default server;