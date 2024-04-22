import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormLabel from '@mui/material/FormLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import ReusableButton from '../ReusableComponents/ReusableButton';

const defaultTheme = createTheme();

const NameForm: React.FC = () => {
  const {
    setWheels,
    setNames,
    objName,
  } = useContext(AuthContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNext = () => {
    objName(firstName, lastName);
    setWheels(true);
    setNames(false);
  };

  const isFormValid = firstName.trim() !== '' && lastName.trim() !== '';

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
            backgroundColor: 'Gainsboro', 
            padding: 3, 
            borderRadius: 8, 
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5" color="black">
            Please Enter Your Name
          </Typography>
          <FormLabel component="legend">Enter the Name for Booking Vehicle</FormLabel>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  InputProps={{
                    sx: { backgroundColor: 'white' }, 
                  }}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  InputProps={{
                    sx: { backgroundColor: 'white' }, 
                  }}
                  sx={{ mb: 2 }}
                />
              </Grid>
            </Grid>
            <ReusableButton disabled={!isFormValid?true:false} onClick={handleNext} label={"Next"}/>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default NameForm;
