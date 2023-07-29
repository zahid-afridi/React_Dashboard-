import React, { useState } from 'react'; 

import { Box, Typography, Grid, Button } from '@mui/material';
import Withdrwatable from 'src/views/history/WithdrawTable';
import Commessionhistory from 'src/views/history/Commessionhistory';



export default function Index() { 


  


  



  return (
    <>
      <Grid container spacing={8}>
        <Grid item xs={12} lg={12} md={12}>
          <Box>
            <Typography variant='h5' fontWeight='bold'>
             Withdraws Records
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} lg={12} md={12}>
         <Withdrwatable></Withdrwatable>
        </Grid>
        </Grid>


        {/* commision history */}
        <Grid container spacing={8} mt={{lg:10,md:10,xs:5}}>
        <Grid item xs={12} lg={12} md={12}>
          <Box>
            <Typography variant='h5' fontWeight='bold'>
            Commession History
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} lg={12} md={12}>
        <Commessionhistory></Commessionhistory>
        </Grid>
        </Grid>
        

    
       
     
    </>
  );
}
