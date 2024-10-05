import WeatherLayerControl from "./WeatherLayerControl.tsx";
import Container from "react-bootstrap/Container";
import '../../styles/sass/weather.scss'

const API_KEY = (import.meta.env.VITE_API_OPEN_WEATHER_MAP_API_KEY)

function WeatherLayerControls() {
  return (
      <Container className='weather-controls p-0'>
        <ul className='list-unstyled'>
          <WeatherLayerControl
              name='cloud'
              imgSrc='/weather/layers/cloud.png'
              templateUrl={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
              tooltipText="Add cloud layer"
              attribution="Open Weather Map"
          />
          <WeatherLayerControl
              name='precipitation'
              imgSrc='/weather/layers/precipitation.png'
              templateUrl={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
              tooltipText="Add precipitation layer"
              attribution="Open Weather Map"
          />
          <WeatherLayerControl
              name='pressure'
              imgSrc= '/weather/atmosphere/pressure.png'
              templateUrl={`https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
              tooltipText="Add Sea level pressure layer"
              attribution="Open Weather Map"
          />
          <WeatherLayerControl
              name='wind'
              imgSrc='/weather/wind/wind.png'
              templateUrl={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
              tooltipText="Add wind layer"
              attribution="Open Weather Map"
          />
          <WeatherLayerControl
              name='temperature'
              imgSrc='/weather/temp/temp-low.png'
              templateUrl={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
              tooltipText="Add temperature layer"
              attribution="Open Weather Map"
          />
          <WeatherLayerControl
              name='cycling'
              imgSrc='/weather/layers/cycling.png'
              templateUrl={'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png'}
              tooltipText={"Add bicycling layer"}
              attribution="CyclOSM"
          />
        </ul>
      </Container>
  )
}

export default WeatherLayerControls;