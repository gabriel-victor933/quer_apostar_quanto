import {Request,Response,NextFunction} from "express"
import { ObjectSchema } from "joi"
export function validateSchemaMiddleware(schema: ObjectSchema){
    return (req: Request,res: Response,next: NextFunction) =>{
        const {error} = schema.validate(req.body,{abortEarly: false,convert: true})
        
        if(error){
            return res.status(400).send({message: "invalid body!",description: error.message})
        }
        next()
    }
}