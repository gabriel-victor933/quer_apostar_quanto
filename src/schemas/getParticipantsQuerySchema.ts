import Joi from "joi"

const getParticipantQuerySchema = Joi.object({
    page: Joi.number().integer().greater(0)
})

export default getParticipantQuerySchema