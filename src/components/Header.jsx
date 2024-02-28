import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Container from './Container';
import Design from './Design';
export default function Header() {
  return (
   <>
    <Container>
    <Grid container spacing={2} sx={{}}>
  <Grid item xs={4} md={6} sx={{}}>
  <Box sx={{paddingLeft:"10vh",paddingTop:"40vh" }}>

    <Typography sx={{ fontFamily: "IBM Plex Sans Arabic", color: "#FFFF", }}>
      IT Systems Company
    </Typography>
    <Typography sx={{
        fontFamily: "",
        fontSize: { xs: "2vh", md: "4vh" },
        fontWeight: 600,
        lineHeight: "",
        letterSpacing: "em",
        textAlign: "left",
        color: "#FFFF",
      }}>
      An IT Boutique House
    </Typography>
    <Typography sx={{paddingLeft:"0vh", borderBottom: "0.7vh solid #8868F9", maxWidth: "35vh" }}></Typography>
    <Typography sx={{
        fontFamily: "",
        fontSize: { xs: "1.5vh", md: "3vh" },
        fontWeight: 200,
        lineHeight: "",
        letterSpacing: "em",
        textAlign: "left",
        color: "#C5C5C5"
      }}>
      Where technology is finely curated & elegantly tailored for every client’s journey
    </Typography>
    </Box>

  </Grid>
  <Grid item xs={8} md={6} sx={{ paddingLeft: { xs: 0, md: "50vh" } }}>
    <Box sx={{paddingRight:"20vh",paddingTop:"10vh"}}>
    <Design />
  
  </Box>
  
  </Grid>
<Box sx={{paddingLeft:"10vh",paddingBottom:"30vh"}}>
<img src="./thumbnail_Master_logo_white 2.svg" alt="" />

</Box>
</Grid>
    </Container>
   </>
  )
}
