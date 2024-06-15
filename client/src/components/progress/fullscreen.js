import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const FullscreenLoader = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(5px)',
        zIndex: 1300, // Higher than MUI modals
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm z-50"
    >
      <CircularProgress />
    </Box>
  );
};

export default FullscreenLoader;
