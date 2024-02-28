import React from 'react';
import Container from './Container';
import { Grid, Typography, Box } from '@mui/material';

export default function Itsolution() {
  return (
    <div style={{ backgroundColor: "#ffff" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box padding="10vh">
              About Us
              <Typography
                sx={{
                  fontFamily: "",
                  fontSize: { xs: "2.5vh", md: "3.5vh" }, // Responsive font size
                  fontWeight: "600",
                  lineHeight: "40px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color:"#553EFF",
                  gap:"vh"
                }}
              >
                Tailored IT Solutions in Riyadh <br />
                <span style={{ color:"#000" }}>Approach to Cost-Effectiveness</span>
              </Typography>
              <Typography sx={{borderBottom:"0.5vh solid #8868F9" ,maxWidth:"12vw" }}></Typography>
            </Box>
          </Grid>
          <Grid container spacing={2} sx={{paddingLeft:"5vh"}}>
            <Grid item xs={12} md={6}>
              <Box sx={{paddingLeft:"7vh"}}>
                <Typography sx={{textAlign:"", padding:""}}>
                  We aspire to be the premier IT solutions facilitator in the Kingdom, connecting clients with specialized expertise while maintaining operational agility and cost-effectiveness.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{paddingLeft:"7vh",paddingBottom:"10vh"}}>
                <Typography sx={{textAlign:""}}>
                Headquartered in Riyadh, Kingdom of Saudi Arabia, Level Five is committed to providing innovative, tailored IT solutions by fostering strategic partnerships, leveraging external expertise, and optimizing resource allocation.
                <br />
                <br />

We adopt a lean operating model centered around outsourcing and collaboration with IT consultancy partners, Level Five aims to maximize efficiency, reduce overhead costs, and deliver high-quality solutions to clients in Saudi Arabia.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
