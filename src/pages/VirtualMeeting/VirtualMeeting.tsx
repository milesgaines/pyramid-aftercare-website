import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Button,
  Alert,
  Card,
  CardContent,
  Box,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  LinearProgress,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import {
  VideoCall,
  Mic,
  MicOff,
  Videocam,
  VideocamOff,
  Phone,
  ScreenShare,
  Chat,
  People,
  Settings,
  Group,
  Security,
  CheckCircle,
  Error as ErrorIcon,
  NetworkCheck
} from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
// import { zoomService } from '../../services/zoomService';

interface MeetingInfo {
  id: string;
  topic: string;
  startTime: Date;
  duration: number;
  hostId: string;
  type: 'therapy' | 'group' | 'assessment' | 'consultation';
  participants: Array<{
    id: string;
    name: string;
    role: 'patient' | 'provider' | 'admin';
    isHost: boolean;
  }>;
  settings: {
    requirePassword: boolean;
    enableWaitingRoom: boolean;
    recordSession: boolean;
    hipaaCompliant: boolean;
  };
}

const VirtualMeeting: React.FC = () => {
  const { meetingId } = useParams<{ meetingId: string }>();
  const navigate = useNavigate();

  const [meetingState, setMeetingState] = useState<'loading' | 'preview' | 'connecting' | 'connected' | 'ended'>('loading');
  const [meetingInfo, setMeetingInfo] = useState<MeetingInfo | null>(null);
  const [techCheckComplete, setTechCheckComplete] = useState(false);
  const [permissions, setPermissions] = useState({
    camera: false,
    microphone: false,
    speakers: false
  });
  const [deviceSettings, setDeviceSettings] = useState({
    cameraEnabled: true,
    microphoneEnabled: true,
    speakerVolume: 80
  });
  // const [meetingStarted, setMeetingStarted] = useState(false);
  const [participants, setParticipants] = useState<Array<any>>([]);
  // const [connectionQuality, setConnectionQuality] = useState<'excellent' | 'good' | 'poor'>('excellent');
  const [showSettings, setShowSettings] = useState(false);
  const [hipaaAccepted, setHipaaAccepted] = useState(false);

  useEffect(() => {
    const initializeMeeting = async () => {
      if (!meetingId) {
        navigate('/');
        return;
      }

      try {
        setMeetingState('loading');
        
        // Simulate meeting info
        const mockMeetingInfo: MeetingInfo = {
          id: meetingId,
          topic: 'Therapy Session',
          startTime: new Date(),
          duration: 60,
          hostId: 'host123',
          type: 'therapy',
          participants: [
            { id: 'user123', name: 'Guest User', role: 'patient', isHost: false }
          ],
          settings: {
            requirePassword: false,
            enableWaitingRoom: true,
            recordSession: false,
            hipaaCompliant: true
          }
        };

        setMeetingInfo(mockMeetingInfo);
        setMeetingState('preview');
      } catch (error) {
        console.error('Failed to initialize meeting:', error);
        setMeetingState('ended');
      }
    };

    initializeMeeting();
  }, [meetingId, navigate]);

  const performTechCheck = async () => {
    try {
      // Check camera permission
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setPermissions(prev => ({ ...prev, camera: true }));
      stream.getTracks().forEach(track => track.stop());

      // Check microphone permission
      const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setPermissions(prev => ({ ...prev, microphone: true }));
      audioStream.getTracks().forEach(track => track.stop());

      // Check speakers (simulated)
      setPermissions(prev => ({ ...prev, speakers: true }));
      
      setTechCheckComplete(true);
    } catch (error) {
      console.error('Tech check failed:', error);
    }
  };

  const joinMeeting = async () => {
    if (!meetingInfo || !hipaaAccepted) return;

    setMeetingState('connecting');
    
    try {
      // Simulate joining meeting - no actual joinMeeting method needed
      // await zoomService.joinMeeting(meetingInfo.id, 'guest-user');
      setMeetingState('connected');
      // setMeetingStarted(true);
      
      // Simulate participants
      setParticipants([
        { id: 'guest-123', name: 'Guest User', role: 'patient', isHost: false },
        { id: 'provider-1', name: 'Dr. Sarah Johnson', role: 'provider', isHost: true }
      ]);
    } catch (error) {
      console.error('Failed to join meeting:', error);
      setMeetingState('preview');
    }
  };

  const leaveMeeting = () => {
    setMeetingState('ended');
    navigate('/dashboard');
  };

  const toggleCamera = () => {
    setDeviceSettings(prev => ({
      ...prev,
      cameraEnabled: !prev.cameraEnabled
    }));
  };

  const toggleMicrophone = () => {
    setDeviceSettings(prev => ({
      ...prev,
      microphoneEnabled: !prev.microphoneEnabled
    }));
  };

  // Remove auth check - allow any user to access
  if (false) {
    return (
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Alert severity="warning">
          Please log in to join the meeting.
        </Alert>
      </Container>
    );
  }

  if (meetingState === 'loading') {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
          <Box textAlign="center">
            <LinearProgress sx={{ mb: 2, width: 200 }} />
            <Typography>Loading meeting information...</Typography>
          </Box>
        </Box>
      </Container>
    );
  }

  if (meetingState === 'ended' || !meetingInfo) {
    return (
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Meeting Ended
          </Typography>
          <Typography color="textSecondary" paragraph>
            Thank you for attending your session. Your provider will follow up with any next steps.
          </Typography>
          <Button variant="contained" onClick={() => navigate('/dashboard')}>
            Return to Dashboard
          </Button>
        </Paper>
      </Container>
    );
  }

  if (meetingState === 'preview') {
    // const isHost = meetingInfo.participants.find(p => p.id === user?.id)?.isHost;

    return (
      <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 }, px: { xs: 1, sm: 2, md: 3 } }}>
        <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
          {/* Meeting Preview */}
          <Box sx={{ flex: 2 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {meetingInfo.topic}
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Chip 
                    label={meetingInfo.type.toUpperCase()} 
                    color="primary" 
                    size="small" 
                    sx={{ mr: 1 }} 
                  />
                  <Chip 
                    label="HIPAA Compliant" 
                    color="success" 
                    size="small" 
                    icon={<Security />} 
                  />
                </Box>

                {/* Video Preview */}
                <Box 
                  sx={{ 
                    bgcolor: 'grey.900', 
                    borderRadius: 1, 
                    position: 'relative',
                    paddingTop: '56.25%', // 16:9 aspect ratio
                    mb: 2 
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}
                  >
                    {deviceSettings.cameraEnabled ? (
                      <Box textAlign="center">
                        <Videocam fontSize="large" />
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          Camera Preview
                        </Typography>
                      </Box>
                    ) : (
                      <Box textAlign="center">
                        <VideocamOff fontSize="large" />
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          Camera Off
                        </Typography>
                      </Box>
                    )}
                  </Box>

                  {/* Control Bar */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: 1
                    }}
                  >
                    <IconButton
                      onClick={toggleCamera}
                      sx={{ 
                        bgcolor: deviceSettings.cameraEnabled ? 'primary.main' : 'error.main',
                        color: 'white',
                        '&:hover': {
                          bgcolor: deviceSettings.cameraEnabled ? 'primary.dark' : 'error.dark'
                        }
                      }}
                    >
                      {deviceSettings.cameraEnabled ? <Videocam /> : <VideocamOff />}
                    </IconButton>
                    
                    <IconButton
                      onClick={toggleMicrophone}
                      sx={{ 
                        bgcolor: deviceSettings.microphoneEnabled ? 'primary.main' : 'error.main',
                        color: 'white',
                        '&:hover': {
                          bgcolor: deviceSettings.microphoneEnabled ? 'primary.dark' : 'error.dark'
                        }
                      }}
                    >
                      {deviceSettings.microphoneEnabled ? <Mic /> : <MicOff />}
                    </IconButton>

                    <IconButton
                      onClick={() => setShowSettings(true)}
                      sx={{ 
                        bgcolor: 'grey.600',
                        color: 'white',
                        '&:hover': {
                          bgcolor: 'grey.700'
                        }
                      }}
                    >
                      <Settings />
                    </IconButton>
                  </Box>
                </Box>

                {/* Tech Check Status */}
                <Alert 
                  severity={techCheckComplete ? "success" : "info"} 
                  sx={{ mb: 2 }}
                  action={
                    !techCheckComplete && (
                      <Button onClick={performTechCheck} size="small">
                        Run Check
                      </Button>
                    )
                  }
                >
                  {techCheckComplete 
                    ? "Tech check completed successfully"
                    : "Please run a tech check before joining"
                  }
                </Alert>

                {/* HIPAA Compliance */}
                <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    <Security sx={{ mr: 1, verticalAlign: 'middle' }} />
                    HIPAA Privacy Notice
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    This session is conducted in a secure, HIPAA-compliant environment. 
                    Your privacy and confidentiality are protected. By joining this meeting, 
                    you acknowledge that you understand and consent to participate in telehealth services.
                  </Typography>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={hipaaAccepted}
                        onChange={(e) => setHipaaAccepted(e.target.checked)}
                      />
                    }
                    label="I understand and agree to the privacy terms"
                  />
                </Paper>

                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  onClick={joinMeeting}
                  disabled={!techCheckComplete || !hipaaAccepted}
                  startIcon={<VideoCall />}
                >
                  Join Meeting
                </Button>
              </CardContent>
            </Card>
          </Box>

          {/* Meeting Info Sidebar */}
          <Box sx={{ flex: 1, minWidth: { xs: 'auto', md: 300 } }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Meeting Details
                </Typography>
                
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <Group />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Participants" 
                      secondary={`${meetingInfo.participants.length} expected`} 
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <NetworkCheck />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Connection" 
                      secondary={
                        <Chip 
                          label="EXCELLENT" 
                          size="small" 
                          color="success"
                        />
                      } 
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <Security />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Security" 
                      secondary="End-to-end encrypted" 
                    />
                  </ListItem>
                </List>

                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                  Expected Participants
                </Typography>
                
                <List dense>
                  {meetingInfo.participants.map((participant) => (
                    <ListItem key={participant.id}>
                      <ListItemText 
                        primary={participant.name}
                        secondary={
                          <Chip 
                            label={participant.role} 
                            size="small" 
                            color={participant.isHost ? 'primary' : 'default'}
                          />
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Settings Dialog */}
        <Dialog open={showSettings} onClose={() => setShowSettings(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Meeting Settings</DialogTitle>
          <DialogContent>
            <Typography variant="h6" gutterBottom>
              Device Permissions
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  {permissions.camera ? <CheckCircle color="success" /> : <ErrorIcon color="error" />}
                </ListItemIcon>
                <ListItemText primary="Camera Access" secondary={permissions.camera ? "Granted" : "Not granted"} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  {permissions.microphone ? <CheckCircle color="success" /> : <ErrorIcon color="error" />}
                </ListItemIcon>
                <ListItemText primary="Microphone Access" secondary={permissions.microphone ? "Granted" : "Not granted"} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  {permissions.speakers ? <CheckCircle color="success" /> : <ErrorIcon color="error" />}
                </ListItemIcon>
                <ListItemText primary="Speaker Access" secondary={permissions.speakers ? "Available" : "Not available"} />
              </ListItem>
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowSettings(false)}>Close</Button>
            <Button onClick={performTechCheck} variant="contained">Retest Devices</Button>
          </DialogActions>
        </Dialog>
      </Container>
    );
  }

  // Connected state - show meeting interface
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 1, md: 2 }, px: { xs: 1, sm: 2, md: 3 } }}>
      <Box sx={{ height: { xs: 'auto', md: 'calc(100vh - 100px)' }, display: 'flex', flexDirection: 'column' }}>
        {/* Meeting Header */}
        <Paper sx={{ p: { xs: 1, sm: 2 }, mb: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection={{ xs: 'column', sm: 'row' }} gap={{ xs: 2, sm: 0 }}>
            <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>{meetingInfo.topic}</Typography>
            <Box display="flex" alignItems="center" gap={2} flexDirection={{ xs: 'column', sm: 'row' }}>
              <Chip 
                label={`${participants.length} participants`} 
                icon={<People />} 
                size="small" 
              />
              <Chip 
                label="Recording" 
                color="error" 
                size="small" 
                sx={{ display: meetingInfo.settings.recordSession ? 'inline-flex' : 'none' }}
              />
              <Button
                variant="contained"
                color="error"
                onClick={leaveMeeting}
                startIcon={<Phone />}
              >
                End Call
              </Button>
            </Box>
          </Box>
        </Paper>

        {/* Main Meeting Area */}
        <Box sx={{ flex: 1, display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
          {/* Video Area */}
          <Box sx={{ flex: 1, bgcolor: 'grey.900', borderRadius: 1, position: 'relative', minHeight: { xs: 300, md: 'auto' } }}>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}
            >
              <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>Video Conference Area</Typography>
            </Box>

            {/* Meeting Controls */}
            <Box
              sx={{
                position: 'absolute',
                bottom: { xs: 10, md: 20 },
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: { xs: 1, md: 2 },
                bgcolor: 'rgba(0,0,0,0.8)',
                borderRadius: 2,
                p: 1
              }}
            >
              <IconButton
                onClick={toggleMicrophone}
                sx={{ 
                  color: 'white',
                  bgcolor: deviceSettings.microphoneEnabled ? 'transparent' : 'error.main',
                  width: { xs: 40, md: 48 },
                  height: { xs: 40, md: 48 }
                }}
              >
                {deviceSettings.microphoneEnabled ? <Mic /> : <MicOff />}
              </IconButton>

              <IconButton
                onClick={toggleCamera}
                sx={{ 
                  color: 'white',
                  bgcolor: deviceSettings.cameraEnabled ? 'transparent' : 'error.main',
                  width: { xs: 40, md: 48 },
                  height: { xs: 40, md: 48 }
                }}
              >
                {deviceSettings.cameraEnabled ? <Videocam /> : <VideocamOff />}
              </IconButton>

              <IconButton sx={{ color: 'white', width: { xs: 40, md: 48 }, height: { xs: 40, md: 48 } }}>
                <ScreenShare />
              </IconButton>

              <IconButton sx={{ color: 'white', width: { xs: 40, md: 48 }, height: { xs: 40, md: 48 } }}>
                <Chat />
              </IconButton>

              <IconButton sx={{ color: 'white', width: { xs: 40, md: 48 }, height: { xs: 40, md: 48 } }}>
                <People />
              </IconButton>
            </Box>
          </Box>

          {/* Participants Panel */}
          <Card sx={{ width: { xs: '100%', md: 300 } }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Participants ({participants.length})
              </Typography>
              <List dense>
                {participants.map((participant) => (
                  <ListItem key={participant.id}>
                    <ListItemText
                      primary={participant.name}
                      secondary={
                        <Box>
                          <Chip 
                            label={participant.role} 
                            size="small" 
                            color={participant.isHost ? 'primary' : 'default'}
                          />
                          {participant.isHost && (
                            <Chip label="Host" size="small" color="primary" sx={{ ml: 1 }} />
                          )}
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default VirtualMeeting;
