import Container from "react-bootstrap/Container";
import {convertUnixUtcTimeToLocaleTime} from "../../helpers/timeHelpers.ts";
import ImageLabelValue from "../generic/ImageLabelValue.tsx";
import {useWeatherContext} from "../../context/weatherContext.tsx";

function WeatherInformation() {
  const { weatherData } = useWeatherContext();

  return (
      <Container>
        {weatherData ? (
            <>
              <h3 className='text-primary'>{weatherData.name}, {weatherData.sys.country}</h3>
              <h5 className='text-tertiary'>Location</h5>
              <ImageLabelValue
                  label={'Longitude:'}
                  value={weatherData.coord.lon}
                  imgSrc={'/weather/location/longitude.png'}
              />
              <ImageLabelValue
                  label={'Latitude:'}
                  value={weatherData.coord.lat}
                  imgSrc={'/weather/location/latitude.png'}
              />
              <ImageLabelValue
                  label={'City'}
                  value={weatherData.name}
                  imgSrc={'/weather/location/city.png'}
              />
              <ImageLabelValue
                  label={'Country'}
                  value={weatherData.sys.country}
                  imgSrc={'/weather/location/country.png'}
              />
              <h5 className='text-teriary'>Time</h5>
              <ImageLabelValue
                  label='Sunrise'
                  value={`${convertUnixUtcTimeToLocaleTime(weatherData.sys.sunrise)}`}
                  imgSrc={'/weather/time/sunrise.png'}
              />
              <ImageLabelValue
                  label='Sunset'
                  value={`${convertUnixUtcTimeToLocaleTime(weatherData.sys.sunset)}`}
                  imgSrc={'/weather/time/sunset.png'}
              />
              <h5 className='text-tertiary'>Temperature</h5>
              <ImageLabelValue
                  label={'Current Temperature:'}
                  value={weatherData.main.temp}
                  imgSrc={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              />
              <ImageLabelValue
                  label={'Lowest Temperature:'}
                  value={weatherData.main.temp_min}
                  imgSrc={'/weather/temp/temp-low.png'}
              />
              <ImageLabelValue
                  label={'Highest Temperature:'}
                  value={weatherData.main.temp_max}
                  imgSrc={'/weather/temp/temp-high.png'}
              />
              <h5 className='text-tertiary'>Other</h5>
              <ImageLabelValue
                  label={'Visibility'}
                  value={weatherData.visibility}
                  imgSrc={'/weather/atmosphere/visibility.png'}
              />
              <ImageLabelValue
                  label={'Humidity'}
                  value={weatherData.main.humidity}
                  imgSrc={'/weather/atmosphere/humidity.png'}
              />
              <ImageLabelValue
                  label={'Atmospheric Pressure:'}
                  value={weatherData.main.pressure}
                  imgSrc={'/weather/atmosphere/pressure.png'}
              />
              <ImageLabelValue label={'Wind Spped'} value={weatherData.wind.speed} imgSrc={'/'} />
            </>
        ): <p>Loading...</p>}
      </Container>
  )
}

export default WeatherInformation;