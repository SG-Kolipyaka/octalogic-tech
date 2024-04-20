import React, { useContext } from 'react';
import './App.css';
import NameForm from './Container/NameForm';
import NumberWheels from './Container/NumberWeels';
import VehicleType from './Container/VehicleType';
import SpecificModel from './Container/SpecificModel';
import BookingDates from './Container/BookingDates';
import { AuthContext } from './Context/AuthContextProvider';
 

function App() {
  const {
    name,
    wheel,
    model,
    vehicle,
    date,
  } = useContext(AuthContext);


  return (
    <div className="App">
      {name && <NameForm/>}
      {wheel && <NumberWheels/>}
      {vehicle && <VehicleType/>}
      {model && <SpecificModel/>}
      {date && <BookingDates/>}
    </div>
  );
}

export default App;
