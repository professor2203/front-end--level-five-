import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
  },
  {
    label: 'Bird',
  },
  {
    label: 'Bali, Indonesia',
  },
  {
    label: 'Goč, Serbia',
  },
];

function Card() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <div>
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
        </div>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 'auto',
            p: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography variant="h5" gutterBottom>
            {images[activeStep].label}
          </Typography>
          {/* Additional card content can be added here */}
        </Paper>

      </Box>
    </div>
  );
}

export default Card;
