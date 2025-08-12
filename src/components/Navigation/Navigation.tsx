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
  LocalHospital,
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

  const menuItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    ...(isAuthenticated
      ? user?.role === 'admin'
        ? [{ text: 'Admin Portal', icon: <AdminPanelSettings />, path: '/admin-portal' }]
        : [{ text: 'Patient Portal', icon: <Person />, path: '/patient-portal' }]
      : []),
    ...(isAuthenticated
      ? [{ text: 'Virtual Meeting', icon: <VideoCall />, path: '/virtual-meeting/demo' }]
      : []),
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
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    color="inherit"
                    onClick={() => navigate(item.path)}
                    sx={{
                      mx: 1,
                      color: location.pathname === item.path ? 'secondary.main' : 'inherit',
                      fontWeight: location.pathname === item.path ? 600 : 400,
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
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
                !isMobile && (
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button color="inherit" onClick={() => navigate('/login')}>
                      Login
                    </Button>
                    <Button
                      variant="outlined"
                      color="inherit"
                      onClick={() => navigate('/register')}
                      sx={{ ml: 1 }}
                    >
                      Register
                    </Button>
                  </Box>
                )
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
    </>
  );
};

export default Navigation;
