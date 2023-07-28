import { Typography,Box, Stack } from '@mui/material'

import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function Referralcode({onCopyToClipboard}) {
  return (
   <>
   <Box ml={{xs:0,md:50,lg:50}}
        mt={{xs:10,md:10,lg:10}}>
   <Typography variant="subtitle" pt={8} sx={{ fontWeight: 'bold', fontSize: '30px' }}>
                Parent ID
              </Typography>
              <CopyToClipboard text="zahidafrid313" onCopy={() => onCopyToClipboard("http://www.binance.com")}>
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
                  <Typography variant="h6" sx={{ color: 'white', fontSize: { xs: '15px ', lg: '15px !important' } }}>
                  zahidafrid313
                  </Typography>
                  <ContentCopyIcon sx={{ color: 'white', fontSize: '18px' }} />
                </Stack>
              </CopyToClipboard>



                {/* user id */}
              <Box mt={20}>
              <Typography variant="subtitle" pt={8} sx={{ fontWeight: 'bold', fontSize: '30px' }}>
                User ID
              </Typography>
              <CopyToClipboard text="zahidtime" onCopy={() => onCopyToClipboard("http://www.binance.com")}>
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
                  <Typography variant="h6" sx={{ color: 'white', fontSize: { xs: '15px ', lg: '15px !important' } }}>
                  zahidtime
                  </Typography>
                  <ContentCopyIcon sx={{ color: 'white', fontSize: '18px' }} />
                </Stack>
              </CopyToClipboard>
              </Box>
              </Box>
   </>
  )
}
