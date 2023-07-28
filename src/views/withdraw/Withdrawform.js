import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
  Alert,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

const Withdrawform = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    enteramount: '',
    acount:'',
    
    bonous: false,
    earningBalance: false,
    depositedBalance: false,
    source: '', // Added a new state for tracking the selected source
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    enteramount: '',

    withdrawType: '', // Added a new state for withdraw type validation
    source: '', // Added a new state for source validation
  });



  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    // Handle the logic to allow only one checkbox to be selected at a time for withdraw type
    setFormData((prevFormData) => ({
      ...prevFormData,
      bonous: name === 'bonous' ? newValue : false,
      earningBalance: name === 'earningBalance' ? newValue : false,
      depositedBalance: name === 'depositedBalance' ? newValue : false,
    }));

    // Handle the logic to allow only one checkbox to be selected at a time for select source
    if (type === 'checkbox') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        source: name === 'source' ? (newValue ? value : '') : prevFormData.source,
      }));
    } else {
      // Separate state update for the Enter Amount field
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const generateAmountText = () => {
    let amountText = 'please select withdrw type'; // Default text
    if (formData.bonous) {
      amountText = 'Your bonus is $100'; // Text for bonus
    } else if (formData.earningBalance) {
      amountText = 'Your earning balance is $200'; // Text for earning balance
    } else if (formData.depositedBalance) {
      amountText = 'Your deposited balance is $300'; // Text for deposited balance
    }
    
return amountText;
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.username) {
      errors.username = 'Userid is required';
      isValid = false;
    } else {
      errors.username = '';
    }

    if (!formData.enteramount)
    {
      errors.enteramount="Please enter amount";
      isValid=false;
    }
    else{
      errors.enteramount=""
    }

    if (!formData.acount)
    {
      errors.acount="Please enter acount number";
      isValid:false;
    }
    else
    {
         errors.acount=""
    }

    // Check if at least one checkbox is selected for withdraw type
    if (!formData.bonous && !formData.earningBalance && !formData.depositedBalance) {
      errors.withdrawType = 'Select at least one withdraw type';
      isValid = false;
    } else {
      errors.withdrawType = '';
    }

    // Check if a source is selected
    if (!formData.source) {
      errors.source = 'Select a source';
      isValid = false;
    } else {
      errors.source = '';
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

  const handleSourceCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const selectedSourceLabel = checked ? name : '';

    setFormData((prevFormData) => ({
      ...prevFormData,
      source: selectedSourceLabel,
    }));

   
  };

  const jazzCasheLabel = formData.source ? `Enter your ${formData.source}` : 'Please Select withdrwa acount first';

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: { xs: '70vh' } }}>
      <Grid item xs={12} sm={12} md={6}>
        <Paper elevation={3} style={{ padding: '50px' }}>
          <form onSubmit={handleSubmit}>
            <Stack gap={1}>
              <TextField
                fullWidth
                label="Enter User ID"
                name="username"
                value={formData.username}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                error={!!formErrors.username}
                helperText={formErrors.username}
              />

              <Typography variant="subtitle" pt={8} sx={{ fontWeight: 'bold', fontSize: { md: '20px', xs: '17px' } }}>
                <Typography variant="span" color="red">*</Typography> Select Withdraw type
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="bonous" checked={formData.bonous} onChange={handleChange} />}
                  label="Bonus"
                />
                <FormControlLabel
                  control={<Checkbox name="earningBalance" checked={formData.earningBalance} onChange={handleChange} />}
                  label="Earning balance"
                />
                <FormControlLabel
                  control={<Checkbox name="depositedBalance" checked={formData.depositedBalance} onChange={handleChange} />}
                  label="Deposited balance"
                />
              </FormGroup>
              {formErrors.withdrawType && <Alert severity="error">{formErrors.withdrawType}</Alert>}

              <Typography variant="subtitle" pt={4} sx={{ fontWeight: 'bold', fontSize: { md: '20px', xs: '17px' } }}>
                <Typography variant="span" color="red">*</Typography> Enter Amount
              </Typography>
              <TextField
                fullWidth
                label={generateAmountText()}
                name="enteramount"
                value={formData.enteramount}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                error={!!formErrors.enteramount}
                helperText={formErrors.enteramount}
              />

              <Typography variant="subtitle" pt={4} sx={{ fontWeight: 'bold', fontSize: { md: '20px', xs: '17px' } }}>
                <Typography variant="span" color="red">*</Typography> Select Source
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="Essy paisa" checked={formData.source === 'Essy paisa'} onChange={handleSourceCheckboxChange} />}
                  label="Essy paisa"
                />
                <FormControlLabel
                  control={<Checkbox name="Jazz Cashe" checked={formData.source === 'Jazz Cashe'} onChange={handleSourceCheckboxChange} />}
                  label="Jazz Cashe"
                />
                <FormControlLabel
                  control={<Checkbox name="Bank Account" checked={formData.source === 'Bank Account'} onChange={handleSourceCheckboxChange} />}
                  label="Bank Account"
                />
                <FormControlLabel
                  control={<Checkbox name="TRC" checked={formData.source === 'TRC'} onChange={handleSourceCheckboxChange} />}
                  label="TRC"
                />
              </FormGroup>
              {formErrors.source && <Alert severity="error">{formErrors.source}</Alert>}

              <Typography variant="subtitle" pt={4} sx={{ fontWeight: 'bold', fontSize: { md: '20px', xs: '17px' } }}>
                <Typography variant="span" color="red">*</Typography> {jazzCasheLabel}
              </Typography>
              <TextField
                fullWidth
                label={jazzCasheLabel}
                name="acount"
                value={formData.acount}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                error={!!formErrors.acount}
                helperText={formErrors.acount}
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

export default Withdrawform;
