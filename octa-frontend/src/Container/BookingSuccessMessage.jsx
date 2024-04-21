import React, { useState } from 'react';
import { Alert } from '@mui/material';
import { useContext} from 'react';
import { AuthContext } from '../Context/AuthContextProvider';

const BookingSuccessMessage = () => {
  const {
    setNames,
    handleBookVehicle
  } = useContext(AuthContext);
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setNames(true)
    handleBookVehicle(false)
  };

  return (
    <div style={{ display: open ? 'block' : 'none', padding: '30px', backgroundColor: 'lightgreen', color: 'black', fontSize: '20px', width: '400px', margin: 'auto', borderRadius: '10px' }}>
      <Alert severity="success" onClose={handleClose} sx={{ fontSize: 'inherit' }}>
        Vehicle Booked Successfully
      </Alert>
    </div>
  );
};

export default BookingSuccessMessage;
