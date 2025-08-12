import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const AdminPortal: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Portal
      </Typography>
      <Typography variant="body1">
        Admin portal with patient management, scheduling, and analytics will be implemented here.
      </Typography>
    </Container>
  );
};

export default AdminPortal;
