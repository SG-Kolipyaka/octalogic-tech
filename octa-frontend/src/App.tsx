import React, { useContext } from 'react';
import './App.css';
import NameForm from './Container/NameForm';
import NumberWheels from './Container/NumberWeels';
import VehicleType from './Container/VehicleType';
import SpecificModel from './Container/SpecificModel';
import BookingDates from './Container/BookingDates';
import { AuthContext } from './Context/AuthContextProvider';
import BookingSuccessMessage from './Container/BookingSuccessMessage';
import Typography from '@mui/material/Typography';

function App() {
  const {
    name,
    wheel,
    model,
    vehicle,
    date,
    vehicleBooked
  } = useContext(AuthContext);

  return (
    <div className="App-header">
      {!vehicleBooked && (
        <div className="header-content">
          <Typography variant="h4" component="h1" color="black" sx={{ fontFamily: 'Monospace', letterSpacing: 1, textAlign: 'center' }}>
            Book Your Vehicle Fast <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2H5cT2eoVWZ36W4Pp_4qH7yEl0BcVU4rhw&s" alt="Vehicle" style={{ maxWidth: '6%' }} />
          </Typography>
        </div>
      )}
      {name && <NameForm/>}
      {wheel && <NumberWheels/>}
      {vehicle && <VehicleType/>}
      {model && <SpecificModel/>}
      {date && <BookingDates/>}
      {vehicleBooked && <BookingSuccessMessage/>}
    </div>
  );
}

export default App;
