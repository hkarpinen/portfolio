import {Button, Form, InputGroup} from "react-bootstrap";
import {useWeatherContext} from "../../context/weatherContext.tsx";
import {ChangeEvent, useState} from "react";

interface IGeoLocation {
  city: string,
  state: string,
  country?: string
}

function WeatherSearch() {
  const { updateWeatherDataByCityState } = useWeatherContext();
  const [searchLocation, setSearchLocation] = useState<IGeoLocation | undefined>();

  const handleSearch = () => {
    if(searchLocation) {
      updateWeatherDataByCityState(searchLocation.city, searchLocation.state);
    }
  }

  const handleSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const cityStateCountry = event.target.value.trim().split(',');
    const city = cityStateCountry[0];
    const state = cityStateCountry[1];
    setSearchLocation({
      city: city,
      state: state
    })
  }

  return (
      <InputGroup>
        <Form.Control
            className='rounded-0'
            placeholder='Boise, Idaho'
            aria-label='Location Search'
            aria-describedby='location_search'
            onChange={handleSearchValueChange}
        />
        <Button variant='tertiary' className='rounded-0 text-white' onClick={handleSearch}>Search</Button>
      </InputGroup>
  )
}

export default WeatherSearch;