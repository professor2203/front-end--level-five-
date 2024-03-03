import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Container from './Container';
import Design from './Design';

export default function Header() {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          {/* Left Grid Item */}
          <Grid item xs={12} md={6}>
            <Box sx={{ paddingLeft: '10%', paddingTop: '30vh' }}>
              <Typography sx={{ fontFamily: "IBM Plex Sans Arabic", color: "#FFFF" }}>
                IT Systems Company
              </Typography>
              <Typography sx={{
                fontFamily: "",
                fontSize: { xs: "1.5vh", md: "4vh" },
                fontWeight: 600,
                lineHeight: "",
                letterSpacing: "0.1em",
                textAlign: "left",
                color: "#FFFF",
              }}>
                An IT Boutique House
              </Typography>
              <Typography sx={{ borderBottom: "0.4vh solid #8868F9", maxWidth: "35vh" }} />
              <Typography sx={{
                fontFamily: "",
                fontSize: { xs: "1vh", md: "3vh" },
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
          <Grid item xs={12} md={6}>
            <Box sx={{ paddingLeft: '15%', paddingTop: '8vh',width:"95vh" }}>
              <Design />
            </Box>
          </Grid>
          {/* Bottom Grid Item */}
          <Grid item xs={12}>
            
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
