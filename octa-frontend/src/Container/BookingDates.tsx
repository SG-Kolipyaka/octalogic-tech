import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';

const defaultTheme = createTheme();

const BookingDates: React.FC = () => {
  const { setDates, data, objDate, handleBookVehicle } = useContext(AuthContext);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const handleFormSubmit = () => {
    if (startDate && endDate) {
      const parsedStartDate = new Date(startDate);
      const parsedEndDate = new Date(endDate);

      objDate(parsedStartDate, parsedEndDate);
    }
    console.log(data);
    setDates(false);
    handleBookVehicle(true);
  };

  const isFormValid = startDate !== '' && endDate !== '';
  const isEndDateValid = startDate && endDate && new Date(endDate) > new Date(startDate);
  const isStartDateValid = startDate && new Date(startDate) >= new Date();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'lightgray',
            padding: 3,
            borderRadius: 8,
          }}
        >
          <Typography component="h1" variant="h5">
            Select Booking Dates
          </Typography>
          <Box sx={{ mt: 3 }}>
            <TextField
              id="startDate"
              label="Start Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                sx: { backgroundColor: 'white' }, 
              }}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              fullWidth
            />
            {!startDate && (
              <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                * Start Date is required
              </Typography>
            )}
            {startDate && !isStartDateValid && (
              <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                * Start Date must be today or in the future
              </Typography>
            )}
          </Box>
          <Box sx={{ mt: 3 }}>
            <TextField
              id="endDate"
              label="End Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                sx: { backgroundColor: 'white' }, 
              }}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
              fullWidth
            />
            {!endDate && (
              <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                * End Date is required
              </Typography>
            )}
            {startDate && endDate && new Date(endDate) <= new Date(startDate) && (
              <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                * End Date must be greater than Start Date
              </Typography>
            )}
          </Box>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            disabled={!isFormValid || !isEndDateValid || !isStartDateValid}
            onClick={handleFormSubmit}
            sx={{ mt: 3 }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default BookingDates;
