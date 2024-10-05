import { inject, injectable } from 'inversify'
import OpenWeatherMap from 'openweathermap-ts'

@injectable()
export class WeatherService {
  private readonly openWeatherMap: OpenWeatherMap

  constructor(@inject(OpenWeatherMap) openWeatherMap: OpenWeatherMap) {
    this.openWeatherMap = openWeatherMap
  }

  public async getCurrentWeatherByCityStateName(
    cityName: string,
    stateName: string,
  ) {
    return this.openWeatherMap.getCurrentWeatherByCityName({
      cityName: cityName,
      state: stateName,
    })
  }

  public async getCurrentWeatherByGeoLocation(
    latitude: number,
    longitude: number,
  ) {
    return this.openWeatherMap.getCurrentWeatherByGeoCoordinates(
      latitude,
      longitude,
    )
  }
}
