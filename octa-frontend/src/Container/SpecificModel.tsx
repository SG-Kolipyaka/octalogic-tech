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

const defaultTheme = createTheme();

const SpecificModel: React.FC = () => {
  const {
    setModels,
    setDates,
    objModel,
  } = useContext(AuthContext);
  const [selectedValue, setSelectedValue] = React.useState<string>('');

  const handleNext = () => {
    objModel(selectedValue)
    setModels(false)
    setDates(true)
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
            Select the Model
          </Typography>
          <FormControl component="fieldset" sx={{ mt: 3 }}>
            <FormLabel component="legend">Choose a Model</FormLabel>
            <RadioGroup
              aria-label="model"
              name="model"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            >
              <FormControlLabel value="Model A" control={<Radio />} label="Model A" />
              <FormControlLabel value="Model B" control={<Radio />} label="Model B" />
              <FormControlLabel value="Model C" control={<Radio />} label="Model C" />
              <FormControlLabel value="Model D" control={<Radio />} label="Model D" />
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
