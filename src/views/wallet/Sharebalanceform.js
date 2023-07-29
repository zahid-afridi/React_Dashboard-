import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Stack, Typography, Alert } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Sharebalanceform = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    enteruserid: '',
    enteramount:''

  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    enteramount: '',
    image: '',
  });

 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.username) {
      errors.username = 'Username is required';
      isValid = false;
    } else {
      errors.username = '';
    }

    if (!formData.enteruserid) {
      errors.enteruserid = 'User ID is required';
      isValid = false;
    
    } else {
      errors.enteruserid = '';
    }

     if (!formData.enteramount) {
        errors.enteramount="Amount is required"
     }
     else
     {
        errors.enteramount="";
     }
   

    setFormErrors(errors);
    
return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      onSubmit();
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: { xs: '70vh' } }}>
      <Grid item xs={12} sm={12} md={6}>
        <Paper elevation={3} style={{ padding: '50px' }}>
          <form onSubmit={handleSubmit}>
            <Stack gap={1}>
              <TextField
                fullWidth
                label="Enter Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                error={!!formErrors.username}
                helperText={formErrors.username}
              />
              <TextField
                fullWidth
                label="Enter user ID"
                name="enteruserid"
                type="text"
                value={formData.enteruserid}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                error={!!formErrors.enteruserid}
                helperText={formErrors.enteruserid}
              />
              

            
              <TextField
                fullWidth
                label="Enter Amount"
                name="enteramount"
                type="number"
                value={formData.enteramount}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                error={!!formErrors.enteramount}
                helperText={formErrors.enteramount}
              />
            


             

             

              <Button type="submit" variant="contained" color="primary" fullWidth>
                SUBMIT
              </Button>
            </Stack>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Sharebalanceform;
