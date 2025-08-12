import React from 'react';
import { Container, Typography } from '@mui/material';

const PatientPortal: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Patient Portal
      </Typography>
      <Typography variant="body1">
        Patient portal with appointment scheduling, virtual meetings, and progress tracking will be implemented here.
      </Typography>
    </Container>
  );
};

export default PatientPortal;
