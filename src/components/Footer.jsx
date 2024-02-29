                              
                              
import { Grid, Typography, Link, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear timeout on unmount or when loading is finished
    return () => clearTimeout(timer);
  }, []);

  // Render null if loading is true
  if (loading) {
    return null;
  }

  return (
    <Grid container spacing={3}>
      <Box sx={{ borderTop: ".5" }}></Box>
      <Grid item xs={12} sm={6} md={4}>
        <img src="./thumbnail_Master_logo_white 2.svg" alt="" style={{ maxHeight: "8vh" }} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box sx={{ display: "flex", paddingTop: "2vh", justifyContent: "space-between" }}>
          <Typography variant="body1" style={{ color: "#fff" }}>
            <Link href="/support" color="inherit" underline="none">Support</Link>
          </Typography>
          <Typography variant="body1" style={{ color: "#fff" }}>
            <Link href="/privacy-policy" color="inherit" underline="none">Privacy Policy</Link>
          </Typography>
          <Typography variant="body1" style={{ color: "#fff" }}>
            <Link href="/support-privacy-policy" color="inherit" underline="none">Support Privacy Policy</Link>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography sx={{ color: "#fff", textAlign: "end", paddingTop: "2vh" }}>
          © 2020 UXTheme, All
        </Typography>
      </Grid>
    </Grid>
  );
}
