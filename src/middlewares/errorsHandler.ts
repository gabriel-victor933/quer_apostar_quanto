import { ApplicationErrors } from "@/utils/types"
import { NextFunction, Request, Response } from "express"

export async function errorsHandler(err: ApplicationErrors ,req: Request, res: Response, next: NextFunction){
    if(err?.type == "application" ) return res.status(err.code).send({message: err.message, description : err.description})
    next(err)
}