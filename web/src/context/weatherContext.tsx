import {CurrentResponse} from "openweathermap-ts/dist/types";
import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import UseGeoLocation from "../hooks/useGeoLocation.ts";
import {getWeatherByCityState, getWeatherByGeoLocation} from "../services/weatherService.ts";

interface WeatherProviderProps {
  children: ReactNode
}

interface IWeatherContext {
  weatherData: CurrentResponse | null,
  weatherLayer: IWeatherLayer | null,
  setWeatherLayer: (weatherLayer: IWeatherLayer | null) => void,
  updateWeatherDataByCityState: (cityName: string, stateName: string) => void
}

const initialWeatherContext: IWeatherContext = {
  weatherData: null,
  weatherLayer: null,
  setWeatherLayer: () => {},
  updateWeatherDataByCityState: () => {}
}

export interface IWeatherLayer {
  name: string;
  attribution: string;
  templateUrl: string;
}

export const WeatherContext = createContext<IWeatherContext>(initialWeatherContext);
export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const { geoLocation } = UseGeoLocation();
  const [weatherData, setWeatherData] = useState<CurrentResponse | null>(null)
  const [weatherLayer, setWeatherLayer] = useState<IWeatherLayer | null>(null);

  // Fetch weather by geolocation coordinates.
  useEffect(() => {
    if(geoLocation && geoLocation.coords && !weatherData) {
      setWeatherByGeoLocation(geoLocation);
    }
  }, [geoLocation]);

  const setWeatherByGeoLocation = (geoLocation: GeolocationPosition) => {
    getWeatherByGeoLocation(geoLocation).then((weatherData) => {
      setWeatherData(weatherData);
    })
  }

  const setWeatherDataByCityStateName = (cityName: string, stateName: string) => {
    getWeatherByCityState(cityName, stateName).then((weatherData) => {
      console.log(weatherData);
      setWeatherData(weatherData);
    })
  }

  const setWeatherLayerValue = (layer: IWeatherLayer | null) => {
    setWeatherLayer(layer);
  }

  return (
      <WeatherContext.Provider
          value={{
            weatherData: weatherData,
            weatherLayer: weatherLayer,
            setWeatherLayer: setWeatherLayerValue,
            updateWeatherDataByCityState: setWeatherDataByCityStateName
          }}
      >
        {children}
      </WeatherContext.Provider>
  )
}

