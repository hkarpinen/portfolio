import {MapContainer} from "react-leaflet/MapContainer";
import {TileLayer} from "react-leaflet/TileLayer";
import UseGeoLocation from "../../hooks/useGeoLocation.ts";
import {useWeatherContext} from "../../context/weatherContext.tsx";



function WeatherMap() {
  const { geoLocation } = UseGeoLocation();
  const { weatherData, weatherLayer } = useWeatherContext();

  return (
      <>
        {geoLocation && weatherData ? <MapContainer
            key={weatherData.coord.lat}
            className='position-relative h-100'
            center={[weatherData.coord.lat, weatherData.coord.lon]}
            zoom={13}
            scrollWheelZoom={true}
            zoomControl={false}
        >
          <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' />
          {
              weatherLayer &&
              weatherLayer.templateUrl &&
              weatherLayer.attribution &&
              <TileLayer url={weatherLayer.templateUrl} attribution={weatherLayer.attribution} />
          }
        </MapContainer>: <p>Please enable your location.</p>}
      </>
  )
}

export default WeatherMap;