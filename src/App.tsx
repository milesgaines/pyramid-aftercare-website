import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// Components
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import PatientPortal from './pages/PatientPortal/PatientPortal';
import AdminPortal from './pages/AdminPortal/AdminPortal';
import Login from './pages/Auth/Login';
import VirtualMeeting from './pages/VirtualMeeting/VirtualMeeting';
import InsuranceVerification from './pages/InsuranceVerification/InsuranceVerification';
import IOPProgram from './pages/Programs/IOPProgram';
import PHPProgram from './pages/Programs/PHPProgram';
import GroupTherapy from './pages/GroupTherapy/GroupTherapy';
import VirtualTherapy from './pages/VirtualTherapy/VirtualTherapy';
import Legal from './pages/Legal/Legal';
import Support from './pages/Support/Support';

// Context
import { AuthProvider } from './context/AuthContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6B7B7D',
      dark: '#4A5B5D',
      light: '#8A9B9D',
    },
    secondary: {
      main: '#7FB069',
      dark: '#5A8049',
      light: '#A3C089',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3E40',
      secondary: '#5D6D7E',
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    h1: {
      fontSize: '2.75rem',
      fontWeight: 600,
      fontFamily: '"Montserrat", sans-serif',
      color: '#2C3E40',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 500,
      fontFamily: '"Montserrat", sans-serif',
      color: '#2C3E40',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      fontFamily: '"Montserrat", sans-serif',
      color: '#2C3E40',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      fontFamily: '"Montserrat", sans-serif',
      color: '#2C3E40',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      fontFamily: '"Montserrat", sans-serif',
      color: '#2C3E40',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      fontFamily: '"Montserrat", sans-serif',
      color: '#2C3E40',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      fontFamily: '"Inter", sans-serif',
      color: '#5D6D7E',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      fontFamily: '"Inter", sans-serif',
      color: '#5D6D7E',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.95rem',
          padding: '12px 32px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(107, 123, 125, 0.15)',
            transform: 'translateY(-1px)',
          },
          transition: 'all 0.2s ease-in-out',
        },
        contained: {
          background: 'linear-gradient(135deg, #6B7B7D 0%, #7FB069 100%)',
          color: '#FFFFFF',
          '&:hover': {
            background: 'linear-gradient(135deg, #4A5B5D 0%, #5A8049 100%)',
          },
        },
        outlined: {
          borderColor: '#6B7B7D',
          color: '#6B7B7D',
          borderWidth: '1.5px',
          '&:hover': {
            borderColor: '#4A5B5D',
            backgroundColor: 'rgba(107, 123, 125, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.04)',
          border: '1px solid rgba(0, 0, 0, 0.06)',
          overflow: 'hidden',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 1px 0 rgba(0, 0, 0, 0.06)',
          color: '#2C3E40',
        },
      },
    },
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AuthProvider>
            <Router>
              <div className="App">
                <Navigation />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  {/* <Route path="/register" element={<Register />} /> */}
                  <Route path="/patient-portal/*" element={<PatientPortal />} />
                  <Route path="/admin-portal/*" element={<AdminPortal />} />
                  <Route path="/virtual-meeting" element={<VirtualMeeting />} />
                  <Route path="/virtual-meeting/:meetingId" element={<VirtualMeeting />} />
                  <Route path="/insurance-verification" element={<InsuranceVerification />} />
                  <Route path="/iop-program" element={<IOPProgram />} />
                  <Route path="/php-program" element={<PHPProgram />} />
                  <Route path="/group-therapy" element={<GroupTherapy />} />
                  <Route path="/virtual-therapy" element={<VirtualTherapy />} />
                  <Route path="/programs/iop" element={<IOPProgram />} />
                  <Route path="/programs/php" element={<PHPProgram />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/legal" element={<Legal />} />
                </Routes>
                <Footer />
                <ScrollToTop />
              </div>
            </Router>
          </AuthProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  );
}

export default App;
