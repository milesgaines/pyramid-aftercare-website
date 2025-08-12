import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useLocation } from 'react-router-dom';

const Legal: React.FC = () => {
  const location = useLocation();

  // Function to scroll to a specific section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Check if URL has a hash and scroll to it on load
  React.useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  }, [location]);

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h1"
          component="h1"
          textAlign="center"
          gutterBottom
          sx={{ 
            mb: { xs: 4, md: 6 }, 
            fontFamily: '"Montserrat", sans-serif',
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          Legal Information
        </Typography>

        {/* Privacy Policy Section */}
        <Paper id="privacy-policy" sx={{ p: { xs: 3, md: 6 }, mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ 
              fontFamily: '"Montserrat", sans-serif', 
              color: '#6B7B7D',
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Effective Date:</strong> January 1, 2025
          </Typography>
          
          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            We collect information you provide directly to us, such as when you create an account, 
            schedule an appointment, or contact us for support. This may include:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Personal identifiers (name, email address, phone number)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Health information necessary for treatment" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Insurance and billing information" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Communication preferences" />
            </ListItem>
          </List>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph>
            We use the information we collect to:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Provide, maintain, and improve our mental health services" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Process appointments and treatment plans" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Communicate with you about your care" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Process insurance claims and billing" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Comply with legal obligations" />
            </ListItem>
          </List>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Information Sharing
          </Typography>
          <Typography variant="body1" paragraph>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
            except as described in this policy. We may share your information:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="With healthcare providers involved in your treatment" />
            </ListItem>
            <ListItem>
              <ListItemText primary="With insurance companies for claims processing" />
            </ListItem>
            <ListItem>
              <ListItemText primary="When required by law or to protect safety" />
            </ListItem>
            <ListItem>
              <ListItemText primary="With your explicit consent" />
            </ListItem>
          </List>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Data Security
          </Typography>
          <Typography variant="body1" paragraph>
            We implement appropriate technical and organizational measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction. This includes encryption of 
            sensitive data, secure transmission protocols, and regular security assessments.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            You have the right to:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Access and review your personal information" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Request corrections to inaccurate information" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Request deletion of your information (subject to legal requirements)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Opt-out of certain communications" />
            </ListItem>
          </List>
        </Paper>

        <Divider sx={{ my: 4 }} />

        {/* Terms of Service Section */}
        <Paper id="terms-of-service" sx={{ p: 6, mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ fontFamily: '"Montserrat", sans-serif', color: '#6B7B7D' }}
          >
            Terms of Service
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Effective Date:</strong> January 1, 2025
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Acceptance of Terms
          </Typography>
          <Typography variant="body1" paragraph>
            By accessing and using Pyramid After Care services, you accept and agree to be bound by the terms 
            and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Service Description
          </Typography>
          <Typography variant="body1" paragraph>
            Pyramid After Care provides mental health treatment services including but not limited to:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Intensive Outpatient Programs (IOP)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Partial Hospitalization Programs (PHP)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Individual therapy sessions" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Group therapy sessions" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Virtual and in-person treatment options" />
            </ListItem>
          </List>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Patient Responsibilities
          </Typography>
          <Typography variant="body1" paragraph>
            As a patient, you agree to:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Provide accurate and complete information" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Attend scheduled appointments or provide adequate notice of cancellation" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Follow treatment recommendations" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Respect other patients and staff" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Pay for services as agreed upon" />
            </ListItem>
          </List>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Payment and Cancellation Policy
          </Typography>
          <Typography variant="body1" paragraph>
            Payment is due at the time services are rendered unless other arrangements have been made. 
            We accept most major insurance plans. Patients are responsible for understanding their 
            insurance benefits and any applicable copays, deductibles, or coinsurance.
          </Typography>
          <Typography variant="body1" paragraph>
            Cancellation of appointments must be made at least 24 hours in advance to avoid charges.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Limitation of Liability
          </Typography>
          <Typography variant="body1" paragraph>
            Pyramid After Care shall not be liable for any direct, indirect, incidental, special, or 
            consequential damages arising from the use of our services, except as required by law.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Governing Law
          </Typography>
          <Typography variant="body1" paragraph>
            These terms shall be governed by and construed in accordance with the laws of the State of California, 
            without regard to its conflict of law provisions.
          </Typography>
        </Paper>

        <Divider sx={{ my: 4 }} />

        {/* HIPAA Notice Section */}
        <Paper id="hipaa-notice" sx={{ p: 6, mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ fontFamily: '"Montserrat", sans-serif', color: '#6B7B7D' }}
          >
            HIPAA Notice of Privacy Practices
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Effective Date:</strong> January 1, 2025
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Your Rights Regarding Your Health Information
          </Typography>
          <Typography variant="body1" paragraph>
            Under the Health Insurance Portability and Accountability Act (HIPAA), you have certain rights 
            regarding your protected health information (PHI). This notice describes your rights and our 
            legal duties regarding your health information.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            How We May Use and Disclose Your Health Information
          </Typography>
          <Typography variant="body1" paragraph>
            We may use and disclose your health information for the following purposes:
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary="Treatment" 
                secondary="We may use your health information to provide, coordinate, or manage your health care and related services."
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Payment" 
                secondary="We may use and disclose your health information to obtain payment for services provided to you."
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Health Care Operations" 
                secondary="We may use and disclose your health information for health care operations such as quality assessment and improvement activities."
              />
            </ListItem>
          </List>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Your Individual Rights
          </Typography>
          <Typography variant="body1" paragraph>
            You have the following rights regarding your health information:
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary="Right to Request Restrictions" 
                secondary="You may request that we restrict how we use or disclose your health information."
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Right to Access" 
                secondary="You have the right to inspect and copy your health information."
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Right to Amend" 
                secondary="You may request that we amend your health information if you believe it is incorrect or incomplete."
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Right to an Accounting" 
                secondary="You have the right to receive a list of disclosures we have made of your health information."
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Right to Request Confidential Communications" 
                secondary="You may request that we communicate with you about your health information in a certain way or at a certain location."
              />
            </ListItem>
          </List>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Complaints
          </Typography>
          <Typography variant="body1" paragraph>
            If you believe your privacy rights have been violated, you may file a complaint with us or with the 
            Secretary of the Department of Health and Human Services. You will not be retaliated against for 
            filing a complaint.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Contact Information
          </Typography>
          <Typography variant="body1" paragraph>
            For more information about our privacy practices or to exercise your rights, please contact our 
            Privacy Officer at:
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Phone:</strong> <a href="tel:8182086456" style={{ color: 'inherit', textDecoration: 'none' }}>(818) 208-6456</a><br />
            <strong>Email:</strong> <a href="mailto:info@pyramidaftercare.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@pyramidaftercare.com</a>
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Changes to This Notice
          </Typography>
          <Typography variant="body1" paragraph>
            We reserve the right to change our privacy practices and this notice. Any changes will be effective 
            for all health information we maintain, including information created or received before the change.
          </Typography>
        </Paper>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="body2" color="text.secondary">
            Last updated: January 1, 2025
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            If you have any questions about these policies, please contact us at <a href="tel:8182086456" style={{ color: 'inherit' }}>(818) 208-6456</a> or <a href="mailto:info@pyramidaftercare.com" style={{ color: 'inherit' }}>info@pyramidaftercare.com</a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Legal;
