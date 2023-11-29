import Joi from "joi";

const participantsSchema = Joi.object({
    name: Joi.string().required(),
    balance: Joi.number().greater(0).integer().required()
})

export default participantsSchema