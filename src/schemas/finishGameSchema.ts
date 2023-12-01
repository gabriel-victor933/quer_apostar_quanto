import { finishGameDto } from "@/utils/types"
import Joi from "joi"

const finishGameSchema = Joi.object<finishGameDto>({
    awayTeamScore: Joi.number().min(0).integer().required(),
    homeTeamScore: Joi.number().min(0).integer().required()

})

export default finishGameSchema