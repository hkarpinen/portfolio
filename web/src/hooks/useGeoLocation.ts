import {useEffect, useState} from "react";
import {getUserGeoLocation} from "../helpers/browserHelpers.ts";

function UseGeoLocation() {
  const [geoLocation, setGeoLocation] = useState<GeolocationPosition>();

  const getUserLocationAndUpdateState = async () => {
    const userLocation = await getUserGeoLocation();
    if(userLocation && userLocation.coords) {
      setGeoLocation(userLocation);
    }
  }

  useEffect(() => {
    getUserLocationAndUpdateState()
  }, [])

  return { geoLocation }
}

export default UseGeoLocation;