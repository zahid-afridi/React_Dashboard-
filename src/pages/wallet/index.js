import React, { useState } from 'react'; 

import { Box, Typography, Grid, Button } from '@mui/material';
import Personalwallet from 'src/views/wallet/Personalwallet';
import Sharebalanceform from 'src/views/wallet/Sharebalanceform';

export default function Index() { 
  const [submitform, setSubmitform] = useState(false);
  const [sumbtshow, setSumbtshow] = useState(true);

  const handleFormSubmit = () => {
    // Add your logic here to handle the form submit action
    setSubmitform(true);
    setSumbtshow(false);
  };

  const showForm = () => {
    setSubmitform(false);
    setSumbtshow(true);
  };
  
  const submitBoxStyle = {
    borderRadius: '50px',
    background: '#e0e0e0',
    boxShadow: '31px 31px 62px #bebebe, -31px -31px 62px #ffffff',
    mt: { xs: 20, md: 20 },
    ml: { xs: 3, md: 65 },
    width: { xs: 350, md: 450, lg: 450 },
    height: { xs: 300, md: 350, lg: 350 },
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  };

  const messageStyle = {
    fontWeight: 'bold',
    fontSize: { xs: 20, md: 23 },
  };

  return (
    <>
      <Grid container spacing={8}>
        <Grid item xs={12} lg={12} md={12}>
          <Box>
            <Typography variant='h5' fontWeight='bold'>
              Personal Balance
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} lg={4} md={4}>
          <Personalwallet heading='Total Balance' subtext='$000'></Personalwallet>
        </Grid>
        <Grid item xs={12} lg={4} md={4}>
          <Personalwallet heading='Bonous Balance' subtext='$000'></Personalwallet>
        </Grid>
        <Grid item xs={12} lg={4} md={4}>
          <Personalwallet heading='Earning Balance' subtext='$000'></Personalwallet>
        </Grid>
      </Grid>

      {/* share balance is here */}
      <Grid container spacing={0} mt={{ xs: 15, lg: 18, md: 18 }}>
        <Grid item xs={12} lg={12} md={12}>
          <Box>
            <Typography variant='h5' fontWeight='bold'>
              Share Balance
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          {sumbtshow && <Sharebalanceform onSubmit={handleFormSubmit}></Sharebalanceform>}
          {submitform && (
            <Box sx={submitBoxStyle}>
              <Typography variant='p' sx={messageStyle}>
                Your Process has been submitted <br />
              </Typography>
              <Button variant='contained' onClick={showForm}>
                OK
              </Button>
            </Box>
          )}
        </Grid>
      </Grid>
    </>
  );
}
