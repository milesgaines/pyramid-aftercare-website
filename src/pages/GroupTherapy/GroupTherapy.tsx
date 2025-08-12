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
  Group,
  Psychology,
  Support,
  Schedule,
  CheckCircle,
  Phone,
  VideoCall,
  Favorite,
  EmojiPeople,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const GroupTherapy: React.FC = () => {
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
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 600,
              fontFamily: '"Montserrat", sans-serif',
              mb: 3,
            }}
          >
            Group Therapy
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
            Connect, Share, and Heal Together in a Supportive Community Environment
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              '&:hover': {
                bgcolor: 'grey.100',
                color: 'primary.main',
                boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
              },
            }}
            onClick={() => navigate('/')}
          >
            Join Our Community
          </Button>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        {/* What is Group Therapy */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 4 }}>
            What is Group Therapy?
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            Group therapy is a form of psychotherapy where a small group of people meet regularly to discuss, 
            interact, and explore problems with each other and the group leader. It provides a safe, supportive 
            environment where participants can share experiences, learn from others, and develop new coping strategies.
          </Typography>
        </Box>

        {/* Benefits Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
            Benefits of Group Therapy
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
            <Card sx={{ height: '100%', p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Support color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h5">Peer Support</Typography>
              </Box>
              <Typography variant="body1">
                Connect with others who understand your experiences and challenges, 
                providing mutual support and encouragement.
              </Typography>
            </Card>
            <Card sx={{ height: '100%', p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Psychology color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h5">New Perspectives</Typography>
              </Box>
              <Typography variant="body1">
                Gain insights from different viewpoints and learn new coping 
                strategies from group members' experiences.
              </Typography>
            </Card>
            <Card sx={{ height: '100%', p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmojiPeople color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h5">Social Skills</Typography>
              </Box>
              <Typography variant="body1">
                Practice communication and interpersonal skills in a safe, 
                supportive environment with professional guidance.
              </Typography>
            </Card>
            <Card sx={{ height: '100%', p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Favorite color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h5">Emotional Growth</Typography>
              </Box>
              <Typography variant="body1">
                Develop greater self-awareness and emotional intelligence 
                through group interactions and feedback.
              </Typography>
            </Card>
          </Box>
        </Box>

        {/* Types of Group Therapy */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
            Our Group Therapy Programs
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom color="primary">
                Process Groups
              </Typography>
              <Typography variant="body1" paragraph>
                Focus on interpersonal dynamics and relationships, helping participants 
                understand how they relate to others and work through personal challenges.
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Relationship patterns exploration" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Communication skills development" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Emotional processing" />
                </ListItem>
              </List>
            </Paper>

            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom color="primary">
                Skills-Based Groups
              </Typography>
              <Typography variant="body1" paragraph>
                Structured sessions focused on learning specific coping strategies, 
                mindfulness techniques, and practical life skills for recovery.
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Mindfulness and meditation" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Stress management techniques" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Relapse prevention strategies" />
                </ListItem>
              </List>
            </Paper>
          </Box>
        </Box>

        {/* Schedule and Format */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
            Schedule & Format
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Schedule color="primary" sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Flexible Scheduling
              </Typography>
              <Typography variant="body1">
                Multiple group sessions throughout the week to accommodate your schedule
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Group color="primary" sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Small Groups
              </Typography>
              <Typography variant="body1">
                6-8 participants per group to ensure personalized attention and connection
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <VideoCall color="primary" sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                In-Person & Virtual
              </Typography>
              <Typography variant="body1">
                Choose from in-person sessions or secure virtual group meetings
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* CTA Section */}
        <Paper sx={{ p: 6, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to Join a Group?
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 4, fontSize: '1.1rem' }}>
            Take the first step towards healing in a supportive community environment.
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
              href="tel:8183000033"
            >
              Call (818) 300-0033
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
              Schedule Consultation
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default GroupTherapy;
