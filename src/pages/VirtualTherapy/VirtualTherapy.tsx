import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Button,
} from '@mui/material';
import {
  VideoCall,
  Security,
  Schedule,
  CheckCircle,
  Phone,
  Wifi,
  PersonalVideo,
  HealthAndSafety,
  AccessTime,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const VirtualTherapy: React.FC = () => {
  const navigate = useNavigate();

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
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 300,
            color: 'white',
            mb: 3
          }}
        >
            Virtual Therapy
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
            Professional Mental Health Care from the Comfort and Privacy of Your Home
          </Typography>
                    <Button
            variant="contained"
            size="large"
            sx={{
              mt: 4,
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
            onClick={() => navigate('/virtual-meeting')}
          >
            Start Virtual Session
          </Button>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        {/* What is Virtual Therapy */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 4 }}>
            What is Virtual Therapy?
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            Virtual therapy, also known as teletherapy or online counseling, provides the same high-quality mental health 
            care as traditional in-person therapy through secure video conferencing technology. Our licensed therapists 
            offer personalized treatment plans delivered directly to your preferred location.
          </Typography>
        </Box>

        {/* Benefits Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
            Benefits of Virtual Therapy
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
            <Card sx={{ height: '100%', p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccessTime color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h5">Convenience</Typography>
              </Box>
              <Typography variant="body1">
                No travel time, no waiting rooms. Access therapy from your home, 
                office, or any private location with internet connection.
              </Typography>
            </Card>
            <Card sx={{ height: '100%', p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Security color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h5">Privacy & Security</Typography>
              </Box>
              <Typography variant="body1">
                HIPAA-compliant platform ensures your sessions are private and secure, 
                with end-to-end encryption protecting your information.
              </Typography>
            </Card>
            <Card sx={{ height: '100%', p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Schedule color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h5">Flexible Scheduling</Typography>
              </Box>
              <Typography variant="body1">
                More appointment times available, including evening and weekend options 
                to fit your busy lifestyle.
              </Typography>
            </Card>
            <Card sx={{ height: '100%', p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <HealthAndSafety color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h5">Comfort Zone</Typography>
              </Box>
              <Typography variant="body1">
                Many clients feel more comfortable and open when in their familiar 
                environment, leading to more effective therapy sessions.
              </Typography>
            </Card>
          </Box>
        </Box>

        {/* How it Works */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
            How Virtual Therapy Works
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <PersonalVideo color="primary" sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                1. Schedule Session
              </Typography>
              <Typography variant="body1">
                Book your appointment online or by phone at your preferred time
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Wifi color="primary" sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                2. Join Securely
              </Typography>
              <Typography variant="body1">
                Connect through our HIPAA-compliant platform with a simple click
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <VideoCall color="primary" sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                3. Start Therapy
              </Typography>
              <Typography variant="body1">
                Engage in your session with full video and audio interaction
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Technology Requirements */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
            What You Need
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom color="primary">
                Technology Requirements
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Stable internet connection (broadband recommended)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Computer, tablet, or smartphone with camera" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Microphone and speakers (or headphones)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Updated web browser or mobile app" />
                </ListItem>
              </List>
            </Paper>

            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom color="primary">
                Environment Setup
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Private, quiet space where you won't be interrupted" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Good lighting so your therapist can see you clearly" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Comfortable seating arrangement" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Backup plan in case of technical difficulties" />
                </ListItem>
              </List>
            </Paper>
          </Box>
        </Box>

        {/* Services Available */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
            Virtual Services Available
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>Individual Therapy</Typography>
              <Typography variant="body2" color="text.secondary">
                One-on-one sessions with licensed therapists
              </Typography>
            </Paper>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>Group Therapy</Typography>
              <Typography variant="body2" color="text.secondary">
                Virtual group sessions with peer support
              </Typography>
            </Paper>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>Family Therapy</Typography>
              <Typography variant="body2" color="text.secondary">
                Family sessions from multiple locations
              </Typography>
            </Paper>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>Crisis Support</Typography>
              <Typography variant="body2" color="text.secondary">
                Emergency virtual sessions when needed
              </Typography>
            </Paper>
          </Box>
        </Box>

        {/* CTA Section */}
        <Paper sx={{ p: 6, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to Start Virtual Therapy?
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 4, fontSize: '1.1rem' }}>
            Experience the convenience and effectiveness of professional therapy from home.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                px: 4,
                py: 1.5,
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                '&:hover': {
                  bgcolor: 'grey.100',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
                },
              }}
              startIcon={<Phone />}
              href="tel:8182086456"
            >
              Call (818) 208-6456
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                '&:hover': {
                  borderColor: 'grey.300',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                },
              }}
              onClick={() => navigate('/virtual-meeting')}
            >
              Schedule Online
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default VirtualTherapy;
