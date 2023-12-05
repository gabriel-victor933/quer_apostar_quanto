import Joi from "joi";

const getGamesQuerySchema = Joi.object({
    finished: Joi.boolean(),
    page: Joi.number().integer().greater(0),
    homeTeamName: Joi.string().pattern(/^[a-zA-Z]+$/),
    awayTeamName: Joi.string().pattern(/^[a-zA-Z]+$/)
})

export default getGamesQuerySchema