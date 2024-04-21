import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext, useState, useEffect, useMemo } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import { useDispatch } from 'react-redux';
import { getvehicleData } from '../Redux/VehicleReducer/action';

const defaultTheme = createTheme();

const NumberWheels = () => {
  const { setWheels, setVehicles, objWheel } = useContext(AuthContext);
  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();

  const handleNext = () => {
    const wheels = selectedValue === 'two' ? 2 : 4;
    objWheel(wheels);
    setWheels(false);
    setVehicles(true);
  };

  const isFormValid = selectedValue !== '';

  const obj = useMemo(() => {
    return {
      params: {
        wheels: selectedValue === 'two' ? 2 : 4
      }
    };
  }, [selectedValue]);

  useEffect(() => {
    dispatch(getvehicleData(obj));
  }, [dispatch, obj]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <img
              src="https://media.istockphoto.com/id/1415579368/photo/set-of-new-car-wheels-3d-render.webp?b=1&s=170667a&w=0&k=20&c=ebzKQghkWDcukbrg222blgsfMBHse8ou_JeXh0GRXos="
              alt="Car Wheels"
              style={{ width: 80, height: 80, borderRadius: '50%' }}
            />
          </Box>
          <Typography component="h1" variant="h5">
            Select Number of Wheels
          </Typography>
          <FormControl component="fieldset" sx={{ mt: 3 }}>
            <FormLabel component="legend">Select Number of Wheels</FormLabel>
            <RadioGroup
              aria-label="wheels"
              name="wheels"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            >
              <FormControlLabel value="two" control={<Radio />} label="Two Wheeler" />
              <FormControlLabel value="four" control={<Radio />} label="Four Wheeler" />
            </RadioGroup>
          </FormControl>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            disabled={!isFormValid}
            onClick={handleNext}
            sx={{ mt: 3 }}
          >
            Next
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default NumberWheels;
