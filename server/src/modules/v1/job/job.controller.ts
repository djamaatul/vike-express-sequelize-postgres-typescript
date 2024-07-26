import { Code, Message } from "../../../interface/response.interface";
import UserRepository from "../../../repositories/user.repository";
import { ThrowResponse } from "../../../utils/error.util";
import * as dto from "./job.dto";
import { Router } from 'express';
import handler from '../../../utils/handler.util';
import validation from '../../../middlewares/validation.middleware';
import { DANS } from "../../../configs/apis";

const jobsModule = Router();

jobsModule.get('/', validation({ query: dto.getJobs }), handler(async (req) => {
	const { page = '1', record = '5', full_time = "false", search, ...body }: dto.GetJobs = req.query;

	const response = await DANS('/api/recruitment/positions.json', { query: { page, record, ...body } })

	if (!Array.isArray(response)) return {
		message: 'Data Tidak ditemukan',
		code: Code.NotFound
	}

	const data = response.flatMap((e) => {
		if (!e) return [] //filter null
		if (search) {
			if (!`${e.description} ${e.location} ${e.type}`.toLowerCase().includes(search.toLowerCase())) return []
		}
		return e
	})

	return {
		data
	}
}))

jobsModule.get('/:id', validation({ params: dto.getJobDetail }), handler(async (req) => {
	const { id } = req.params;

	const response = await DANS(`/api/recruitment/positions/${id}`)

	if (!response.id) return {
		message: 'Data Tidak ditemukan',
		code: Code.NotFound
	}

	return {
		data: response
	}
}))

export default jobsModule;