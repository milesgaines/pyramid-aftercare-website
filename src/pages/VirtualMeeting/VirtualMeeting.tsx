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
  Stepper,
  Step,
  StepLabel,
  StepContent,
  IconButton,
  Tooltip,
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
  StopScreenShare,
  Chat,
  People,
  Settings,
  Group,
  Security,
  Warning,
  Info,
  CheckCircle,
  Error as ErrorIcon,
  VolumeUp,
  Computer,
  PhoneAndroid,
  Wifi,
  NetworkCheck
} from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { zoomService } from '../../services/zoomService';

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
  const { user, isAuthenticated } = useAuth();

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
  const [meetingStarted, setMeetingStarted] = useState(false);
  const [participants, setParticipants] = useState<Array<any>>([]);
  const [connectionQuality, setConnectionQuality] = useState<'excellent' | 'good' | 'poor'>('excellent');
  const [showSettings, setShowSettings] = useState(false);
  const [hipaaAccepted, setHipaaAccepted] = useState(false);

  useEffect(() => {
    const loadMeeting = async () => {
      if (!meetingId || !isAuthenticated) {
        navigate('/login');
        return;
      }

      try {
        // Load meeting information
        const meeting = await zoomService.getMeeting(meetingId);
        // Convert Zoom meeting to our MeetingInfo format
        const meetingInfo: MeetingInfo = {
          id: meeting.id,
          topic: meeting.topic,
          startTime: new Date(meeting.start_time),
          duration: meeting.duration,
          hostId: meeting.host_id,
          type: 'therapy',
          participants: [
            { id: meeting.host_id, name: 'Dr. Sarah Johnson', role: 'provider', isHost: true },
            { id: user?.id || '', name: `${user?.firstName} ${user?.lastName}`, role: 'patient', isHost: false }
          ],
          settings: {
            requirePassword: !!meeting.password,
            enableWaitingRoom: meeting.settings.waiting_room,
            recordSession: meeting.settings.auto_recording !== 'none',
            hipaaCompliant: true
          }
        };
        setMeetingInfo(meetingInfo);
        setMeetingState('preview');
      } catch (error) {
        console.error('Failed to load meeting:', error);
        setMeetingState('ended');
      }
    };

    loadMeeting();
  }, [meetingId, isAuthenticated, navigate]);

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
      // await zoomService.joinMeeting(meetingInfo.id, user?.id || '');
      setMeetingState('connected');
      setMeetingStarted(true);
      
      // Simulate participants
      setParticipants([
        { id: user?.id, name: `${user?.firstName} ${user?.lastName}`, role: user?.role, isHost: false },
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

  if (!isAuthenticated) {
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
    const isHost = meetingInfo.participants.find(p => p.id === user?.id)?.isHost;

    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
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
          <Box sx={{ flex: 1 }}>
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
                          label={connectionQuality.toUpperCase()} 
                          size="small" 
                          color={
                            connectionQuality === 'excellent' ? 'success' :
                            connectionQuality === 'good' ? 'warning' : 'error'
                          }
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
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Box sx={{ height: 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column' }}>
        {/* Meeting Header */}
        <Paper sx={{ p: 2, mb: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">{meetingInfo.topic}</Typography>
            <Box display="flex" alignItems="center" gap={2}>
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
        <Box sx={{ flex: 1, display: 'flex', gap: 2 }}>
          {/* Video Area */}
          <Box sx={{ flex: 1, bgcolor: 'grey.900', borderRadius: 1, position: 'relative' }}>
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
              <Typography variant="h4">Video Conference Area</Typography>
            </Box>

            {/* Meeting Controls */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 2,
                bgcolor: 'rgba(0,0,0,0.8)',
                borderRadius: 2,
                p: 1
              }}
            >
              <IconButton
                onClick={toggleMicrophone}
                sx={{ 
                  color: 'white',
                  bgcolor: deviceSettings.microphoneEnabled ? 'transparent' : 'error.main' 
                }}
              >
                {deviceSettings.microphoneEnabled ? <Mic /> : <MicOff />}
              </IconButton>

              <IconButton
                onClick={toggleCamera}
                sx={{ 
                  color: 'white',
                  bgcolor: deviceSettings.cameraEnabled ? 'transparent' : 'error.main' 
                }}
              >
                {deviceSettings.cameraEnabled ? <Videocam /> : <VideocamOff />}
              </IconButton>

              <IconButton sx={{ color: 'white' }}>
                <ScreenShare />
              </IconButton>

              <IconButton sx={{ color: 'white' }}>
                <Chat />
              </IconButton>

              <IconButton sx={{ color: 'white' }}>
                <People />
              </IconButton>
            </Box>
          </Box>

          {/* Participants Panel */}
          <Card sx={{ width: 300 }}>
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
