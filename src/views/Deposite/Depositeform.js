import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Stack, Typography, Alert } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Depositeform = ({ onSubmit, onCopyToClipboard }) => {
  const [formData, setFormData] = useState({
    username: '',
    enteramount: '',
    image: null,
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    enteramount: '',
    image: '',
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file,
    }));

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
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

    if (!formData.enteramount) {
      errors.enteramount = 'Amount is required';
      isValid = false;
    } else if (formData.enteramount < 25) {
      errors.enteramount = 'Amount should be at least 25';
      isValid = false;
    } else {
      errors.enteramount = '';
    }

    if (!formData.image) {
      errors.image = 'Please upload a receipt';
      isValid = false;
    } else {
      errors.image = '';
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
              <Typography variant="subtitle" pt={8} sx={{ fontWeight: 'bold', fontSize: '25px' }}>
                Binance Address
              </Typography>

              <CopyToClipboard text="TKrPNaynUrPUjuP2vVcauwFskf6TBHozRh" onCopy={() => onCopyToClipboard("TKrPNaynUrPUjuP2vVcauwFskf6TBHozRh")}>
                <Stack
                  alignItems="center"
                  justifyContent="space-evenly"
                  ml={{ lg: 20, md: 20, xs: 0 }}
                  mt={5}
                  sx={{ background: 'gray', borderRadius: '10px' }}
                  height={{ lg: 50, md: 50, xs: 45 }}
                  width={{ lg: 300, xs: 300, md: 400 }}
                  flexDirection="row"
                  gap={8}
                >
                  <Typography variant="h6" sx={{ color: 'white', fontSize: { xs: '10px !important', lg: '16px' } }}>
                    TKrPNaynUrPUjuP2vVcauwFskf6TBHozRh
                  </Typography>
                  <ContentCopyIcon sx={{ color: 'white', fontSize: '18px' }} />
                </Stack>
              </CopyToClipboard>

              <Typography variant="subtitle" pt={8} sx={{ fontWeight: 'bold', fontSize: '25px' }}>
                Binance Link
              </Typography>

              <CopyToClipboard text="http://www.binance.com" onCopy={() => onCopyToClipboard("http://www.binance.com")}>
                <Stack
                  alignItems="center"
                  justifyContent="space-evenly"
                  ml={{ lg: 20, md: 20, xs: 0 }}
                  mt={5}
                  sx={{ background: 'gray', borderRadius: '10px' }}
                  height={{ lg: 50, md: 50, xs: 45 }}
                  width={{ lg: 250, xs: 300, md: 400 }}
                  flexDirection="row"
                  gap={8}
                >
                  <Typography variant="h6" sx={{ color: 'white', fontSize: { xs: '11px ', lg: '11px !important' } }}>
                    http://www.binance.com
                  </Typography>
                  <ContentCopyIcon sx={{ color: 'white', fontSize: '18px' }} />
                </Stack>
              </CopyToClipboard>

              <label htmlFor="image-upload">
                <input
                  id="image-upload"
                  type="file"
                  accept="image/jpeg, image/png"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
                <Button variant="contained" sx={{ marginTop: '50px', marginBottom: '50px' }} component="span" color="secondary" fullWidth>
                  Upload Receipt
                </Button>
              </label>

              {formErrors.image && (
                <Alert severity="error" onClose={() => setFormErrors((prevErrors) => ({ ...prevErrors, image: '' }))}>
                  {formErrors.image}
                </Alert>
              )}
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Uploaded preview"
                  style={{ marginTop: '10px', maxWidth: '100%', maxHeight: '200px', borderRadius: '5px' }}
                />
              )}

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

export default Depositeform;
