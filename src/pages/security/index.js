import React from 'react';

// ** React Imports

import { useState } from 'react';

// ** MUI Imports

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { styled } from '@mui/material/styles';
import MuiTab from '@mui/material/Tab';
import Typography from '@mui/material';


// ** Icons Imports

import LockIcon from '@mui/icons-material/Lock';

// ** Demo Tabs Imports

import TabSecurity from 'src/views/account-settings/TabSecurity';

// ** Third Party Styles Imports

import 'react-datepicker/dist/react-datepicker.css';


const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100,
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67,
  },
}));

export default function index() {
  return (
    <>
      <Card>
  
        <TabContext>
          <TabList
            aria-label='account-settings tabs'
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
          >
            <Tab
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LockIcon />

                  {/* Use Typography properly */}

                  <Typography variant='body2' pl={2} sx={{ fontSize: '15px' }}>
                    Security
                  </Typography>
                </Box>
              }
            />
          </TabList>

          <TabPanel sx={{ p: 0 }}>
            <TabSecurity />
          </TabPanel>
        </TabContext>
      </Card>
    </>
  );
}
