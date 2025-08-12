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
  MedicalServices,
  LocalHospital,
  Phone,
  Timeline,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const PHPProgram: React.FC = () => {
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
            }}
          >
            Partial Hospitalization Program (PHP)
          </Typography>
                    <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              color: 'white',
              lineHeight: 1.6,
            }}
          >
            Intensive day treatment providing hospital-level care while allowing you to return home each evening
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
          What is PHP?
        </Typography>
        
        <Card sx={{ mb: 6, p: 4 }}>
          <CardContent>
            <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8, mb: 4 }}>
              Partial Hospitalization Programs (PHP) offer the most intensive level of outpatient care available. 
              PHP provides comprehensive, structured treatment that bridges the gap between inpatient hospitalization 
              and traditional outpatient therapy. This program is designed for individuals who need intensive daily 
              support but can safely return home each evening.
            </Typography>
            
            <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
              PHP typically involves 20-30 hours of treatment per week, 5-7 days a week, providing comprehensive 
              therapeutic intervention, medical monitoring, and psychiatric care in a structured day-treatment setting.
            </Typography>
          </CardContent>
        </Card>

        {/* Program vs IOP Comparison */}
        <Typography
          variant="h3"
          component="h3"
          textAlign="center"
          gutterBottom
          sx={{ mb: 4, fontFamily: '"Montserrat", sans-serif' }}
        >
          PHP vs IOP: Understanding the Difference
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, mb: 6 }}>
          <Paper sx={{ p: 4, height: '100%', bgcolor: '#f8f9fa' }}>
            <LocalHospital color="primary" sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h5" gutterBottom sx={{ fontFamily: '"Montserrat", sans-serif' }}>
              PHP (Partial Hospitalization)
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><Timeline color="primary" /></ListItemIcon>
                <ListItemText primary="20-30 hours per week" secondary="5-7 days per week" />
              </ListItem>
              <ListItem>
                <ListItemIcon><MedicalServices color="primary" /></ListItemIcon>
                <ListItemText primary="Hospital-level intensity" secondary="Comprehensive medical monitoring" />
              </ListItem>
              <ListItem>
                <ListItemIcon><Psychology color="primary" /></ListItemIcon>
                <ListItemText primary="Crisis stabilization focus" secondary="Acute symptom management" />
              </ListItem>
            </List>
          </Paper>
          
          <Paper sx={{ p: 4, height: '100%', bgcolor: '#f1f8e9' }}>
            <Group color="secondary" sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h5" gutterBottom sx={{ fontFamily: '"Montserrat", sans-serif' }}>
              IOP (Intensive Outpatient)
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><Schedule color="secondary" /></ListItemIcon>
                <ListItemText primary="9-12 hours per week" secondary="3-4 days per week" />
              </ListItem>
              <ListItem>
                <ListItemIcon><Group color="secondary" /></ListItemIcon>
                <ListItemText primary="Maintenance and growth" secondary="Skills development focus" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="secondary" /></ListItemIcon>
                <ListItemText primary="Greater independence" secondary="Work/school integration" />
              </ListItem>
            </List>
          </Paper>
        </Box>

        {/* Program Structure */}
        <Typography
          variant="h3"
          component="h3"
          textAlign="center"
          gutterBottom
          sx={{ mb: 4, fontFamily: '"Montserrat", sans-serif' }}
        >
          PHP Program Structure
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, mb: 6 }}>
          <Paper sx={{ p: 4 }}>
            <Schedule color="primary" sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h5" gutterBottom sx={{ fontFamily: '"Montserrat", sans-serif' }}>
              Daily Schedule
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
                <ListItemText primary="5-7 days per week" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
                <ListItemText primary="4-6 hours per day" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
                <ListItemText primary="Morning or afternoon programs" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
                <ListItemText primary="Typically 2-6 weeks duration" />
              </ListItem>
            </List>
          </Paper>

          <Paper sx={{ p: 4 }}>
            <MedicalServices color="primary" sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h5" gutterBottom sx={{ fontFamily: '"Montserrat", sans-serif' }}>
              Treatment Components
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
                <ListItemText primary="Daily psychiatric evaluation" />
              </ListItem>
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
                <ListItemText primary="Medication management" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
                <ListItemText primary="Crisis intervention services" />
              </ListItem>
            </List>
          </Paper>
        </Box>

        {/* Who Needs PHP */}
        <Typography
          variant="h3"
          component="h3"
          textAlign="center"
          gutterBottom
          sx={{ mb: 4, fontFamily: '"Montserrat", sans-serif' }}
        >
          Who Needs PHP?
        </Typography>

        <Card sx={{ mb: 6, p: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: '"Montserrat", sans-serif' }}>
              PHP is recommended for individuals who:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><LocalHospital color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Are stepping down from inpatient hospitalization"
                  secondary="Need continued intensive support after hospital discharge"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><Psychology color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Are experiencing acute mental health symptoms"
                  secondary="Require intensive daily monitoring and intervention"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><MedicalServices color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Need an alternative to hospitalization"
                  secondary="Can benefit from intensive treatment while living at home"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><Timeline color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Require rapid stabilization"
                  secondary="Need immediate, comprehensive intervention for safety"
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
          Conditions We Treat in PHP
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2, mb: 6 }}>
          <List>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Major depressive episodes" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Bipolar disorder (manic/depressive episodes)" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Severe anxiety and panic disorders" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Psychotic disorders" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Acute PTSD and trauma responses" />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Suicidal ideation (with safety plan)" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Severe substance use disorders" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Dual diagnosis conditions" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Borderline personality disorder" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText primary="Severe eating disorders" />
            </ListItem>
          </List>
        </Box>

        {/* Benefits of PHP */}
        <Typography
          variant="h3"
          component="h3"
          textAlign="center"
          gutterBottom
          sx={{ mb: 4, fontFamily: '"Montserrat", sans-serif' }}
        >
          Benefits of PHP
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3, mb: 6 }}>
          <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <LocalHospital color="primary" sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h6" gutterBottom sx={{ fontFamily: '"Montserrat", sans-serif' }}>
              Hospital-Level Care
            </Typography>
            <Typography variant="body2">
              Receive intensive, comprehensive treatment equivalent to inpatient care while maintaining independence
            </Typography>
          </Card>
          <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <Schedule color="primary" sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h6" gutterBottom sx={{ fontFamily: '"Montserrat", sans-serif' }}>
              Cost-Effective
            </Typography>
            <Typography variant="body2">
              More affordable than inpatient treatment while providing similar levels of clinical intensity and support
            </Typography>
          </Card>
          <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <Group color="primary" sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h6" gutterBottom sx={{ fontFamily: '"Montserrat", sans-serif' }}>
              Family Connection
            </Typography>
            <Typography variant="body2">
              Return home each evening to maintain family relationships and practice new skills in real-world settings
            </Typography>
          </Card>
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
            Get Immediate Support
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Our PHP provides intensive care when you need it most, while keeping you connected to home
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

export default PHPProgram;
