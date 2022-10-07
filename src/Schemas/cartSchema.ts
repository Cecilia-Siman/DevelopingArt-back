import Joi from "joi";

const cartSchema = Joi.object({
  userId: Joi.number().required(),
  pieceId: Joi.number().required(),
  numberItems: Joi.number().required(),
  size: Joi.valid("small", "big").required(),
  type: Joi.valid("sticker", "print").required(),
});

export default cartSchema;
