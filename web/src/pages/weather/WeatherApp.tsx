import {Col, Row} from "react-bootstrap";
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.js'
import FullViewportLayout from "../../layout/FullViewportLayout.tsx";
import WeatherInformation from "../../components/weather/WeatherInformation.tsx";
import {WeatherProvider} from "../../context/weatherContext.tsx";
import WeatherMap from "../../components/weather/WeatherMap.tsx";
import WeatherLayerControls from "../../components/weather/WeatherLayerControls.tsx";
import WeatherSearch from "../../components/weather/WeatherSearch.tsx";

function WeatherDataIndex() {
  return (
      <FullViewportLayout fullWidth={true}>
        <WeatherProvider>
          <Row>
            <Col className='p-0'>
              <WeatherSearch />
            </Col>
          </Row>
          <Row className='flex-grow-1'>
            <Col className='p-3 border-end' xs={12} lg={1} xl={2}>
              <WeatherInformation />
            </Col>
            <Col xs={12} lg={11} xl={10} className='p-0 overflow-auto h-100 position-relative'>
              <WeatherLayerControls />
              <WeatherMap />
            </Col>
          </Row>
        </WeatherProvider>
      </FullViewportLayout>
  )
}

export default WeatherDataIndex;