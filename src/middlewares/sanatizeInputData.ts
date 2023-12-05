import { NextFunction, Request, Response } from 'express';
import sanitizeHtml from 'sanitize-html'

export function sanatizeInputData(type: "body" | "params" | "query"){
    return (req: Request, res: Response, Next: NextFunction) => {

        const keys = Object.keys(req[type])
        for(const key of keys){
            if(typeof( req[type][key]) == "string"){
                req[type][key] = sanitizeHtml(req[type][key])
            }
            
            if(!req[type][key]) return res.status(400).send({message: "invalid body!",description: `Argument ${key} cannot be empty!`})            
        }

        console.log("teste")
        return Next()

    }

}
