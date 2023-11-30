import Joi from "joi"

export const idParamSchema = Joi.object({
    id: Joi.number().greater(0).required()
})