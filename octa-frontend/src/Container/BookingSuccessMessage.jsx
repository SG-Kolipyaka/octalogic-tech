import React, { useState } from 'react';
import { Alert } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';

const obj = {
  firstName: "",
  lastName: "",
  wheels: 0,
  vehicleType: "",
  selectedModel: "",
  startDate: "",
  endDate: "",
  bookingID: 0
}

const BookingSuccessMessage = () => {
  const {
    setNames,
    handleBookVehicle,
    data,
    setDatas
  } = useContext(AuthContext);

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setNames(true);
    handleBookVehicle(false);
    setDatas(obj);
  };

  // Convert Date objects to string format for rendering
  const startDateString = data.startDate ? data.startDate.toString() : '';
  const endDateString = data.endDate ? data.endDate.toString() : '';

  return (
    <div style={{ display: open ? 'block' : 'none', padding: '30px', backgroundColor: 'lightgreen', color: 'black', fontSize: '20px', width: '400px', margin: 'auto', borderRadius: '10px' }}>
      <Alert severity="success" onClose={handleClose} sx={{ fontSize: 'inherit' }}>
        Vehicle Booked Successfully
      </Alert>

      <div style={{ marginTop: '20px' }}>
        <strong>Name:</strong> {data.firstName} {data.lastName}
      </div>

      <div style={{ marginTop: '10px' }}>
        <strong>Number of Wheels:</strong> {data.wheels}
      </div>

      <div style={{ marginTop: '10px' }}>
        <strong>Vehicle Type:</strong> {data.vehicleType}
      </div>

      <div style={{ marginTop: '10px' }}>
        <strong>Selected Model:</strong> {data.selectedModel}
      </div>

      <div style={{ marginTop: '10px' }}>
        <strong>Booking Dates:</strong> {startDateString} to {endDateString}
      </div>
    </div>
  );
};

export default BookingSuccessMessage;
