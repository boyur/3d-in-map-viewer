import React from 'react';
import MapGL from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const style = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};

const accessToken = 'pk.eyJ1IjoiYm95dXJhcnRlbSIsImEiOiJjajBkeWY4ZmwwMDEyMzJseG8wZDI4YW5pIn0.DBEWyIXo3VknCRDcqa7Msg'; // Mapbox access token

const Map = () => (
  <MapGL
    style={style}
    mapStyle="mapbox://styles/mapbox/light-v9"
    accessToken={accessToken}
    latitude={37.78}
    longitude={-122.41}
    zoom={11}
    onViewportChange={viewport => {
      // Call `setState` and use the state to update the map.
    }}
  />
);

export default Map;
