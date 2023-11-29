import Joi from "joi";

const betsSchema = Joi.object({
    homeTeamScore: Joi.number().min(0).integer().required(),
    awayTeamScore: Joi.number().min(0).integer().required(),
    amountBet: Joi.number().greater(0).integer().required(),
    gameId: Joi.number().integer().required(),
    participantId: Joi.number().integer().required()
})
export default betsSchema