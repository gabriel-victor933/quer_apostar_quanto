import Joi from "joi";

const participantsSchema = Joi.object({
    name: Joi.string().required(),
    balance: Joi.number().greater(1000).integer().required()
})

export default participantsSchema