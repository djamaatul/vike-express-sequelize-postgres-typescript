import { Router } from "express";
import authModule from "./auth/auth.controller";
import authorization from "../../middlewares/authorization.middleware";
import jobsModule from "./job/job.controller";

export const v1 = Router()

v1.use('/auth', authModule)
v1.use('/jobs', authorization, jobsModule)