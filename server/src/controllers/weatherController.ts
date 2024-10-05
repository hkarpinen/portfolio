import { inject, injectable } from 'inversify'
import { WeatherService } from '../services/weatherService'
import { Request, Response } from 'express'

@injectable()
export class WeatherController {
  private weatherService: WeatherService

  constructor(@inject(WeatherService) weatherService: WeatherService) {
    this.weatherService = weatherService
  }

  async getCurrentWeatherByCityStateName(req: Request, res: Response) {
    const { cityName, stateName } = req.query
    const weather = await this.weatherService.getCurrentWeatherByCityStateName(
      String(cityName),
      String(stateName),
    )
    res.json(weather)
  }

  async getCurrentWeatherByGeoLocation(req: Request, res: Response) {
    const { latitude, longitude } = req.query
    const weather = await this.weatherService.getCurrentWeatherByGeoLocation(
      Number(latitude),
      Number(longitude),
    )
    res.json(weather)
  }
}
