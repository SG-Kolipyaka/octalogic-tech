import * as React from 'react';
import Avatar from '@mui/material/Avatar';
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
import { useDispatch, useSelector } from 'react-redux';
import { getvehicleData } from '../Redux/VehicleReducer/action';

const defaultTheme = createTheme();

const SpecificModel = () => {
  const dispatch = useDispatch();
  const { vehicledata } = useSelector((store) => store.vehiclereducer);
  const {
    setModels,
    setDates,
    objModel,
    data
  } = useContext(AuthContext);
  const [selectedValue, setSelectedValue] = useState('');

  const filteredVehicleData = useMemo(() => {
    return vehicledata.filter((el) => el.status !== 'booked');
  }, [vehicledata]);

  const handleNext = () => {
    const selectedModel = filteredVehicleData.find((el) => el.model === selectedValue);
    if (selectedModel) {
      const { id, model } = selectedModel;
      objModel(model, id);
      setModels(false);
      setDates(true);
    }
  };

  let obj = {
    params: {
      wheels: data.wheels,
      type: data.vehicleType
    }
  };

  const isFormValid = selectedValue !== '';

  useEffect(() => {
    dispatch(getvehicleData(obj));
  }, [data, dispatch]);

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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
          <Typography component="h1" variant="h5">
            Select the Model
          </Typography>
          <FormControl component="fieldset" sx={{ mt: 3 }}>
            <FormLabel component="legend">Choose the available model for booking</FormLabel>
            <RadioGroup
              aria-label="model"
              name="model"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            >
              {filteredVehicleData.map((el) => (
                <FormControlLabel
                  key={el.id}
                  value={el.model}
                  control={<Radio />}
                  label={el.model}
                />
              ))}
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

export default SpecificModel;
