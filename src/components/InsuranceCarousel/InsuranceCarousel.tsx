import React from 'react';
import {
  Box,
  Typography,
  Container,
  IconButton,
} from '@mui/material';
import { keyframes } from '@mui/system';
import { Phone, Email } from '@mui/icons-material';

const insuranceLogos = [
  {
    name: 'Aetna',
    logo: '/images/insurance/Aetna-Logo.png',
    color: '#672981'
  },
  {
    name: 'Blue Cross Blue Shield',
    logo: '/images/insurance/BCBS-scaled.webp',
    color: '#0066CC'
  },
  {
    name: 'Cigna',
    logo: '/images/insurance/624c21de4724fd794f736168_Signa insurance.png',
    color: '#EF5320'
  },
  {
    name: 'UnitedHealthcare',
    logo: '/images/insurance/United-Healthcare-Logo.png',
    color: '#0078AE'
  },
  {
    name: 'Humana',
    logo: '/images/insurance/Humana-logo.png',
    color: '#00663C'
  },
  {
    name: 'Anthem',
    logo: '/images/insurance/anthem-bcbs-logo-wcs-2023.svg',
    color: '#002B77'
  },
  {
    name: 'Kaiser Permanente',
    logo: '/images/insurance/kaiser-permanente-logo-png-transparent.png',
    color: '#005988'
  }
];

// Smooth infinite scroll animation
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const InsuranceCarousel: React.FC = () => {

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#FAFAFA',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 300,
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              color: '#2C3E40',
              mb: 3,
              letterSpacing: '-0.01em',
            }}
          >
            Some of Our Accepted Insurance Plans
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: '1.1rem',
            }}
          >
            We work with most major insurance providers to make mental health care accessible and affordable
          </Typography>
        </Box>
      </Container>

      {/* Carousel Container */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            width: '120px',
            height: '100%',
            zIndex: 2,
            pointerEvents: 'none',
          },
          '&::before': {
            left: 0,
            background: 'linear-gradient(to right, #FAFAFA, transparent)',
          },
          '&::after': {
            right: 0,
            background: 'linear-gradient(to left, #FAFAFA, transparent)',
          },
        }}
      >
        {/* Scrolling Track */}
        <Box
          sx={{
            display: 'flex',
            animation: `${scroll} 30s linear infinite`,
            width: 'calc(200%)',
            gap: 3,
            alignItems: 'center',
            py: 2,
            '&:hover': {
              animationPlayState: 'paused',
            },
          }}
        >
          {/* First set of logos */}
          {insuranceLogos.concat(insuranceLogos).map((insurance, index) => (
            <Box
              key={`${insurance.name}-${index}`}
              sx={{
                minWidth: '200px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'white',
                borderRadius: 3,
                boxShadow: '0 2px 20px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  borderColor: 'rgba(107, 123, 125, 0.2)',
                },
              }}
            >
              <Box
                component="img"
                src={insurance.logo}
                alt={`${insurance.name} logo`}
                sx={{
                  height: '50px',
                  width: 'auto',
                  maxWidth: '160px',
                  objectFit: 'contain',
                  filter: 'brightness(0.85) contrast(1.1)',
                  transition: 'filter 0.3s ease',
                  '&:hover': {
                    filter: 'brightness(1) contrast(1)',
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Bottom info section */}
      <Container maxWidth="lg">
        <Box
          sx={{
            mt: 6,
            p: 4,
            bgcolor: 'white',
            borderRadius: 3,
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
            textAlign: 'center',
            border: '1px solid rgba(107, 123, 125, 0.1)',
          }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 1, fontSize: '1rem' }}
          >
            Don't see your insurance provider? No problem.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              color: '#6B7B7D',
              fontSize: '1.1rem',
              mb: 3,
            }}
          >
            Contact us for verification and out-of-network options
          </Typography>
          
          {/* Contact Icons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton
              onClick={() => window.location.href = 'tel:8183000033'}
              sx={{
                bgcolor: '#6B7B7D',
                color: 'white',
                '&:hover': {
                  bgcolor: '#4A5B5D',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <Phone />
            </IconButton>
            <IconButton
              onClick={() => window.location.href = 'mailto:info@pyramidaftercare.com'}
              sx={{
                bgcolor: '#7FB069',
                color: 'white',
                '&:hover': {
                  bgcolor: '#5A8049',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <Email />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default InsuranceCarousel;
