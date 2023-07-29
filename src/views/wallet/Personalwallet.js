import { Box, Card, CardContent, Stack, Typography } from "@mui/material"
import React from "react"

const Personalwallet = (props) => {
  return (
    <>
                <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Box  ><Stack flexDirection='row' alignItems='center' gap={6} >
      {props.icon}
       
       
    <Box gap={0} alignItems='center' justifyContent="center">
     <Typography variant="h6" sx={{fontWeight:'bold'}}>{props.heading}</Typography>
        <Typography variant='p'  sx={{ my: 4, color: 'gray' }}>
            {props.subtext}
        </Typography>
        </Box>
        </Stack>
        </Box>
        
        
      
       
      </CardContent>
    </Card>
    </>
  )
}

export default Personalwallet

