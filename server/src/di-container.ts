import { Container } from 'inversify'
import { UserRepository } from './repositories/userRepository'
import { UserService } from './services/userService'
import { UserController } from './controllers/userController'
import { AuthService } from './services/authService'
import { AuthController } from './controllers/authController'
import OpenWeatherMap from 'openweathermap-ts'
import { getEnvironmentVariable } from './helpers/envHelpers'
import { WeatherService } from './services/weatherService'
import { WeatherController } from './controllers/weatherController'

const container = new Container()

// Register dependencies
container.bind<UserRepository>(UserRepository).toSelf()
container.bind<UserService>(UserService).toSelf()
container.bind<UserController>(UserController).toSelf()
container.bind<AuthService>(AuthService).toSelf()
container.bind<AuthController>(AuthController).toSelf()
container.bind<OpenWeatherMap>(OpenWeatherMap).toDynamicValue(() => {
  return new OpenWeatherMap({
    apiKey: getEnvironmentVariable('OPEN_WEATHER_MAP_API_KEY'),
  })
})
container.bind<WeatherService>(WeatherService).toSelf()
container.bind<WeatherController>(WeatherController).toSelf()

export { container }
