import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import './Map.css'

const apiKey= process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

function Maps({lat, lng}) {    
    const center = {
      lat,
      lng
    };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        // mapContainerStyle={containerStyle}
        mapContainerClassName="container-map"
        zoom={10}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Maps)