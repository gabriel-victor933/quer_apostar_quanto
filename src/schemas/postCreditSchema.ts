import Joi from "joi"

const postCreditSchema = Joi.object({
    credit: Joi.number().integer().min(1000).required()
})

export default postCreditSchema