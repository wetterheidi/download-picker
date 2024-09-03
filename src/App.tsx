import './App.css'
import Map from './Map';
import DateTime from './DateTime';
import { useState } from 'react';
import { format } from 'date-fns';
import { LatLng } from 'leaflet';



// DateContext
function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [position, setPosition] = useState<LatLng>(new LatLng(46, 15));

  return (
    <>
      <h1>heidiware picker</h1>
      <div>
        Selected Date & Time: {selectedDate ? format(selectedDate, 'MMMM d, yyyy h:mm aa') : 'None'}
      </div>
      <div>
        Selected Position: {JSON.stringify(position)}
      </div>
      <div className="Map">
        <Map position={position} setPosition={setPosition} />
      </div>

      <div className="timepicker">
        <DateTime selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>
    </>
  )
}

export default App
