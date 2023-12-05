import Joi from "joi";

const getGamesQuerySchema = Joi.object({
    finished: Joi.boolean(),
})

export default getGamesQuerySchema