import { z } from "zod";

export const getJobs = z.object({
	search: z.string().optional(),
	description: z.string().optional(),
	location: z.string().optional(),
	full_time: z.string().refine((value) => ['true', 'false'].includes(value), "must be true or false").optional(),
	page: z.string().refine(value => /^\d+$/.test(value), 'must be number').optional(),
	record: z.string().refine(value => /^\d+$/.test(value), 'must be number').optional()
})

export const getJobDetail = z.object({
	id: z.string()
})

export type GetJobs = z.infer<typeof getJobs>;
export type GetJobDetail = z.infer<typeof getJobDetail>;