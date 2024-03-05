import React from 'react';
import { Grid, Box, Typography, useMediaQuery } from '@mui/material';
import Container from './Container';
import Design from './Design';

export default function Header() {
  const isSmallScreen = useMediaQuery('(min-width:600px)');

  return (
    <>
      <div style={{paddingRight:"vh",background: 'linear-gradient(241deg, rgba(0,0,0,1) 10%, rgba(7,4,66,0.9051995798319328) 100%)',  }}>
      <Container>
       <Grid container spacing={2}>
          {/* Left Grid Item */}
          <Grid item xs={6} md={6}>
            <Box sx={{ paddingLeft: '20%', paddingTop: { xs: "15vh", md: "40vh" }, height: "40px", width: { xs: "35vh", md: "120vh" } }}>
              <Typography sx={{ fontFamily: "IBM Plex Sans Arabic", color: "#FFFF", fontSize: { xs: "1.5vh", md: "2vh" } }}>
                IT Systems Company
              </Typography>
              <Typography sx={{
                fontFamily: "",
                fontSize: { xs: "2vh", md: "6vh" },
                fontWeight: 600,
                lineHeight: "",
                letterSpacing: "0.1em",
                textAlign: "left",
                color: "#FFFF",
              }}>
                An IT Boutique House
              </Typography>
              <Typography sx={{ borderBottom: "0.4vh solid #8868F9", maxWidth: { xs: "16vh", md: "48vh" } }} />
              <Typography sx={{
                fontFamily: "",
                fontSize: { xs: "1.5vh", md: "5vh" },
                fontWeight: 200,
                lineHeight: "",
                letterSpacing: "0.05em",
                textAlign: "left",
                color: "#C5C5C5"
              }}>
                Where technology is finely curated & elegantly tailored for every client’s journey
              </Typography>
            </Box>
          </Grid>
          {/* Right Grid Item */}
          <Grid item xs={6} md={6}>
            <Box sx={{ paddingLeft: '%', paddingTop: { xs: "5vh", md: "10vh" }, width: { xs: "28vh", md: "105vh" } }}>
              <Design />
              
            </Box>
          </Grid>
          {/* Bottom Grid Item */}
          <Grid item xs={12}>
                
          <img src="./thumbnail_Master_logo_white 2 (1).svg" alt="" style={{ paddingBottom: isSmallScreen ? "15.5vh" : "10.5vh",  paddingLeft: isSmallScreen ? "15.5vh" : "4.5vh", width: isSmallScreen ? "40vh" : "15vh" }} />

            
          </Grid>
        </Grid>
      </Container>
      </div>
    </>
  )
}
