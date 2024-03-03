import React from 'react'
import { Box, Stack,Typography } from '@mui/material';
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
   <Box mt="80px" bgcolor="#fff3f4">
    <Stack gap="40px" alignItems="center" px="40px" pt="24px">
      <img src={Logo} alt='logo' width="200px" height="40px"/>
      <Typography variant="h1" sx={{ fontSize: { lg: '28px', xs: '20px' }, fontFamily: 'Josefin Sans, sans-serif', fontWeight: '400', marginTop: '20px', marginLeft: '7px' }} textAlign="center" pb="20px">
       KEEP FARMING.....
    </Typography>
    </Stack>
   </Box>
  )
}

export default Footer 