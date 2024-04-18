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

interface NumberWheelsProps {
  onNext: (wheels: number) => void;
}

const defaultTheme = createTheme();

const NumberWheels: React.FC<NumberWheelsProps> = ({ onNext }) => {
  const [selectedValue, setSelectedValue] = React.useState<string>(''); // 'two' or 'four'

  const handleNext = () => {
    const wheels = selectedValue === 'two' ? 2 : 4;
    onNext(wheels);
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
            Number of Wheels ?
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
