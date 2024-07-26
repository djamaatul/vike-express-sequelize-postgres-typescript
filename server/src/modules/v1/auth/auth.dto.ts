import { z } from "zod";

export const register = z.object({
	username: z.string(),
	name: z.string(),
	password: z.string(),
})

export const login = z.object({
	username: z.string(),
	password: z.string(),
})

export type Register = z.infer<typeof register>;
export type Login = z.infer<typeof login>;