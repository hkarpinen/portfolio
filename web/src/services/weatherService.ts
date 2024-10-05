import axios from "axios";
import {internalApiRequestConfig} from "../config/axiosConfig.ts";

export const getWeatherByGeoLocation = async (geoLocation: GeolocationPosition) => {
  try {
    const { longitude, latitude } = geoLocation.coords;
    const weatherData = await axios.get(
        `/weather/geo-coords?latitude=${latitude}&longitude=${longitude}`,
        internalApiRequestConfig
    )
    return weatherData.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const getWeatherByCityState = async (cityName: string, stateName: string) => {
  try {
    const weatherData = await axios.get(
        `/weather/city-state?cityName=${cityName}&stateName=${stateName}`,
        internalApiRequestConfig
    )
    return weatherData.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

