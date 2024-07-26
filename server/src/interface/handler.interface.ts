import { NextFunction, Request, Response } from "express";
import Users, { UsersTypes } from "../models/User";

export type Handler = (req: Request & { user?: UsersTypes}, res: Response, next: NextFunction) => Promise<any>