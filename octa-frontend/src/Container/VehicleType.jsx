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
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getvehicleData } from '../Redux/VehicleReducer/action';


const defaultTheme = createTheme();


const VehicleType = () => {
  const dispatch=useDispatch()
const {vehicles}=useSelector((store)=>store.vehiclereducer)
  const {
    setModels,
    setVehicles,
    objVehical,
    data
  } = useContext(AuthContext);
  const [selectedValue, setSelectedValue] = useState('');


  const handleNext = () => {
    objVehical(selectedValue)
    setVehicles(false)
    setModels(true)
  };

  let obj={
    params:{
      wheels:data.wheels
    }
  }
  const isFormValid = selectedValue !== '';

  useEffect(()=>{
    dispatch(getvehicleData(obj))
  },[data])

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
            backgroundColor: '#f5f5f5', 
            padding: 3, 
            borderRadius: 8, 
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Type of Vehicle
          </Typography>
          <FormControl component="fieldset" sx={{ mt: 3 }}>
            <FormLabel component="legend">Select Type of Vehicle</FormLabel>
            <RadioGroup
              aria-label="vehicleType"
              name="vehicleType"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            >
              {vehicles.map((option, index) => (
                <FormControlLabel
                  key={index} 
                  value={option}
                  control={<Radio />}
                  label={option}
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

export default VehicleType;
