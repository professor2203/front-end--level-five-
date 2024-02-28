import React from 'react'
import Container from './Container'
import { Box, Typography } from '@mui/material'
export default function Connect() {
  return (
  <Container>
    <Box sx={{maxHeight:"1000vh",display:"flex",flexDirection:"column",justifyItems:"center"}}>
    <Box sx={{textAlign:"center"}}>

<Typography variant='body' sx={{color:"#fff",paddingLeft:"vh"}}>
Please drop us on our email
</Typography>
<Typography sx={{color:"#fff",fontSize:"4vh"}}>
connect<span style={{color:"#553EFF"}}>@Level5.com</span>.sa
</Typography>
</Box>

    </Box>
        
    
  </Container>
  )
}
