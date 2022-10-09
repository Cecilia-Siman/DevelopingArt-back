import Joi from "joi";

const deletePieceSchema = Joi.object({
  id: Joi.number().required(),
});

export default deletePieceSchema;
