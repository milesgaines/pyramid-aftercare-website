import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#2C3E40',
        color: 'white',
        pt: 6,
        pb: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr 2fr' },
            gap: 4,
            mb: 6,
          }}
        >
          {/* Company Info */}
          <Box>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{ fontWeight: 300, letterSpacing: '-0.01em' }}
            >
              PYRAMID AFTER CARE
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 3, lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.8)' }}
            >
              Comprehensive virtual and in-person mental health treatment 
              designed for lasting recovery and sustainable wellness.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                component="a"
                href="https://facebook.com/pyramidaftercare"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                <Facebook />
              </IconButton>
              <IconButton 
                component="a"
                href="https://twitter.com/pyramidaftercare"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                <Twitter />
              </IconButton>
              <IconButton 
                component="a"
                href="https://linkedin.com/company/pyramidaftercare"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton 
                component="a"
                href="https://instagram.com/pyramidaftercare"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              sx={{ fontWeight: 500, mb: 2 }}
            >
              Programs
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                component={RouterLink}
                to="/programs/iop"
                color="inherit"
                underline="hover"
                sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Intensive Outpatient (IOP)
              </Link>
              <Link
                component={RouterLink}
                to="/programs/php"
                color="inherit"
                underline="hover"
                sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Partial Hospitalization (PHP)
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Virtual Therapy
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Group Therapy
              </Link>
            </Box>
          </Box>

          {/* Services */}
          <Box>
            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              sx={{ fontWeight: 500, mb: 2 }}
            >
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Insurance Verification
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Patient Portal
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Virtual Meetings
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                24/7 Support
              </Link>
            </Box>
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              sx={{ fontWeight: 500, mb: 2 }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ fontSize: 20, color: 'rgba(255, 255, 255, 0.7)' }} />
                <Typography 
                  component="a" 
                  href="tel:8183000033"
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'white',
                      textDecoration: 'underline',
                    }
                  }}
                >
                  (818) 300-0033
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email sx={{ fontSize: 20, color: 'rgba(255, 255, 255, 0.7)' }} />
                <Typography 
                  component="a" 
                  href="mailto:info@pyramidaftercare.com"
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'white',
                      textDecoration: 'underline',
                    }
                  }}
                >
                  info@pyramidaftercare.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOn sx={{ fontSize: 20, color: 'rgba(255, 255, 255, 0.7)' }} />
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Available Nationwide
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Accreditation Logos Section */}
        <Box sx={{ mt: 6, mb: 4 }}>
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mb: 4 }} />
          <Typography
            variant="h6"
            component="h4"
            textAlign="center"
            gutterBottom
            sx={{ 
              fontWeight: 400, 
              mb: 3,
              color: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            Accreditations & Certifications
          </Typography>
          
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 4,
              flexWrap: 'wrap',
            }}
          >
            {/* Joint Commission Logo */}
            <Box
              sx={{
                bgcolor: 'white',
                borderRadius: 2,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '180px',
                height: '80px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.25)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <Box
                component="img"
                src="/images/the-joint-commission-logo-726A3601A3-seeklogo.webp"
                alt="Joint Commission Accredited"
                sx={{
                  height: '60px',
                  width: 'auto',
                  maxWidth: '160px',
                  objectFit: 'contain',
                }}
              />
            </Box>

            <Box
              sx={{
                bgcolor: 'white',
                borderRadius: 2,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '180px',
                height: '80px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.25)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <Box
                component="img"
                src="/images/AssistedLivingWaiverMaryland.png"
                alt="DHCS Certified"
                sx={{
                  height: '60px',
                  width: 'auto',
                  maxWidth: '160px',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Box>

          <Typography
            variant="body2"
            textAlign="center"
            sx={{ 
              mt: 3, 
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.9rem'
            }}
          >
            Our facility is accredited by The Joint Commission and certified by the 
            California Department of Health Care Services (DHCS), ensuring the highest standards of care.
          </Typography>
        </Box>

        {/* Bottom Bar */}
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', my: 3 }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: 'rgba(255, 255, 255, 0.6)' }}
          >
            © 2025 Pyramid After Care. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              component={RouterLink}
              to="/legal#privacy-policy"
              color="inherit"
              underline="hover"
              sx={{ 
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '0.875rem'
              }}
            >
              Privacy Policy
            </Link>
            <Link
              component={RouterLink}
              to="/legal#terms-of-service"
              color="inherit"
              underline="hover"
              sx={{ 
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '0.875rem'
              }}
            >
              Terms of Service
            </Link>
            <Link
              component={RouterLink}
              to="/legal#hipaa-notice"
              color="inherit"
              underline="hover"
              sx={{ 
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '0.875rem'
              }}
            >
              HIPAA Notice
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
