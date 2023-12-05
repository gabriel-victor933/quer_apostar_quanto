import {Request,Response,NextFunction} from "express"
import { ObjectSchema } from "joi"
export function validateSchemaMiddleware(schema: ObjectSchema, ValidationObject: string){
    switch(ValidationObject){
        case "body": return validateBody(schema); break;
        case "params": return validateParams(schema); break;
        case "query": return validateQuery(schema); break;
        default: return (req: Request,res: Response) => res.sendStatus(500);
    }
}

function validateBody(schema: ObjectSchema){
    return (req: Request,res: Response,next: NextFunction) => {
        const {error} = schema.validate(req.body,{abortEarly: false,convert: true})
        
        if(error){
            return res.status(400).send({message: "invalid body!",description: error.message})
        }
        next()
}
}

function validateParams(schema: ObjectSchema){
    return (req: Request,res: Response,next: NextFunction) => {
        const {error} = schema.validate(req.params,{abortEarly: false,convert: true})
        
        if(error){
            return res.status(400).send({message: "invalid URL",description: error.message})
        }
        if(req.params.id){
            req["id"] = parseInt(req.params.id)
        }
    
        next()
}
}

function validateQuery(schema: ObjectSchema){
    return (req: Request,res: Response,next: NextFunction) => {
        const {error} = schema.validate(req.query,{abortEarly: false,convert: true})
        
        if(error){
            return res.status(400).send({message: "invalid URL",description: error.message})
        }
        next()
}
}