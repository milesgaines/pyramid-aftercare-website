import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Button,
} from '@mui/material';
import {
  CheckCircle,
  Schedule,
  Group,
  Psychology,
  HealthAndSafety,
  Phone,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const IOPProgram: React.FC = () => {
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
              fontWeight: 300,
              fontFamily: '"Montserrat", sans-serif',
              mb: 3,
              color: 'white',
            }}
          >
            Intensive Outpatient Program (IOP)
          </Typography>
                    <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              color: 'white',
              lineHeight: 1.6,
            }}
          >
            Comprehensive mental health treatment that allows you to maintain your daily routine while receiving intensive therapeutic support
          </Typography>
        </Container>
      </Box>

      {/* Program Overview */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 300,
            color: 'primary.main',
            mb: 3
          }}
        >
          What is IOP?
        </Typography>
        
        <Card sx={{ mb: 6, p: 4 }}>
          <CardContent>
            <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8, mb: 4 }}>
              Intensive Outpatient Programs (IOP) provide structured, comprehensive mental health treatment 
              while allowing individuals to live at home and maintain work, school, or family responsibilities. 
              Our IOP offers a step-down level of care from inpatient or residential treatment, or can serve 
              as an alternative to more intensive services.
            </Typography>
            
            <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
              IOP typically involves 9-12 hours of treatment per week, spread across 3-4 days. This schedule 
              provides intensive therapeutic intervention while preserving the flexibility needed for daily life activities.
            </Typography>
          </CardContent>
        </Card>

        {/* Program Structure */}
        <Typography
          variant="h3"
          component="h3"
          textAlign="center"
          gutterBottom
          sx={{ mb: 4, fontFamily: '"Montserrat", sans-serif' }}
        >
          Program Structure
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, mb: 6 }}>
          <Paper sx={{ p: 4 }}>
            <Schedule color="primary" sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h5" gutterBottom sx={{ fontFamily: '"Montserrat", sans-serif' }}>
              Schedule
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
                <ListItemText primary="3-4 days per week" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
                <ListItemText primary="3-4 hours per day" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
                <ListItemText primary="Flexible morning or evening sessions" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
                <ListItemText primary="Typically 8-12 weeks duration" />
              </ListItem>
            </List>
          </Paper>

          <Paper sx={{ p: 4 }}>
            <Group color="primary" sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h5" gutterBottom sx={{ fontFamily: '"Montserrat", sans-serif' }}>
              Treatment Components
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
                <ListItemText primary="Group therapy sessions" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
                <ListItemText primary="Individual counseling" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
                <ListItemText primary="Family therapy (when appropriate)" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
                <ListItemText primary="Psychiatric evaluation & medication management" />
              </ListItem>
            </List>
          </Paper>
        </Box>

        {/* Who Benefits */}
        <Typography
          variant="h3"
          component="h3"
          textAlign="center"
          gutterBottom
          sx={{ mb: 4, fontFamily: '"Montserrat", sans-serif' }}
        >
          Who Benefits from IOP?
        </Typography>

        <Card sx={{ mb: 6, p: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: '"Montserrat", sans-serif' }}>
              IOP is ideal for individuals who:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><Psychology color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Need intensive treatment but can safely live at home"
                  secondary="Suitable for those with stable housing and support systems"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><HealthAndSafety color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Are stepping down from higher levels of care"
                  secondary="Transitioning from inpatient, residential, or PHP treatment"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><Schedule color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Have work, school, or family commitments"
                  secondary="Need to maintain daily responsibilities while receiving treatment"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><Group color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Benefit from peer support and group dynamics"
                  secondary="Learn from others with similar experiences and challenges"
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        {/* Conditions Treated */}
        <Typography
          variant="h3"
          component="h3"
          textAlign="center"
          gutterBottom
          sx={{ mb: 4, fontFamily: '"Montserrat", sans-serif' }}
        >
          Conditions We Treat
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2, mb: 6 }}>
          <List>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Depression and mood disorders" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Anxiety disorders" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Bipolar disorder" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="PTSD and trauma disorders" />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Substance use disorders" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Dual diagnosis conditions" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Personality disorders" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Eating disorders" />
            </ListItem>
          </List>
        </Box>

        {/* Call to Action */}
        <Paper 
          sx={{ 
            p: 6, 
            textAlign: 'center', 
            background: 'linear-gradient(135deg, #6B7B7D 0%, #4A5B5D 100%)',
            color: 'white' 
          }}
        >
          <Typography variant="h4" component="h3" gutterBottom sx={{ fontFamily: '"Montserrat", sans-serif' }}>
            Take the Next Step
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Our IOP program provides the support you need while maintaining your independence
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              startIcon={<Phone />}
              sx={{ px: 4, py: 1.5 }}
            >
              Call (818) 208-6456
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
    </Box>
  );
};

export default IOPProgram;
