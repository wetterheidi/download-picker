import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet'

function resetMarkerIcon() {
  delete (Icon.Default.prototype as any)._getIconUrl;
  Icon.Default.mergeOptions({
      iconRetinaUrl: 'markers/marker-icon-2x.png',
      iconUrl: 'markers/marker-icon.png',
      shadowUrl: 'markers/marker-shadow.png',
  });
}

resetMarkerIcon()

const Map = () => {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setPosition([latitude, longitude]);
    });
  }, []);

  if (!position) {
    return <p>Loading...</p>;
  }

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}></Marker>
    </MapContainer>
  );
};

export default Map;