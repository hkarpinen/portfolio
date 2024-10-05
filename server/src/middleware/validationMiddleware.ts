import Joi from 'joi'
import { NextFunction, Request, Response } from 'express'

export type ExpressMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>

export function validateRequestBodyAgainstJoiSchema(
  joiSchema: Joi.Schema,
): ExpressMiddleware {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { error } = joiSchema.validate(req.body)
    error
      ? res
          .status(400)
          .send({ errors: error.details.map((error) => error.message) })
      : next()
  }
}

export function validateQueryParamsAgainstJoiSchema(
  joiSchema: Joi.Schema,
): ExpressMiddleware {
  return async (req, res, next) => {
    const { error } = joiSchema.validate(req.query)
    error
      ? res
          .status(400)
          .send({ errors: error.details.map((error) => error.message) })
      : next()
  }
}
