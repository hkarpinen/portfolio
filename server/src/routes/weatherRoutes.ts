import RouterBuilder from './RouterBuilder'
import { WeatherController } from '../controllers/weatherController'
import { container } from '../di-container'
import { validateQueryParamsAgainstJoiSchema } from '../middleware/validationMiddleware'
import {
  weatherGetRequestByCityStateJoiSchema,
  weatherGetRequestGeoCoordsJoiSchema,
} from '../validators/weatherValidators'

const weatherController = container.get(WeatherController)

const router = new RouterBuilder()
  .addGetRoute({
    path: '/weather/city-state',
    middleware: [
      validateQueryParamsAgainstJoiSchema(
        weatherGetRequestByCityStateJoiSchema,
      ),
    ],
    handler: (req, res) =>
      weatherController.getCurrentWeatherByCityStateName(req, res),
  })
  .addGetRoute({
    path: '/weather/geo-coords',
    middleware: [
      validateQueryParamsAgainstJoiSchema(weatherGetRequestGeoCoordsJoiSchema),
    ],
    handler: (req, res) =>
      weatherController.getCurrentWeatherByGeoLocation(req, res),
  })
  .build()

export default router
