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
  Avatar,
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
  Person,
  AdminPanelSettings,
  VideoCall,
  Logout,
  Login,
  PersonAdd,
  Phone,
  LocalHospital,
  Group,
  VerifiedUser,
  ArrowDropDown,
  SupportAgent,
  Dashboard,
  Psychology,
  Groups,
  MedicalServices,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsAnchor, setProgramsAnchor] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    handleClose();
  };

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
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'IOP Program', icon: <LocalHospital />, path: '/programs/iop' },
    { text: 'PHP Program', icon: <LocalHospital />, path: '/programs/php' },
    { text: 'Group Therapy', icon: <Group />, path: '/group-therapy' },
    { text: 'Virtual Therapy', icon: <VideoCall />, path: '/virtual-therapy' },
    { text: 'Insurance Verification', icon: <VerifiedUser />, path: '/insurance-verification#verification-form' },
    ...(isAuthenticated
      ? user?.role === 'admin'
        ? [{ text: 'Admin Portal', icon: <AdminPanelSettings />, path: '/admin-portal' }]
        : [{ text: 'Patient Portal', icon: <Person />, path: '/patient-portal' }]
      : []),
    ...(isAuthenticated
      ? [{ text: 'Virtual Meeting', icon: <VideoCall />, path: '/virtual-meeting/demo' }]
      : []),
  ];

  const programItems = [
    { text: 'IOP Program', path: '/programs/iop', icon: <LocalHospital /> },
    { text: 'PHP Program', path: '/programs/php', icon: <MedicalServices /> },
    { text: 'Group Therapy', path: '/group-therapy', icon: <Groups /> },
    { text: 'Virtual Therapy', path: '/virtual-therapy', icon: <Psychology /> },
    { text: 'Patient Portal', path: '/patient-portal', icon: <Dashboard /> },
    { text: 'Virtual Meetings', path: '/virtual-meeting', icon: <VideoCall /> },
    { text: '24/7 Support', path: '/support', icon: <SupportAgent /> },
  ];

  const authItems = isAuthenticated
    ? [
        { text: 'Profile', icon: <Person />, action: () => navigate('/patient-portal/profile') },
        { text: 'Logout', icon: <Logout />, action: handleLogout },
      ]
    : [
        { text: 'Login', icon: <Login />, action: () => navigate('/login') },
        { text: 'Register', icon: <PersonAdd />, action: () => navigate('/register') },
      ];

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', px: 2, mb: 2 }}>
        <img
          src="/pyramid-logo.png"
          alt="PYRAMID AFTER CARE"
          style={{ height: 40, marginRight: 10 }}
        />
        <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
          PYRAMID
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
        <Box sx={{ mt: 2, pt: 2, borderTop: 1, borderColor: 'divider' }}>
          {authItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => {
                  item.action();
                  setMobileOpen(false);
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" elevation={2}>
        <Container maxWidth="xl">
          <Toolbar>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: isMobile ? 1 : 0 }}>
              <img
                src="/pyramid-logo.png"
                alt="PYRAMID AFTER CARE"
                style={{ height: 40, marginRight: 10, cursor: 'pointer' }}
                onClick={() => navigate('/')}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{ 
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: { xs: 'none', sm: 'block' }
                }}
                onClick={() => navigate('/')}
              >
                PYRAMID AFTER CARE
              </Typography>
            </Box>

            {!isMobile && (
              <Box sx={{ flexGrow: 1, display: 'flex', ml: 4 }}>
                <Button
                  color="inherit"
                  onClick={() => navigate('/')}
                  sx={{
                    mx: 1,
                    color: location.pathname === '/' ? 'secondary.main' : 'inherit',
                    fontWeight: location.pathname === '/' ? 600 : 400,
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
                    mx: 1,
                    color: (location.pathname.includes('/programs') || 
                           location.pathname === '/group-therapy' || 
                           location.pathname === '/virtual-therapy') ? 'secondary.main' : 'inherit',
                    fontWeight: (location.pathname.includes('/programs') || 
                                location.pathname === '/group-therapy' || 
                                location.pathname === '/virtual-therapy') ? 600 : 400,
                  }}
                >
                  Services
                </Button>

                <Button
                  color="inherit"
                  onClick={() => navigate('/insurance-verification#verification-form')}
                  sx={{
                    mx: 1,
                    color: location.pathname === '/insurance-verification' ? 'secondary.main' : 'inherit',
                    fontWeight: location.pathname === '/insurance-verification' ? 600 : 400,
                  }}
                >
                  Insurance
                </Button>

                {isAuthenticated && (
                  <Button
                    color="inherit"
                    onClick={() => navigate(user?.role === 'admin' ? '/admin-portal' : '/patient-portal')}
                    sx={{
                      mx: 1,
                      color: location.pathname.includes('portal') ? 'secondary.main' : 'inherit',
                      fontWeight: location.pathname.includes('portal') ? 600 : 400,
                    }}
                  >
                    {user?.role === 'admin' ? 'Admin Portal' : 'Patient Portal'}
                  </Button>
                )}

                {isAuthenticated && (
                  <Button
                    color="inherit"
                    onClick={() => navigate('/virtual-meeting/demo')}
                    sx={{
                      mx: 1,
                      color: location.pathname.includes('/virtual-meeting') ? 'secondary.main' : 'inherit',
                      fontWeight: location.pathname.includes('/virtual-meeting') ? 600 : 400,
                    }}
                  >
                    Virtual Meeting
                  </Button>
                )}
              </Box>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {isAuthenticated ? (
                <>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <Avatar sx={{ bgcolor: 'secondary.main' }}>
                      {user?.firstName?.[0]}{user?.lastName?.[0]}
                    </Avatar>
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => { navigate('/patient-portal/profile'); handleClose(); }}>
                      <Person sx={{ mr: 1 }} />
                      Profile
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <Logout sx={{ mr: 1 }} />
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  {!isMobile && (
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button color="inherit" onClick={() => navigate('/login')}>
                        Login
                      </Button>
                      <Button
                        variant="outlined"
                        color="inherit"
                        href="tel:8183000033"
                        startIcon={<Phone />}
                        sx={{ ml: 1 }}
                      >
                        Call Us
                      </Button>
                    </Box>
                  )}
                  {isMobile && (
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton
                        color="inherit"
                        onClick={() => navigate('/login')}
                        sx={{ 
                          bgcolor: 'rgba(255,255,255,0.1)',
                          '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.2)',
                          }
                        }}
                      >
                        <Login />
                      </IconButton>
                      <IconButton
                        color="inherit"
                        href="tel:8183000033"
                        sx={{ 
                          bgcolor: 'rgba(255,255,255,0.1)',
                          '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.2)',
                          }
                        }}
                      >
                        <Phone />
                      </IconButton>
                    </Box>
                  )}
                </>
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
        {programItems.map((item) => (
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
