import Joi from "joi";

const getGamesQuerySchema = Joi.object({
    finished: Joi.boolean(),
    page: Joi.number().integer().greater(0)
})

export default getGamesQuerySchema