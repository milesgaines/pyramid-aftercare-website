import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  LinearProgress,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
} from '@mui/material';
import {
  CheckCircle,
  Cancel,
  Info,
  ExpandMore,
  LocalHospital,
  Security,
  AttachMoney,
  Person,
  Phone,
  Email,
} from '@mui/icons-material';

interface InsuranceInfo {
  provider: string;
  memberId: string;
  groupNumber: string;
  subscriberName: string;
  dateOfBirth: string;
  relationship: string;
}

interface VerificationResult {
  isActive: boolean;
  coverageType: string;
  deductible: number;
  deductibleMet: number;
  copay: number;
  coinsurance: number;
  outOfPocketMax: number;
  outOfPocketMet: number;
  mentalHealthCoverage: boolean;
  substanceAbuseCoverage: boolean;
  effectiveDate: string;
  terminationDate?: string;
  priorAuthRequired: boolean;
  networkStatus: 'in-network' | 'out-of-network';
  estimatedCostPerSession: number;
}

const InsuranceVerification: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [insuranceInfo, setInsuranceInfo] = useState<InsuranceInfo>({
    provider: '',
    memberId: '',
    groupNumber: '',
    subscriberName: '',
    dateOfBirth: '',
    relationship: 'self',
  });
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');

  const insuranceProviders = [
    'Aetna',
    'Anthem', 
    'Blue Cross Blue Shield',
    'Cigna',
    'Humana',
    'Kaiser Permanente',
    'Medicaid',
    'Medicare',
    'UnitedHealthcare',
    'Other',
  ];

  const steps = [
    'Insurance Information',
    'Verification',
    'Coverage Details',
  ];

  const handleInputChange = (field: keyof InsuranceInfo, value: string) => {
    setInsuranceInfo(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleVerifyInsurance = async () => {
    setIsVerifying(true);
    setError('');

    // Validate required fields
    if (!insuranceInfo.provider || !insuranceInfo.memberId || !insuranceInfo.subscriberName) {
      setError('Please fill in all required fields');
      setIsVerifying(false);
      return;
    }

    try {
      // Simulate API call for insurance verification
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Mock verification result
      const mockResult: VerificationResult = {
        isActive: true,
        coverageType: 'PPO',
        deductible: 1500,
        deductibleMet: 500,
        copay: 25,
        coinsurance: 20,
        outOfPocketMax: 5000,
        outOfPocketMet: 800,
        mentalHealthCoverage: true,
        substanceAbuseCoverage: true,
        effectiveDate: '2024-01-01',
        priorAuthRequired: false,
        networkStatus: 'in-network',
        estimatedCostPerSession: 25,
      };

      // Send email notification when coverage is verified
      if (mockResult.isActive) {
        const emailBody = `Insurance Verification Completed

Patient Information:
- Subscriber Name: ${insuranceInfo.subscriberName}
- DOB: ${insuranceInfo.dateOfBirth}
- Relationship: ${insuranceInfo.relationship}

Insurance Details:
- Provider: ${insuranceInfo.provider}
- Member ID: ${insuranceInfo.memberId}
- Group Number: ${insuranceInfo.groupNumber}

Verification Results:
- Status: Active
- Coverage Type: ${mockResult.coverageType}
- Copay: $${mockResult.copay}
- Deductible: $${mockResult.deductible} (Met: $${mockResult.deductibleMet})
- Mental Health Coverage: ${mockResult.mentalHealthCoverage ? 'Yes' : 'No'}
- Network Status: ${mockResult.networkStatus}`;
        
        // Create mailto link to send email
        const mailtoLink = `mailto:info@shermanoaksdetoxandrehab.com?subject=Insurance Verification Completed - ${insuranceInfo.subscriberName}&body=${encodeURIComponent(emailBody)}`;
        window.open(mailtoLink, '_blank');
      }

      setVerificationResult(mockResult);
      setCurrentStep(2);
    } catch (err) {
      setError('Verification failed. Please check your information and try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleNext = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
      handleVerifyInsurance();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderInsuranceForm = () => (
    <Stack spacing={3}>
      <FormControl fullWidth required>
        <InputLabel>Insurance Provider</InputLabel>
        <Select
          value={insuranceInfo.provider}
          onChange={(e) => handleInputChange('provider', e.target.value)}
          label="Insurance Provider"
        >
          {insuranceProviders.map((provider) => (
            <MenuItem key={provider} value={provider}>
              {provider}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        fullWidth
        required
        label="Member ID"
        value={insuranceInfo.memberId}
        onChange={(e) => handleInputChange('memberId', e.target.value)}
        placeholder="Enter your member ID"
      />

      <TextField
        fullWidth
        label="Group Number"
        value={insuranceInfo.groupNumber}
        onChange={(e) => handleInputChange('groupNumber', e.target.value)}
        placeholder="Enter group number (if applicable)"
      />

      <TextField
        fullWidth
        required
        label="Subscriber Name"
        value={insuranceInfo.subscriberName}
        onChange={(e) => handleInputChange('subscriberName', e.target.value)}
        placeholder="Name of the primary policyholder"
      />

      <TextField
        fullWidth
        required
        label="Subscriber Date of Birth"
        type="date"
        value={insuranceInfo.dateOfBirth}
        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
        InputLabelProps={{ shrink: true }}
      />

      <FormControl fullWidth>
        <InputLabel>Relationship to Subscriber</InputLabel>
        <Select
          value={insuranceInfo.relationship}
          onChange={(e) => handleInputChange('relationship', e.target.value)}
          label="Relationship to Subscriber"
        >
          <MenuItem value="self">Self</MenuItem>
          <MenuItem value="spouse">Spouse</MenuItem>
          <MenuItem value="child">Child</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>

      {error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}

      <Alert severity="info">
        <Typography variant="body2">
          <strong>Privacy Notice:</strong> Your insurance information is transmitted securely and 
          in compliance with HIPAA regulations. We use this information solely for verifying your 
          coverage and benefits.
        </Typography>
      </Alert>
    </Stack>
  );

  const renderVerificationProgress = () => (
    <Stack spacing={3} alignItems="center">
      <LocalHospital sx={{ fontSize: 60, color: 'primary.main' }} />
      <Typography variant="h5" textAlign="center">
        Verifying Your Insurance Coverage
      </Typography>
      <Typography variant="body1" color="text.secondary" textAlign="center">
        We're checking your benefits with {insuranceInfo.provider}...
      </Typography>
      <LinearProgress sx={{ width: '100%' }} />
      <Typography variant="body2" color="text.secondary">
        This usually takes 30-60 seconds
      </Typography>
    </Stack>
  );

  const renderVerificationResults = () => {
    if (!verificationResult) return null;

    return (
      <Stack spacing={3}>
        <Card sx={{ bgcolor: verificationResult.isActive ? 'success.light' : 'error.light' }}>
          <CardContent>
            <Stack direction="row" alignItems="center" spacing={2}>
              {verificationResult.isActive ? (
                <CheckCircle sx={{ color: 'success.main', fontSize: 40 }} />
              ) : (
                <Cancel sx={{ color: 'error.main', fontSize: 40 }} />
              )}
              <div>
                <Typography variant="h6">
                  {verificationResult.isActive ? 'Coverage Verified' : 'Coverage Not Active'}
                </Typography>
                <Typography variant="body2">
                  {verificationResult.isActive 
                    ? 'Your insurance is active and covers mental health services'
                    : 'We were unable to verify active coverage'
                  }
                </Typography>
              </div>
            </Stack>
          </CardContent>
        </Card>

        {verificationResult.isActive && (
          <>
            <Typography variant="h6">Coverage Summary</Typography>
            
            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>Plan Type:</Typography>
                    <Chip label={verificationResult.coverageType} color="primary" size="small" />
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>Network Status:</Typography>
                    <Chip 
                      label={verificationResult.networkStatus} 
                      color={verificationResult.networkStatus === 'in-network' ? 'success' : 'warning'} 
                      size="small" 
                    />
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>Estimated Cost Per Session:</Typography>
                    <Typography fontWeight="bold">
                      ${verificationResult.estimatedCostPerSession}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>

            <Button
              variant="contained"
              fullWidth
              startIcon={<Person />}
              onClick={() => window.location.href = '/register'}
              size="large"
            >
              Get Started - Create Account
            </Button>
          </>
        )}
      </Stack>
    );
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Stack spacing={4}>
          <Stack alignItems="center" textAlign="center" spacing={2}>
            <Security sx={{ fontSize: 60, color: 'primary.main' }} />
            <Typography variant="h3" component="h1">
              Insurance Verification
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Verify your insurance coverage for mental health treatment at PYRAMID AFTER CARE
            </Typography>
          </Stack>

          <Stepper activeStep={currentStep} orientation="vertical">
            <Step>
              <StepLabel>Enter Insurance Information</StepLabel>
              <StepContent>
                {renderInsuranceForm()}
                <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={isVerifying}
                  >
                    Verify Coverage
                  </Button>
                </Stack>
              </StepContent>
            </Step>

            <Step>
              <StepLabel>Verification in Progress</StepLabel>
              <StepContent>
                {renderVerificationProgress()}
              </StepContent>
            </Step>

            <Step>
              <StepLabel>Coverage Results</StepLabel>
              <StepContent>
                {renderVerificationResults()}
                <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                  <Button onClick={handleBack}>
                    Verify Different Insurance
                  </Button>
                </Stack>
              </StepContent>
            </Step>
          </Stepper>
        </Stack>
      </Paper>
    </Container>
  );
};

export default InsuranceVerification;
