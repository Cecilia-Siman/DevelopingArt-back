import Joi from "joi";

const purchaseSchema = Joi.object({
  cardId: Joi.number().required(),
  price: Joi.number().required(),
  status: Joi.valid("producing", "shipping", "delivered").required(),
});

export default purchaseSchema;