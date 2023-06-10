import React from 'react'
import {Box,Link,Typography, colors} from '@mui/material'
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <Box width={'100%'} 
    p="1rem 6%" 
    textAlign={'center'} 
    sx={{boxShadow:3,mb:2 ,bgcolor:'purple',color:'white'}}>
      <Typography variant="h1" color={"white"} fontWeight="bold">
        AI CPT3
      </Typography>
      <NavLink to='/register' p={1}>Sign Up</NavLink>
      <NavLink href='/login' p={1}>Sign In</NavLink>
    </Box>
  )
}

export default Navbar