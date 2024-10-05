import {Button, Image} from "react-bootstrap";
import {useWeatherContext} from "../../context/weatherContext.tsx";

interface WeatherLayerControlProps {
  name: string,
  imgSrc: string,
  templateUrl: string,
  tooltipText: string,
  attribution: string,
}

function WeatherLayerControl ({ name, imgSrc, templateUrl, tooltipText, attribution }: WeatherLayerControlProps) {
  const { weatherLayer, setWeatherLayer } = useWeatherContext();

  const handleClick = () => {
    if(isActiveLayer()) {
      setWeatherLayer(null);
    } else {
      setWeatherLayer({
        name: name,
        templateUrl: templateUrl,
        attribution: attribution
      })
    }
  }

  const isActiveLayer = (): boolean => {
    if(weatherLayer) {
      return weatherLayer.name === name;
    } else {
      return false;
    }
  }

  return <li>
    <Button
        className={isActiveLayer() ? 'bg-body border rounded-0 border-primary' : 'bg-body border rounded-0'}
        onClick={handleClick}
        data-toggle='tooltip'
        data-placement='right'
        title={tooltipText}
    >
      <Image src={imgSrc} width={25} height={25} />
    </Button>
  </li>
}

export default WeatherLayerControl;