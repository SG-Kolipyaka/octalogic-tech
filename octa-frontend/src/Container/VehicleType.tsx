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

interface VehicleTypeProps {
  wheels: number; // Number of wheels (2 or 4)
  onNext: (vehicleType: string) => void;
}

const defaultTheme = createTheme();

const VehicleType: React.FC<VehicleTypeProps> = ({ wheels, onNext }) => {
  const [selectedValue, setSelectedValue] = React.useState<string>('');

  // Simulated database-driven vehicle options
  const vehicleOptions = wheels === 2 ? ['Motorcycle', 'Scooter'] : ['Car', 'Truck'];

  const handleNext = () => {
    onNext(selectedValue);
  };

  const isFormValid = selectedValue !== '';

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
              {vehicleOptions.map((option, index) => (
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
