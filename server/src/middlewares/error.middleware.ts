import { ErrorRequestHandler } from "express"

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	res.status(err.code ?? 500).json({
		message: err.message
	})
}

export default errorHandler