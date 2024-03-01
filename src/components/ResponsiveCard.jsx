import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    src: '/static/images/san_francisco_bridge.jpg',
  },
  {
    label: 'Bird',
    src: '/static/images/bird.jpg',
  },
  {
    label: 'Bali, Indonesia',
    src: '/static/images/bali.jpg',
  },
  {
    label: 'Goč, Serbia',
    src: '/static/images/goc_serbia.jpg',
  },
];

function ResponsiveCard() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeStep]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </Button>
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
              <Card sx={{ maxWidth: 345, mt: 2 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={images[activeStep].src}
                  title={images[activeStep].label}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {images[activeStep].label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Box>
  );
}

export default ResponsiveCard;
