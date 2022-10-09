import Joi from "joi";

const newPieceSchema = Joi.object({
    image: Joi.string().required(),
    title: Joi.string().max(50).required()
})

export default newPieceSchema;