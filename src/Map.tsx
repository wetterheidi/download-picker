// import { useState, useContext } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LocateControl } from '@turtlesocks/react-leaflet.locatecontrol'
import 'leaflet/dist/leaflet.css';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css'

// import { LatLngLiteral } from 'leaflet'
// import NotyfContext from './NotyfContext';
// import { Notyf } from 'notyf';


const Map = () => {


  return (
    <MapContainer center={[47, 15]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={position}></Marker> */}
      <LocateControl metric
        setView='always'
        flyTo={true}
        // keepCurrentZoomLevel={true}
        // returnToPrevBounds={true}
        locateOptions={{watch: true, enableHighAccuracy: true}}
        position="topright"
      />

    </MapContainer>
  );
};

export default Map;


