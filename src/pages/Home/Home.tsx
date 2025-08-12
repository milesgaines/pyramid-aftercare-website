import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  VideoCall,
  Group,
  Schedule,
  Security,
  CheckCircle,
  Phone,
  Email,
  LocationOn,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import InsuranceCarousel from '../../components/InsuranceCarousel/InsuranceCarousel';
import VideoHero from '../../components/VideoHero/VideoHero';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/insurance-verification#verification-form');
  };

  return (
    <Box>
      {/* Video Hero Section with Logo */}
      <VideoHero />
      
      {/* CTA Section below Video Hero */}
      <Container maxWidth="lg" sx={{ textAlign: 'center', my: { xs: 4, md: 6 }, px: { xs: 2, sm: 3 } }}>
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 500,
              letterSpacing: '-0.02em',
              mb: 3
            }}
          >
            Transform Your Recovery Journey
          </Typography>
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom 
            sx={{ 
              mb: 4, 
              fontWeight: 400,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.5
            }}
          >
            Experience comprehensive virtual and in-person mental health treatment 
            including IOP & PHP programs designed for lasting recovery and sustainable wellness.
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 2, md: 3 }, 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            mt: { xs: 4, md: 6 },
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            maxWidth: { xs: '100%', sm: 'auto' }
          }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleGetStarted}
              sx={{ 
                px: { xs: 4, md: 5 }, 
                py: 2,
                fontSize: { xs: '1rem', md: '1.1rem' },
                borderRadius: 3,
                boxShadow: '0 6px 24px rgba(107, 123, 125, 0.3)',
                minWidth: { xs: '200px', sm: 'auto' },
                '&:hover': {
                  boxShadow: '0 8px 32px rgba(107, 123, 125, 0.4)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Begin Your Journey
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<VideoCall />}
              onClick={() => navigate('/virtual-meeting/demo')}
              sx={{ 
                px: 5, 
                py: 2,
                fontSize: '1.1rem',
                borderRadius: 3,
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              Explore Virtual Care
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom
            sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 300, mb: 3 }}
          >
            Structured Programs for Lasting Recovery
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ fontSize: '1.1rem', maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
          >
            Evidence-based treatment programs designed with medical supervision 
            and tailored therapy for effective progress.
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, mb: 8 }}>
          <Card sx={{ 
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            border: 'none',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
          }}>
            <CardMedia
              component="img"
              height="280"
              image="/images/GROUP THERAPY.jpeg"
              alt="Structured PHP for lasting recovery"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ p: 4, flexGrow: 1 }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 500, mb: 2 }}>
                Structured PHP for lasting recovery
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                Receive daily, evidence-based care with medical supervision and tailored therapy. 
                Our program ensures a stable, supportive environment for effective progress.
              </Typography>
              <Button 
                variant="contained" 
                onClick={() => navigate('/programs/php')}
                sx={{ 
                  borderRadius: 2,
                  px: 3,
                  py: 1.5,
                  background: 'linear-gradient(135deg, #6B7B7D 0%, #7FB069 100%)',
                }}
              >
                Learn more
              </Button>
            </CardContent>
          </Card>

          <Card sx={{ 
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            border: 'none',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
          }}>
            <CardMedia
              component="img"
              height="280"
              image="/images/THERAPY LIGHT.jpg"
              alt="Flexible IOP for busy lives"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ p: 4, flexGrow: 1 }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 500, mb: 2 }}>
                Flexible IOP for busy lives
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                Access intensive therapy and ongoing support while maintaining your routine. 
                Group and individual sessions focus on relapse prevention and sustainable outcomes.
              </Typography>
              <Button 
                variant="contained" 
                onClick={() => navigate('/programs/iop')}
                sx={{ 
                  borderRadius: 2,
                  px: 3,
                  py: 1.5,
                  background: 'linear-gradient(135deg, #7FB069 0%, #6B7B7D 100%)',
                }}
              >
                Discover IOP
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 600 }}>
            Why Choose Pyramid After Care?
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
            We provide comprehensive, evidence-based treatment programs with the flexibility 
            and support you need for successful recovery.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: 1 }}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Evidence-based treatment approaches" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Licensed and experienced professionals" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Flexible scheduling options" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Insurance verification assistance" />
                </ListItem>
              </List>
            </Box>

            <Box sx={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 3 }}>
              <Paper sx={{ p: 3, textAlign: 'center' }}>
                <VideoCall color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Virtual Care</Typography>
                <Typography variant="body2" color="text.secondary">
                  Secure online sessions
                </Typography>
              </Paper>
              <Paper sx={{ p: 3, textAlign: 'center' }}>
                <Group color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Group Therapy</Typography>
                <Typography variant="body2" color="text.secondary">
                  Peer support programs
                </Typography>
              </Paper>
              <Paper sx={{ p: 3, textAlign: 'center' }}>
                <Schedule color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Flexible Hours</Typography>
                <Typography variant="body2" color="text.secondary">
                  Convenient scheduling
                </Typography>
              </Paper>
              <Paper sx={{ p: 3, textAlign: 'center' }}>
                <Security color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>HIPAA Secure</Typography>
                <Typography variant="body2" color="text.secondary">
                  Privacy protected
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Insurance Carousel Section */}
      <InsuranceCarousel />

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper sx={{ p: 6, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ color: 'white !important', fontWeight: 600 }}>
            Ready to Start Your Recovery Journey?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: 'white !important', opacity: 0.9, fontWeight: 500 }}>
            Take the first step towards healing with our comprehensive treatment programs
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              onClick={handleGetStarted}
              sx={{ 
                px: 4, 
                py: 1.5,
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                },
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              color="inherit"
              onClick={() => navigate('/insurance-verification#verification-form')}
              sx={{ 
                px: 4, 
                py: 1.5, 
                borderColor: 'white', 
                color: 'white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                '&:hover': {
                  boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                },
              }}
            >
              Verify Insurance
            </Button>
          </Box>
        </Paper>
      </Container>

      {/* Contact Section */}
      <Box sx={{ bgcolor: 'grey.100', py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontSize: { xs: '1.75rem', md: '2.125rem' }, fontWeight: 600 }}>
            Contact Us
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, 
            gap: { xs: 4, md: 6 }, 
            mt: 4,
            justifyItems: 'center'
          }}>
            <Box sx={{ 
              textAlign: 'center',
              minWidth: { xs: '250px', sm: '200px' },
              maxWidth: { xs: '300px', sm: 'none' }
            }}>
              <Phone color="primary" sx={{ fontSize: { xs: 36, md: 40 }, mb: 2 }} />
              <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 600 }}>Call Us</Typography>
              <Typography 
                variant="body1" 
                component="a" 
                href="tel:8182086456"
                sx={{ 
                  color: 'inherit', 
                  textDecoration: 'none',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  '&:hover': {
                    color: 'primary.main',
                    textDecoration: 'underline',
                  }
                }}
              >
                (818) 208-6456
              </Typography>
            </Box>
            <Box sx={{ 
              textAlign: 'center',
              minWidth: { xs: '250px', sm: '200px' },
              maxWidth: { xs: '300px', sm: 'none' }
            }}>
              <Email color="primary" sx={{ fontSize: { xs: 36, md: 40 }, mb: 2 }} />
              <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 600 }}>Email Us</Typography>
              <Typography 
                variant="body1" 
                component="a" 
                href="mailto:info@pyramidaftercare.com"
                sx={{ 
                  color: 'inherit', 
                  textDecoration: 'none',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  '&:hover': {
                    color: 'primary.main',
                    textDecoration: 'underline',
                  }
                }}
              >
                info@pyramidaftercare.com
              </Typography>
            </Box>
            <Box sx={{ 
              textAlign: 'center',
              minWidth: { xs: '250px', sm: '200px' },
              maxWidth: { xs: '300px', sm: 'none' }
            }}>
              <LocationOn color="primary" sx={{ fontSize: { xs: 36, md: 40 }, mb: 2 }} />
              <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 600 }}>Visit Us</Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>Available Nationwide</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
