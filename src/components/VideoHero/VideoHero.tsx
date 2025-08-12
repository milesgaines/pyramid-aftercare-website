import React from 'react';
import { Box, Container } from '@mui/material';

const VideoHero: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '70vh', md: '90vh' },
        overflow: 'hidden',
        mb: 6,
      }}
    >
      {/* Video Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.7) 100%)',
            zIndex: 1,
          },
        }}
      >
        {/* Video element */}
        <Box
          component="video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            '&::-webkit-media-controls': {
              display: 'none !important',
            },
          }}
          onLoadedData={(e) => {
            const video = e.target as HTMLVideoElement;
            video.currentTime = 0;
          }}
          onEnded={(e) => {
            const video = e.target as HTMLVideoElement;
            video.currentTime = 0;
            video.play();
          }}
        >
          <source src="/images/therapy-hero.mp4" type="video/mp4" />
        </Box>

        {/* Fallback image */}
        <Box
          component="img"
          src="/images/GROUP THERAPY.jpeg"
          alt="Group Therapy Session"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            zIndex: -1,
          }}
        />
      </Box>

      {/* Logo Overlay */}
      <Container
        maxWidth="lg"
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
          py: 4, // Add padding to prevent cutoff
        }}
      >
        {/* Your actual logo - centered with strong shadow */}
          <Box
            component="img"
            src="/images/pyramid-logo.png"
            alt="Pyramid After Care Logo"
            sx={{
              width: { xs: '400px', sm: '500px', md: '600px' },
              height: 'auto',
              maxHeight: { xs: '320px', sm: '400px', md: '480px' },
              objectFit: 'contain',
              // Strong shadow without animations - make logo white and more prominent
              filter: 'brightness(0) invert(1)',
              textShadow: '0 0 20px rgba(0, 0, 0, 0.8)',
              dropShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
              WebkitFilter: 'brightness(0) invert(1) drop-shadow(0 12px 40px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.7))',
              // Enhanced contrast and sharpness
              imageRendering: 'crisp-edges',
              WebkitImageRendering: 'crisp-edges',
              position: 'relative',
              zIndex: 3,
              // Add a subtle glow effect
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                borderRadius: 'inherit',
                zIndex: -1,
              },
            }}
          />
      </Container>
    </Box>
  );
};

export default VideoHero;
