import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'

import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import React from 'react'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})

export default function Monyshowinput(props) {
  return (
    <>
        {/* <Box sx={{border:'1px solid gray',borderRadius:'10px',height:'3rem'}}>
            <Stack pl={4} pt={2} flexDirection='row' justifyContent='space-between'>
                <Typography variant='p' color='primary' sx={{fontWeight:'bold'}}>{props.title}</Typography>
                <Typography pr={4} sx={{fontWeight:'bold'}} color='primary'>{props.money}</Typography>
            </Stack>
        </Box> */}
        <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>{props.title}</Typography>
        
        <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
         {props.money}
        </Typography>
        
      
       
      </CardContent>
    </Card>
    </>
  )
}
