import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';

const InstructionBox = () => {
  return (
    <div
    className='m-10'
      style={{
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Follow these steps to register your hotel and attract more customers:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <AssignmentIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Fill in all required fields in the registration form." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Ensure your contact information is accurate and up-to-date." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InfoIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Provide a detailed description of your hotel, including amenities and services." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AssignmentIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Upload at least 4 high-quality images showcasing both the exterior and interior of your hotel." />
        </ListItem>
      </List>
    </div>
  );
};

export default InstructionBox;
