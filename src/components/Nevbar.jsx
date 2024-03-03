import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, useMediaQuery, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const links = [
  { title: 'About us', url: '/' },
  { title: 'Who we are', url: '/' },
  { title: 'Our Solutions', url: '/' },
  { title: 'العربية', url: '/' }
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(true);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear timeout on unmount or when loading is finished
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (loading) {
    return null; // Render nothing until loading is complete
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "inherit" }}>
      <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: "inherit" }}>
        {/* Logo and Links */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="div">
            <img src="./thumbnail_Master_logo_white 2 (1).svg" alt="Logo" style={{ width: isSmallScreen ? '40px' : '80px' }} />
          </Typography>

          {/* Show Links only on large screens */}
          {!isSmallScreen && (
            <div style={{ display: 'flex', alignItems: '', marginLeft: '60vh' }}>
              {links.map((link, index) => (
                <a key={index} href={link.url} style={{ marginRight: '80px', textDecoration: 'none', color: 'inherit' }}>
                  {link.title}
                </a>
              ))}
              <Button variant="contained" sx={{backgroundColor:"#553EFF",fontSize:"1.3vh",height:"6.5vh"}}>
              Book an Appoinment
              </Button>
            </div>
          )}
        </div>
        
        {/* Hamburger Icon and Links */}
        {isSmallScreen && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              aria-controls="menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              {links.map((link, index) => (
                <MenuItem key={index} onClick={handleClose}>
                  {link.title}
                </MenuItem>
              ))}
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
