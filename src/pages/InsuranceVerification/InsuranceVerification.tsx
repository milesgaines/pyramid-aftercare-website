import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from '@mui/material';
import {
  VerifiedUser,
  Phone,
  CheckCircle,
  ContactSupport,
  Assignment,
  Email,
} from '@mui/icons-material';

const InsuranceVerification: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    insuranceProvider: '',
    memberId: '',
    groupNumber: '',
    phone: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a server
  };

  const insuranceProviders = [
    'Aetna',
    'Blue Cross Blue Shield',
    'Cigna',
    'United Healthcare',
    'Humana',
    'Anthem',
    'Kaiser Permanente',
    'Other'
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #6B7B7D 0%, #4A5B5D 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 300,
              fontFamily: '"Montserrat", sans-serif',
              mb: 3,
            }}
          >
            Insurance Verification
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Verify Your Insurance Coverage and Benefits for Mental Health Treatment
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                color: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                '&:hover': {
                  bgcolor: 'primary.dark',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
                },
              }}
              startIcon={<Phone />}
              href="tel:8182086456"
            >
              Call for Immediate Verification
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderColor: 'white',
                color: 'white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                '&:hover': {
                  borderColor: 'grey.300',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                },
              }}
              startIcon={<Email />}
              href="mailto:insurance@pyramidaftercare.com"
            >
              Email Us
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        {submitted ? (
          /* Success Message */
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <CheckCircle color="success" sx={{ fontSize: 80, mb: 3 }} />
            <Typography variant="h3" gutterBottom>
              Verification Request Submitted
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 4 }}>
              Thank you for submitting your insurance information. Our team will verify your 
              benefits and contact you within 24 hours with detailed coverage information.
            </Typography>
            <Alert severity="info" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
              For immediate assistance or urgent questions, please call us at (818) 208-6456 or email insurance@pyramidaftercare.com
            </Alert>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Request
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Phone />}
                href="tel:8182086456"
              >
                Call Us Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Email />}
                href="mailto:insurance@pyramidaftercare.com"
              >
                Email Us
              </Button>
            </Box>
          </Box>
        ) : (
          <>
            {/* Introduction */}
            <Box sx={{ mb: 8, textAlign: 'center' }}>
              <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4 }}>
                Get Your Benefits Verified
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '800px', mx: 'auto' }}>
                Understanding your insurance coverage is the first step toward getting the mental health care you need. 
                Our team will verify your benefits and explain your coverage options at no cost to you.
              </Typography>
            </Box>

            {/* Benefits of Verification */}
            <Box sx={{ mb: 8 }}>
              <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
                Why Verify Your Insurance?
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
                <Card sx={{ p: 3, textAlign: 'center' }}>
                  <VerifiedUser color="primary" sx={{ fontSize: 50, mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Know Your Coverage
                  </Typography>
                  <Typography variant="body2">
                    Understand exactly what services are covered and your out-of-pocket costs
                  </Typography>
                </Card>
                <Card sx={{ p: 3, textAlign: 'center' }}>
                  <Assignment color="primary" sx={{ fontSize: 50, mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Plan Your Treatment
                  </Typography>
                  <Typography variant="body2">
                    Make informed decisions about your care based on your specific benefits
                  </Typography>
                </Card>
                <Card sx={{ p: 3, textAlign: 'center' }}>
                  <ContactSupport color="primary" sx={{ fontSize: 50, mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    No Surprises
                  </Typography>
                  <Typography variant="body2">
                    Avoid unexpected bills by knowing your coverage before starting treatment
                  </Typography>
                </Card>
              </Box>
            </Box>

            {/* Verification Form */}
            <Paper id="verification-form" sx={{ p: 6, mb: 8 }}>
              <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 4 }}>
                Insurance Verification Form
              </Typography>
              <Typography variant="body1" textAlign="center" sx={{ mb: 4, color: 'text.secondary' }}>
                Please provide your insurance information below. All information is kept strictly confidential.
              </Typography>
              
              <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '600px', mx: 'auto' }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mb: 3 }}>
                  <TextField
                    label="First Name"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                  />
                  <TextField
                    label="Last Name"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                  />
                </Box>

                <TextField
                  label="Date of Birth"
                  type="date"
                  required
                  fullWidth
                  sx={{ mb: 3 }}
                  InputLabelProps={{ shrink: true }}
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                />

                <FormControl fullWidth sx={{ mb: 3 }}>
                  <InputLabel>Insurance Provider</InputLabel>
                  <Select
                    value={formData.insuranceProvider}
                    label="Insurance Provider"
                    onChange={(e) => handleInputChange('insuranceProvider', e.target.value)}
                    required
                  >
                    {insuranceProviders.map((provider) => (
                      <MenuItem key={provider} value={provider}>
                        {provider}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mb: 3 }}>
                  <TextField
                    label="Member ID"
                    required
                    value={formData.memberId}
                    onChange={(e) => handleInputChange('memberId', e.target.value)}
                  />
                  <TextField
                    label="Group Number"
                    value={formData.groupNumber}
                    onChange={(e) => handleInputChange('groupNumber', e.target.value)}
                  />
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mb: 4 }}>
                  <TextField
                    label="Phone Number"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                  <TextField
                    label="Email Address"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{ py: 1.5, fontSize: '1.1rem' }}
                >
                  Submit for Verification
                </Button>
              </Box>
            </Paper>

            {/* What to Expect */}
            <Box sx={{ mb: 8 }}>
              <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
                What to Expect
              </Typography>
              <List sx={{ maxWidth: '800px', mx: 'auto' }}>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Quick Response"
                    secondary="We'll contact you within 24 hours with your verification results"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Detailed Breakdown"
                    secondary="Receive a clear explanation of your benefits, copays, and deductibles"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Treatment Options"
                    secondary="Learn about covered services and treatment recommendations"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Next Steps"
                    secondary="Get guidance on scheduling your first appointment"
                  />
                </ListItem>
              </List>
            </Box>

            {/* Contact Options */}
            <Box sx={{ mb: 8 }}>
              <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
                Need Help or Have Questions?
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, maxWidth: '800px', mx: 'auto' }}>
                <Paper sx={{ p: 4, textAlign: 'center' }}>
                  <Phone color="primary" sx={{ fontSize: 50, mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Call Us
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    Speak with our insurance verification specialists
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    startIcon={<Phone />}
                    href="tel:8182086456"
                  >
                    (818) 208-6456
                  </Button>
                </Paper>
                <Paper sx={{ p: 4, textAlign: 'center' }}>
                  <Email color="primary" sx={{ fontSize: 50, mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Email Us
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    Send us your insurance questions anytime
                  </Typography>
                  <Button
                    variant="outlined"
                    size="large"
                    fullWidth
                    startIcon={<Email />}
                    href="mailto:insurance@pyramidaftercare.com"
                  >
                    Email Insurance Team
                  </Button>
                </Paper>
              </Box>
            </Box>
          </>
        )}

        {/* Emergency Contact */}
        <Paper 
          sx={{ 
            p: 6, 
            textAlign: 'center', 
            bgcolor: 'error.main', 
            color: 'white',
            boxShadow: '0 8px 32px rgba(211, 47, 47, 0.3)',
            border: '2px solid',
            borderColor: 'error.dark',
          }}
        >
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              mb: 3,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            🚨 Need Immediate Help?
          </Typography>
          <Typography 
            variant="h6" 
            paragraph 
            sx={{ 
              mb: 4,
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            If you're experiencing a mental health emergency, don't wait for insurance verification.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'error.main',
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              fontWeight: 600,
              borderRadius: 3,
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              '&:hover': {
                bgcolor: 'grey.100',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
              },
              transition: 'all 0.3s ease',
            }}
            startIcon={<Phone sx={{ fontSize: '1.5rem' }} />}
            href="tel:8182086456"
          >
            Call (818) 208-6456 Now
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default InsuranceVerification;
