import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home,
  Phone,
  LocalHospital,
  ArrowDropDown,
  SupportAgent,
  Groups,
  MedicalServices,
  Info,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsAnchor, setProgramsAnchor] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProgramsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setProgramsAnchor(event.currentTarget);
  };

  const handleProgramsClose = () => {
    setProgramsAnchor(null);
  };

  const menuItems = [
    { text: 'Home', path: '/', icon: <Home /> },
    { text: 'IOP Program', path: '/programs/iop', icon: <LocalHospital /> },
    { text: 'PHP Program', path: '/programs/php', icon: <MedicalServices /> },
    { text: 'Group Therapy', path: '/group-therapy', icon: <Groups /> },
    { text: 'About', path: '/about', icon: <Info /> },
    { text: '24/7 Support', path: '/support', icon: <SupportAgent /> },
  ];

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', px: 2, mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
          PYRAMID AFTER CARE
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
                setMobileOpen(false);
              }}
              selected={location.pathname === item.path}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="static" 
        elevation={0}
        sx={{
          background: 'linear-gradient(135deg, #3a3a3a 0%, #2d2d2d 50%, #1a1a1a 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 1 }}>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  mr: 2,
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  padding: '8px',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    transform: 'scale(1.05)'
                  },
                  '& .MuiSvgIcon-root': {
                    fontSize: '1.5rem',
                    color: '#f0f0f0'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: isMobile ? 1 : 0 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ 
                  fontWeight: 700,
                  cursor: 'pointer',
                  color: '#e8e8e8',
                  letterSpacing: '0.3px',
                  fontSize: { xs: '1rem', sm: '1.2rem' },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#f5f5f5',
                    transform: 'translateY(-1px)'
                  }
                }}
                onClick={() => navigate('/')}
              >
                PYRAMID AFTER CARE
              </Typography>
            </Box>

            {!isMobile && (
              <Box sx={{ flexGrow: 1, display: 'flex', ml: 6, gap: 1 }}>
                <Button
                  color="inherit"
                  onClick={() => navigate('/')}
                  sx={{
                    mx: 1.5,
                    color: location.pathname === '/' ? '#b8b8b8' : 'rgba(255,255,255,0.8)',
                    fontWeight: location.pathname === '/' ? 600 : 500,
                    borderRadius: '8px',
                    px: 2.5,
                    py: 1,
                    transition: 'all 0.3s ease',
                    background: location.pathname === '/' ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.08)',
                      color: '#f0f0f0',
                      transform: 'translateY(-1px)'
                    }
                  }}
                >
                  Home
                </Button>

                {/* Services Dropdown */}
                <Button
                  color="inherit"
                  onClick={handleProgramsMenu}
                  endIcon={<ArrowDropDown />}
                  sx={{
                    mx: 1.5,
                    color: (location.pathname.includes('/programs') || 
                           location.pathname === '/group-therapy') ? '#b8b8b8' : 'rgba(255,255,255,0.8)',
                    fontWeight: (location.pathname.includes('/programs') || 
                                location.pathname === '/group-therapy') ? 600 : 500,
                    borderRadius: '8px',
                    px: 2.5,
                    py: 1,
                    transition: 'all 0.3s ease',
                    background: (location.pathname.includes('/programs') || 
                                location.pathname === '/group-therapy') ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.08)',
                      color: '#f0f0f0',
                      transform: 'translateY(-1px)'
                    }
                  }}
                >
                  Services
                </Button>

                <Button
                  color="inherit"
                  onClick={() => navigate('/about')}
                  sx={{
                    mx: 1.5,
                    color: location.pathname === '/about' ? '#b8b8b8' : 'rgba(255,255,255,0.8)',
                    fontWeight: location.pathname === '/about' ? 600 : 500,
                    borderRadius: '8px',
                    px: 2.5,
                    py: 1,
                    transition: 'all 0.3s ease',
                    background: location.pathname === '/about' ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.08)',
                      color: '#f0f0f0',
                      transform: 'translateY(-1px)'
                    }
                  }}
                >
                  About
                </Button>

                <Button
                  variant="outlined"
                  onClick={() => navigate('/insurance-verification#verification-form')}
                  sx={{
                    mx: 1.5,
                    color: '#f0f0f0',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    fontWeight: 600,
                    borderRadius: '8px',
                    px: 3,
                    py: 1,
                    transition: 'all 0.3s ease',
                    background: location.pathname === '/insurance-verification' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.15)',
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      transform: 'translateY(-1px)'
                    }
                  }}
                >
                  Verify Insurance
                </Button>
              </Box>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {!isMobile && (
                <Button
                  variant="contained"
                  href="tel:8182086456"
                  startIcon={<Phone />}
                  sx={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#f0f0f0',
                    fontWeight: 600,
                    borderRadius: '8px',
                    px: 2.5,
                    py: 1.2,
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.15)',
                      transform: 'translateY(-1px)',
                      borderColor: 'rgba(255, 255, 255, 0.3)'
                    }
                  }}
                >
                  Call Us
                </Button>
              )}
              {isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Button
                    variant="text"
                    size="small"
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      textTransform: 'none',
                      minWidth: 'auto',
                      px: 1,
                      '&:hover': {
                        color: '#f0f0f0',
                        background: 'rgba(255, 255, 255, 0.05)'
                      }
                    }}
                    onClick={() => navigate('/support')}
                  >
                    24/7 Support
                  </Button>
                  <IconButton
                    color="inherit"
                    href="tel:8182086456"
                    sx={{ 
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#f0f0f0',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.15)',
                        transform: 'scale(1.05)',
                        borderColor: 'rgba(255, 255, 255, 0.3)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Phone />
                  </IconButton>
                </Box>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Services Dropdown Menu */}
      <Menu
        id="services-menu"
        anchorEl={programsAnchor}
        open={Boolean(programsAnchor)}
        onClose={handleProgramsClose}
        MenuListProps={{
          'aria-labelledby': 'services-button',
        }}
        PaperProps={{
          sx: {
            minWidth: 280,
            mt: 1,
            '& .MuiMenuItem-root': {
              px: 3,
              py: 1.5,
              fontSize: '0.95rem',
              '&:hover': {
                backgroundColor: 'rgba(107, 123, 125, 0.08)',
              },
            },
          },
        }}
      >
        {menuItems.filter(item => 
          item.path.includes('/programs') || 
          item.path === '/group-therapy'
        ).map((item) => (
          <MenuItem
            key={item.text}
            onClick={() => {
              navigate(item.path);
              handleProgramsClose();
            }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box sx={{ color: 'primary.main', display: 'flex', alignItems: 'center' }}>
              {item.icon}
            </Box>
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Navigation;
