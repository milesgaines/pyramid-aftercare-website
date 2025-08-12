import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Chip,
} from '@mui/material';
import {
  Phone,
  Email,
  Chat,
  Emergency,
  SupportAgent,
} from '@mui/icons-material';

const Support: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #6B7B7D 0%, #4A5B5D 100%)',
          borderRadius: 4,
          color: 'white',
          p: { xs: 4, md: 6 },
          mb: 6,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 600,
            mb: 2,
            fontSize: { xs: '2rem', md: '2.75rem' },
          }}
        >
          24/7 Support & Crisis Care
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 3,
            opacity: 0.9,
            maxWidth: 600,
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          We're here for you around the clock with comprehensive support services and crisis intervention
        </Typography>
        <Chip
          label="Available 24/7"
          color="secondary"
          sx={{
            fontWeight: 600,
            fontSize: '1rem',
            px: 2,
            py: 1,
          }}
        />
      </Box>

      {/* Contact Options */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mb: 6 }}>
        {/* Crisis Hotline */}
        <Card
          sx={{
            borderLeft: '4px solid #d32f2f',
            '&:hover': {
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Emergency sx={{ color: '#d32f2f', fontSize: 32, mr: 2 }} />
              <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                Crisis Hotline
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
              Immediate crisis support available 24/7 for urgent mental health emergencies
            </Typography>
            <Button
              variant="contained"
              color="error"
              startIcon={<Phone />}
              size="large"
              href="tel:988"
              sx={{ fontWeight: 600, px: 3 }}
            >
              Call 988
            </Button>
          </CardContent>
        </Card>

        {/* 24/7 Support Line */}
        <Card
          sx={{
            borderLeft: '4px solid #6B7B7D',
            '&:hover': {
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <SupportAgent sx={{ color: '#6B7B7D', fontSize: 32, mr: 2 }} />
              <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                24/7 Support Line
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
              Round-the-clock support for our patients and their families
            </Typography>
            <Button
              variant="contained"
              startIcon={<Phone />}
              size="large"
              href="tel:+1-800-PYRAMID"
              sx={{ fontWeight: 600, px: 3 }}
            >
              Call Support
            </Button>
          </CardContent>
        </Card>

        {/* Email Support */}
        <Card
          sx={{
            '&:hover': {
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Email sx={{ color: '#7FB069', fontSize: 32, mr: 2 }} />
              <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                Email Support
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
              Non-urgent questions and support requests via email
            </Typography>
            <Button
              variant="outlined"
              startIcon={<Email />}
              size="large"
              href="mailto:support@pyramidaftercare.com"
              sx={{ fontWeight: 600, px: 3 }}
            >
              Email Us
            </Button>
          </CardContent>
        </Card>

        {/* Live Chat */}
        <Card
          sx={{
            '&:hover': {
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Chat sx={{ color: '#7FB069', fontSize: 32, mr: 2 }} />
              <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                Live Chat
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
              Instant messaging support during business hours
            </Typography>
            <Button
              variant="outlined"
              startIcon={<Chat />}
              size="large"
              sx={{ fontWeight: 600, px: 3 }}
            >
              Start Chat
            </Button>
          </CardContent>
        </Card>
      </Box>

      {/* Additional Resources */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
          Additional Resources
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
          Access our patient portal for appointment scheduling, treatment resources, and secure messaging with your care team
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => window.location.href = '/patient-portal'}
          sx={{ fontWeight: 600, px: 4, py: 1.5 }}
        >
          Patient Portal
        </Button>
      </Box>
    </Container>
  );
};

export default Support;
