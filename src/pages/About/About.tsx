import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  Paper,
  useTheme,
} from '@mui/material';
import {
  Psychology,
  Groups,
  SupportAgent,
  LocalHospital,
} from '@mui/icons-material';

const About: React.FC = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 3,
            color: theme.palette.text.primary,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          About Pyramid After Care
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.text.secondary,
            mb: 4,
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          Dedicated to providing comprehensive recovery support through personalized
          treatment programs and compassionate care.
        </Typography>
        
        {/* Hero Image */}
        <Box
          sx={{
            mt: 4,
            mb: 6,
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: theme.shadows[8],
            maxWidth: '900px',
            mx: 'auto',
          }}
        >
          <img
            src="/images/THERAPY LIGHT.jpg"
            alt="Therapy session at Pyramid After Care"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </Box>
      </Box>

      {/* Mission Section */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 600,
            mb: 4,
            textAlign: 'center',
            color: theme.palette.primary.main,
          }}
        >
          Our Mission
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.2rem',
            lineHeight: 1.8,
            color: theme.palette.text.primary,
            textAlign: 'center',
            maxWidth: '900px',
            mx: 'auto',
          }}
        >
          At Pyramid After Care, we believe in the power of comprehensive, personalized
          treatment that addresses the whole person. Our mission is to provide
          evidence-based recovery programs that empower individuals to build lasting
          sobriety and reclaim their lives with dignity and purpose.
        </Typography>
      </Box>

      {/* Photo Gallery Section */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 600,
            mb: 6,
            textAlign: 'center',
            color: theme.palette.primary.main,
          }}
        >
          Our Treatment Environment
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: theme.shadows[6],
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: theme.shadows[12],
                },
              }}
            >
              <img
                src="/images/GROUP THERAPY.jpeg"
                alt="Group therapy session"
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Group Therapy Sessions
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  Supportive group environment where individuals share experiences and grow together
                </Typography>
              </Box>
            </Paper>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: theme.shadows[6],
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: theme.shadows[12],
                },
              }}
            >
              <img
                src="/images/THERAPY DARK.jpeg"
                alt="Individual therapy setting"
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Individual Therapy
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  Personalized one-on-one sessions tailored to each individual's unique needs
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Values Section */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 600,
            mb: 6,
            textAlign: 'center',
            color: theme.palette.primary.main,
          }}
        >
          Our Core Values
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              sx={{
                height: '100%',
                textAlign: 'center',
                p: 3,
                boxShadow: theme.shadows[3],
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[8],
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 2,
                  color: theme.palette.primary.main,
                }}
              >
                <Psychology sx={{ fontSize: '3rem' }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Compassion
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                We approach every individual with empathy, understanding, and genuine care
                for their unique journey to recovery.
              </Typography>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              sx={{
                height: '100%',
                textAlign: 'center',
                p: 3,
                boxShadow: theme.shadows[3],
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[8],
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 2,
                  color: theme.palette.primary.main,
                }}
              >
                <LocalHospital sx={{ fontSize: '3rem' }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Excellence
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                We maintain the highest standards in clinical care, utilizing
                evidence-based practices and innovative treatment approaches.
              </Typography>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              sx={{
                height: '100%',
                textAlign: 'center',
                p: 3,
                boxShadow: theme.shadows[3],
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[8],
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 2,
                  color: theme.palette.primary.main,
                }}
              >
                <Groups sx={{ fontSize: '3rem' }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Community
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                We foster a supportive community environment where individuals can
                connect, share experiences, and grow together.
              </Typography>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              sx={{
                height: '100%',
                textAlign: 'center',
                p: 3,
                boxShadow: theme.shadows[3],
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[8],
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 2,
                  color: theme.palette.primary.main,
                }}
              >
                <SupportAgent sx={{ fontSize: '3rem' }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Support
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                We provide continuous support through every stage of recovery,
                ensuring no one walks this journey alone.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Commitment Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.grey[50],
          borderRadius: 3,
          p: 6,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 600,
            mb: 4,
            color: theme.palette.primary.main,
          }}
        >
          Our Commitment
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.2rem',
            lineHeight: 1.8,
            color: theme.palette.text.primary,
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          We are committed to walking alongside each individual on their path to recovery,
          providing the tools, support, and hope needed to build a fulfilling life in
          sobriety. Our comprehensive programs are designed to address not just addiction,
          but the whole person - mind, body, and spirit.
        </Typography>
      </Box>

      {/* Additional Visual Section */}
      <Box sx={{ mb: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: theme.shadows[6],
              }}
            >
              <img
                src="/images/VIRTUAL THERAPY.jpg.webp"
                alt="Virtual therapy session"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: theme.palette.primary.main,
              }}
            >
              Flexible Treatment Options
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: theme.palette.text.primary,
                mb: 3,
              }}
            >
              We understand that recovery looks different for everyone. That's why we offer
              both in-person and virtual therapy options, ensuring that quality care is
              accessible regardless of your circumstances or location.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: theme.palette.text.primary,
              }}
            >
              Our state-of-the-art virtual platform provides the same level of clinical
              excellence and personal connection as our in-person sessions, giving you
              the flexibility to engage in treatment that fits your lifestyle.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
