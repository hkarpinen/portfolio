import Joi from 'joi'

export const userPostRequestJoiSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().email().required(),
})

export const userGetRequestJoiSchema = Joi.object({
  username: Joi.string().optional(),
  password: Joi.string().optional(),
  email: Joi.string().optional(),
})
