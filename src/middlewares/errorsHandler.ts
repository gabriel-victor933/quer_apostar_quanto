import { Request, Response } from "express"

export function errorsHandler(err ,req: Request, res: Response){
    if(err?.type == "application" ) return res.status(err.code).send({message: err.message, description : err.description})
    return res.status(500).send("exception handler")
}