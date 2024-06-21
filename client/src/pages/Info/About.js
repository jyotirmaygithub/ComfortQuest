import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HotelIcon from '@mui/icons-material/Hotel';
import BusinessIcon from '@mui/icons-material/Business';
import FlightIcon from '@mui/icons-material/Flight';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const AboutComfortQuest = () => {
  return (
    <Box
    className="mt-32 m-5"
      sx={{
        padding: 4,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        About ComfortQuest
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to <strong>ComfortQuest</strong>, your ultimate destination for seamless travel experiences. At ComfortQuest, we specialize in three main services to ensure your journey is comfortable, convenient, and unforgettable.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Our Services
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <HotelIcon color="primary" fontSize="large" />
          <Typography variant="h6" gutterBottom>
            Hotel Booking
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Wide Selection: Choose from a vast array of hotels worldwide, ranging from budget-friendly options to luxury accommodations." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="User Reviews: Read genuine reviews from fellow travelers to make informed decisions." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Best Price Guarantee: Enjoy competitive rates and exclusive deals to get the best value for your stay." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Instant Confirmation: Receive instant booking confirmations and easy cancellation options for a hassle-free experience." />
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} sm={4}>
          <BusinessIcon color="primary" fontSize="large" />
          <Typography variant="h6" gutterBottom>
            Hotel Registration
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Easy Registration: Fill out a simple form to list your hotel on our platform." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Comprehensive Profile: Provide detailed descriptions, high-quality images, and a list of amenities to attract potential guests." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Enhanced Reach: Tap into a global audience and increase your bookings with our extensive marketing efforts." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Support and Guidance: Our team is here to assist you every step of the way, ensuring your hotel stands out in a competitive market." />
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} sm={4}>
          <FlightIcon color="primary" fontSize="large" />
          <Typography variant="h6" gutterBottom>
            Trip Booking
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Tailored Itineraries: Customize your travel plans with personalized itineraries that suit your preferences and budget." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Complete Packages: Book comprehensive travel packages, including flights, accommodations, and activities, all in one place." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Expert Recommendations: Get suggestions from our travel experts to discover the best attractions, dining, and entertainment options." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Seamless Experience: Enjoy a smooth booking process and dedicated customer support to handle any queries or changes." />
            </ListItem>
          </List>
        </Grid>
      </Grid>

      <Typography variant="h5" gutterBottom>
        Why Choose ComfortQuest?
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="User-Friendly Platform: Our intuitive interface makes it easy for you to navigate and find what you need quickly." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="24/7 Customer Support: We're here to help you at any time, ensuring a stress-free travel experience." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Trusted and Reliable: Join millions of satisfied customers who trust ComfortQuest for their travel needs." />
        </ListItem>
      </List>

      <Typography variant="body1" paragraph>
        At ComfortQuest, we are committed to making your travel dreams a reality. Whether you're planning a weekend getaway, a business trip, or a long vacation, we've got you covered. Explore, book, and embark on your next adventure with ComfortQuest.
      </Typography>
    </Box>
  );
};

export default AboutComfortQuest;
