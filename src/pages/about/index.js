import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function index() {
  return (
    <>
      <Grid container spacing={5} pt={{xs:20}}>
        <Grid item lg={12} md={12} xs={12}>
          <Typography variant='h2' fontWeight='bold'>About Us</Typography>
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <Typography variant='p' fontWeight='bold'> 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, veritatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iste, ullam minima esse autem facilis molestias excepturi repellat maxime consequatur.
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptates numquam architecto provident obcaecati quidem libero beatae consequatur, voluptatem minus consectetur sunt! Sit temporibus facere enim atque aut? Facere, repudiandae!
          </Typography>
        </Grid>

      </Grid>
    </>
  )
}
