import Joi from 'joi'

export const weatherGetRequestByCityStateJoiSchema = Joi.object({
  cityName: Joi.string().required(),
  stateName: Joi.string().required(),
})

export const weatherGetRequestGeoCoordsJoiSchema = Joi.object({
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
})
