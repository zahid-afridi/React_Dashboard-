import React from 'react';
import Grid from '@mui/material/Grid';

//  ** Icons
import AccessTimeFilledOutlinedIcon from '@mui/icons-material/AccessTimeFilledOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import EuroSymbolOutlinedIcon from '@mui/icons-material/EuroSymbolOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

// ** Styled Component 
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts';

// ** Demo Components 
import Monyshowinput from 'src/views/dashboard/Monyshowinput';
import Coinfordashboard from 'src/views/dashboard/Coinfordashboard';

export default function index() {
  return (
    <>
      <ApexChartWrapper>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <Coinfordashboard
              heading="Company Exchange Working"
              subtex="22 july 2023"
              icon={<AccessTimeFilledOutlinedIcon sx={{ fontSize: '36px', color: '#9B64FD' }} />}
            ></Coinfordashboard>
          </Grid>
          <Grid item xs={12} md={6}>
            <Coinfordashboard
              heading="Bitcoin"
              subtex="$"
              icon={<CurrencyBitcoinOutlinedIcon sx={{ fontSize: '56px', fontWeight: 'bold', color: '#9B64FD' }} />}
            ></Coinfordashboard>
          </Grid>
          <Grid item xs={12} md={6}>
            <Coinfordashboard
              heading="Ethereum"
              subtex="$"
              icon={<EuroSymbolOutlinedIcon sx={{ fontSize: '56px', fontWeight: 'bold', color: '#9B64FD' }} />}
            ></Coinfordashboard>
          </Grid>
          <Grid item xs={12} md={6}>
            <Coinfordashboard
              heading="USTD"
              subtex="$"
              icon={<AttachMoneyOutlinedIcon sx={{ fontSize: '56px', fontWeight: 'bold', color: '#9B64FD' }} />}
            ></Coinfordashboard>
          </Grid>
          <Grid item xs={12} md={3}>
            <Monyshowinput title="DEPOSITED" money="$20.0"></Monyshowinput>
          </Grid>
          <Grid item xs={12} md={3}>
            <Monyshowinput title="Daily Earning" money="$80.0"></Monyshowinput>
          </Grid>
          <Grid item xs={12} md={3}>
            <Monyshowinput title="REF. BONUS" money="$00.0"></Monyshowinput>
          </Grid>
          <Grid item xs={12} md={3}>
            <Monyshowinput title="Withdrawals" money="$500"></Monyshowinput>
          </Grid>
          <Grid item xs={12} md={3}>
            <Monyshowinput title="Main Balance" money="$100.0"></Monyshowinput>
          </Grid>
          <Grid item xs={12} md={3}>
            <Monyshowinput title="1st Level Deposited" money="$30.0"></Monyshowinput>
          </Grid>
        </Grid>
      </ApexChartWrapper>
    </>
  );
}
